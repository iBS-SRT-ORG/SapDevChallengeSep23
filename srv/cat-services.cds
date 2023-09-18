using fullstack_dev_challenge from '../db/data-model';

service DevChallengeService @(path: '/dev-challenge') {
    @odata.draft.enabled: true
    entity Tests     as projection on fullstack_dev_challenge.Tests;

    @odata.draft.enabled: true
    entity Questions as projection on fullstack_dev_challenge.Questions;


}
