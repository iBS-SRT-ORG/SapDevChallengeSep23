const cds = require("@sap/cds");
const { Questions } = cds.entities;

module.exports = function DevChallengeService() {
  this.on("assignQuestionsToTest", async (req) => {
    // input validation
    if (req.data.questionsCount <= 0) {
      return {
        short: "Update failed.",
        description: "Question count must be greater than 0.",
      };
    }

    // entity validation : Test
    //check if requested Test exists, cds.db.run returns an promise
    let actualTest = await cds.db.run(req.query);

    if (actualTest.length == 1) {
      console.log("Test ID : " + req._params[0].ID + " found"); // requested ID found
    } else {
      // requested ID not found
      return {
        short: "Update failed.",
        description: "Test not found.",
        details: {
          TestID: req._params[0].ID,
        },
      };
    }

    // entity validation : Questions
    // select Questions only without test_ID and only with limit equal questionsCount
    // .forUpdate() Exclusively lock the selected rows for subsequent updates in the current transaction, thereby preventing concurrent updates by other parallel transactions.
    let questionIDs2Bassociated;
    try {
      questionIDs2Bassociated = await cds.db.run(
        SELECT.from(Questions)
          .where({ test_ID: null })
          .columns("ID")
          .limit(req.data.questionsCount)
          .forUpdate()
      );
    } catch (err) {
      console.log(err);
    }

    // no free questions exist
    if (questionIDs2Bassociated.length == 0) {
      return {
        short: "Update failed.",
        description: "No free questions left, please add more and repeat.",
      };
    }

    try {
      // update all relevant Question IDs with the new Test ID
      await cds.db.run(
        UPDATE(Questions)
          .with({ test_ID: req._params[0].ID })
          .where({
            ID: { in: questionIDs2Bassociated.map((item) => item.ID) },
          })
      );
    } catch (err) {
      console.log(err);
      return err;
    }

    // selection used full limit, all requests can be covered
    if (questionIDs2Bassociated.length == req.data.questionsCount) {
      return {
        short: "Update successful.",
        description: "All requests covered.",
        details: {
          TestID: req._params[0].ID,
          UpdatedQuestions: questionIDs2Bassociated,
        },
      };
    }

    // selection didnt use the full limit, only a part of requests can be covered
    if (questionIDs2Bassociated.length < req.data.questionsCount) {
      return {
        short: "Update partially successful.",
        description:
          "Only a part of requests could be covered, please add " +
          (req.data.questionsCount - questionIDs2Bassociated.length) +
          " more Questions and repeat",
        details: {
          TestID: req._params[0].ID,
          UpdatedQuestions: questionIDs2Bassociated,
        },
      };
    }
  });
};
