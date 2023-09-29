sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sapdevsepchallengedark/test/integration/FirstJourney',
		'sapdevsepchallengedark/test/integration/pages/TestsList',
		'sapdevsepchallengedark/test/integration/pages/TestsObjectPage',
		'sapdevsepchallengedark/test/integration/pages/QuestionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, TestsList, TestsObjectPage, QuestionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sapdevsepchallengedark') + '/index.html'
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