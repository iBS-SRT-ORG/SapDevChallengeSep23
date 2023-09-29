using DevChallengeService as service from '../../srv/cat-services';

annotate service.Tests with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Label: 'title',
        Value: title
    },
    {
        $Type: 'UI.DataField',
        Label: 'description',
        Value: description
    },
    {
        $Type: 'UI.DataField',
        Label: 'created By',
        Value: createdBy
    },
    {
        $Type: 'UI.DataField',
        Label: 'modified By',
        Value: modifiedBy
    }
]);

annotate service.Questions with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Label: 'Question',
        Value: text
    },
    {
        $Type: 'UI.DataField',
        Label: 'Answer',
        Value: answer.text
    }
]);


annotate service.Tests with @(

    UI.HeaderInfo                  : {
        Title         : {
            $Type: 'UI.DataField',
            Value: 'Developer Challenge Three'
        },
        Description   : {
            $Type: 'UI.DataField',
            Value: 'Week Three - Front-end Development with SAP Fiori elements'
        },
        TypeName      : 'Test',
        TypeNamePlural: 'Tests'
    },

    UI.FieldGroup #TestDetailsGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'title',
                Value: title,
            },
            {
                $Type: 'UI.DataField',
                Label: 'description',
                Value: description,
            },
            {
                $Type: 'UI.DataField',
                Label: 'created By',
                Value: createdBy
            },
            {
                $Type: 'UI.DataField',
                Label: 'created At',
                Value: createdAt
            },
            {
                $Type: 'UI.DataField',
                Label: 'modified By',
                Value: modifiedBy
            },
            {
                $Type: 'UI.DataField',
                Label: 'modified At',
                Value: modifiedAt
            }
        ],
    },
    UI.Facets                      : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'TestDetailsFacet',
        Label : 'Test Details',
        Target: '@UI.FieldGroup#TestDetailsGroup'
    }, ]
);
