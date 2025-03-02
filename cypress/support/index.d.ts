declare namespace Cypress{
    interface Chainable{
        login(emailI: any, password: any): Chainable
        qaurl(qaurl: any) :Chainable
        selectFutureDate(dayAhead: any): Chainable
        selectRandomTime(time:any,start:any):Chainable
        verifyDate(selector:any):Chainable
    }
}