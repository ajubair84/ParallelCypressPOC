import Loging from "../../support/LoginPage";
import CreateSession from "../../support/sessionPage";
describe("Create a New Session",()=>{


    before(function(){
        cy.fixture('testData').then(function(data){
            cy.visit(Cypress.env("qaurl"))
            this.data=data
            cy.login(data.login.emailId, data.login.password)
        })
    })

    it("Detais of new session",()=>{
        const login = new Loging
        const createsession = new CreateSession
        createsession.clickNewBtn()
        createsession.clickSessionLink()
        //createsession.selectDate(1)
        createsession.selectStartTime()
        createsession.selectEndTime()
        createsession.selectStudent()
        createsession.appointment()
        createsession.submitBtn()
        createsession.clickCalender()
        createsession.clickJoinSession()
        createsession.verifyHeader()
        createsession.verifyDate()
        createsession.downloadRecordingBtn()
        createsession.verifyViewSession()
        createsession.verifyStudents()
        createsession.clickDeleteIcon()
        createsession.verifyMessage()
        createsession.deleteAppointment()
        
        
        
        
        
    })
})