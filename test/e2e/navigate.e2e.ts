import { Selector } from 'testcafe';

fixture `Sample test`
    .page `http://localhost:5000/`;

test('Basic navigation works', async (t:any) => {
    await t
    .click('#Home')
    .wait(400) //added wait for demo purposes, it's too fast otherwise
    .expect(Selector('h1').innerText).eql('Hello, world!')

    .click('#Counter')
    .wait(400)

    .click('#Fetch')
    .wait(400)
});