# Getting Started

The Schedule
Below is a breakdown of the tasks we will cover in four weeks (click on each task to view details):

Week 1: [Project Set-up and Database Modeling](https://groups.community.sap.com/t5/application-development-discussions/sap-developer-challenge-full-stack-project-set-up-and-database-modeling/td-p/284674)

## Week 1: ERM implementation

![ERM implementation](https://groups.community.sap.com/t5/image/serverpage/image-id/43346i0642034B7C80E9C6/image-size/large/is-moderation-mode/true?v=v2&px=999)

## Branch Status

- Data Moddel - finished
- Service implementation - finished
- generate Testdata - finished

## ODdata Examples

### get Entity by ID

[Requesting Entity "Sample Test 1" by Key](<http://localhost:4004/dev-challenge/Tests(ID=d4bb780c-5d5b-4795-b4fa-2edccc698b00,IsActiveEntity=true)>)

[Requesting an Individual Property of Entity "Sample Test 1"](<http://localhost:4004/dev-challenge/Tests(ID=d4bb780c-5d5b-4795-b4fa-2edccc698b00,IsActiveEntity=true)/description>)

[Requesting Raw Value an Individual Property of Entity "Sample Test 1"](<http://localhost:4004/dev-challenge/Tests(ID=d4bb780c-5d5b-4795-b4fa-2edccc698b00,IsActiveEntity=true)/description/$value>)

[Requesting more than one Individual Property of Entity "Sample Test 1"](<http://localhost:4004/dev-challenge/Tests(ID=d4bb780c-5d5b-4795-b4fa-2edccc698b00,IsActiveEntity=true)?$select=description,title>)

[Get top 3 Entries from Entity Test](http://localhost:4004/dev-challenge/Tests?$top=3)

[Get top 3 Entries from Entity Test and expand their Assotiation "questions"](http://localhost:4004/dev-challenge/Tests?$expand=questions&$top=3)

### using assitioations via OData expand

[Entity Test with OData expand Assotiation "questions" to many questions - ARRAY](http://localhost:4004/dev-challenge/Tests?$expand=questions)

[Entity Questions with OData expand Assotiation "answer" to one answer - 1 JSON](http://localhost:4004/dev-challenge/Questions?$expand=answer)

[Entity Questions with OData expand Assotiation "test" to one test - 1 JSON](http://localhost:4004/dev-challenge/Questions?$expand=test)

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).

## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

### OData

- https://www.odata.org/
- system query options https://www.odata.org/getting-started/basic-tutorial/#queryData
