sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sapdevsepchallengelight/test/integration/FirstJourney',
		'sapdevsepchallengelight/test/integration/pages/TestsList',
		'sapdevsepchallengelight/test/integration/pages/TestsObjectPage',
		'sapdevsepchallengelight/test/integration/pages/QuestionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, TestsList, TestsObjectPage, QuestionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sapdevsepchallengelight') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTestsList: TestsList,
					onTheTestsObjectPage: TestsObjectPage,
					onTheQuestionsObjectPage: QuestionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);