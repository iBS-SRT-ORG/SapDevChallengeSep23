sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        assignQuestionsToTest: function(oEvent) {
            MessageToast.show("Custom handler for Function assignQuestionsToTest invoked.");
        }
    };
});
