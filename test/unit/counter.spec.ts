import 'mocha';
import { expect, should } from 'chai';
var sinon = require('sinon');

describe('counter.ts', function () {
    describe('incrementCounter()', function () {
        it('Should return 1', function () {
            let exampleCounter:number = 0;
            exampleCounter++;
            expect(exampleCounter).to.be.equal(1);
        });
    });
});