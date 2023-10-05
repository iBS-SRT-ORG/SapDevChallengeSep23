sap.ui.define([
    "sap/m/MessageBox",
], function (MessageBox) {
    'use strict';

    return {

        assignQuestionsToTest: function (oEvent) {
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "fullstackdevchallenge.ext.fragment.AddQuestionsDialog",
                })
            }
            this.pDialog.then(function (oDialog) {
                oDialog.open()
            })
        },

        onCloseDialog: function (oEvent) {
            oEvent.getSource().getParent().close()
        },

        onSubmitDialog: async function (oEvent) {
            oEvent.preventDefault()
            const oBindingContext = oEvent.getSource().getBindingContext()
            const dialogInputFields = oEvent.getSource().getParent().getContent()
            const questionsCount = dialogInputFields[1]._getInputValue()
            const test = oBindingContext.getValue()

            const oModel = oBindingContext.getModel()  //, oBindingContext
            const oOperation = oModel.bindContext(`/Tests(ID=${test.ID},IsActiveEntity=true)/DevChallengeService.assignQuestionsToTest(...)`)
            oOperation.setParameter("questionsCount", Number(questionsCount))
            oOperation.execute().then(async function () {
                const oResults = oOperation.getBoundContext().getObject()
                if (oResults && oResults.value.short) {
                    MessageBox.information(oResults.value.description, {
                        title: oResults.value.short
                    })
                }
                await oBindingContext.refresh()

            }.bind(this), function (oError) {
                MessageBox.error(oError.message)
            })
            oEvent.getSource().getParent().close()
        }
    }
})