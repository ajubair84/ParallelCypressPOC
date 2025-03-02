import Login from "../../support/LoginPage"

describe("Login to the application",()=>{


    before(function(){
        cy.fixture('testData').then(function(data){
            cy.visit(Cypress.env("qaurl"))
            this.data=data
            cy.login(data.login.emailId, data.login.password)
        })
    })

    it("Login to the application with valid credetisels",()=>{
        
    const login = new Login

    })

})