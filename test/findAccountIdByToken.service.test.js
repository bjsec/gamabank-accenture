/*const chaiHttp = require('chai-http');
const chai = require('chai');
const app = require('../src/api/app');
const {
  accountIdByToken
} = require('../src/api/services/findAccountIdByToken.service');


let should = require('chai').should();

describe('return account_id by token', function () {
  it('should return account_id', async function () {
    should.equal(1, await accountIdByToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE2MTA0ODY3LCJleHAiOjE2MTYxMDc4Njd9.XOsb2ENcyLMCNZwGfHB_oSUZToQHSCV8QK2j1eF8AKQ'));
  });
  it('should return false if token does not exists', async function () {
    should.equal(false, await accountIdByToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE2MTA0ODY3LCJleHAiOjE2MTYxMDc4Njd9.XOsb2ENcyLMCNZwGfHB_oSUZT'));
  });
});*/