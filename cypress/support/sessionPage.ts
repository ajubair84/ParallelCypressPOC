class CreateSession
{
    newButton="//button[normalize-space()='New']"
    sessoinLink="//span[normalize-space()='Session']"
    sessionDate="//input[@placeholder='MM/DD/YYYY']"
    startTime= "input[data-testid='range-input-start']"
    endTime="input[data-testid='range-input-end']"
    students=".MuiAutocomplete-endAdornment.css-iuka1o "
    appointmentType="//input[@type='text']"
    submit="button[type='button']"
    sessionCalender=".MuiStack-root.css-x8gtyt"
    joinSession="button[type='button']"
    headerOfPage="//h2[normalize-space()='Testing Session']"
    dateVerify='div.MuiBox-root.css-igpifu'
    downloadRec="button[type$='button']"
    viewSessionNote="//a[contains(@class, 'MuiButtonBase-root')]"
    studentsVerify=".MuiTypography-root.MuiTypography-body1.css-hcmjbp"
    deleteIcon="//button[@aria-label='Delete Appointment']"
    message=".MuiTypography-root.MuiTypography-body1.css-hcmjbp"
    deleteButton="button[aria-label='Confirm Delete Appointment']"
    
    clickNewBtn(){cy.xpath(this.newButton).click({force:true})}
    clickSessionLink(){cy.xpath(this.sessoinLink).click({force:true})}
    selectDate(daysAhead = 7){
        cy.selectFutureDate(daysAhead)
    }
    selectStartTime() {
        cy.selectRandomTime(this.startTime,null).then((selectedTime) => {
            cy.wrap(selectedTime).as("startTime"); 
        });
    }
    selectEndTime() {
        cy.get("@startTime").then((startTime) => {
            cy.selectRandomTime(this.endTime, startTime);
        });
    }
    appointment() {
        cy.xpath(this.appointmentType).eq(1).click({ force: true }); 
        cy.get("input.MuiAutocomplete-input").eq(1).type("Testing Session", { force: true });
        cy.wait(500);
        cy.contains("Testing Session").click({ force: true });
    }
    
    selectStudent() {
        cy.get(this.students).eq(0).click({ force: true });
        cy.get("input.MuiAutocomplete-input").eq(0).type("Student PSY222", { force: true });
        cy.wait(500);
        cy.contains("Student PSY222").click({ force: true });
    }
    
    submitBtn(){cy.get(this.submit).contains("Submit").click({force:true})}
    clickCalender(){cy.get(this.sessionCalender).eq(1).click({force:true})}
    verifyHeader(){cy.xpath(this.headerOfPage).should('have.text','Testing Session')}
    verifyDate(){cy.get(this.dateVerify)}
    verifyViewSession(){cy.xpath(this.viewSessionNote).should('be.visible')}
    downloadRecordingBtn(){cy.get(this.downloadRec).eq(1).should('not.be.visible')}
    verifyStudents(){cy.get(this.studentsVerify).contains('Student PSY222')}
    clickDeleteIcon(){cy.xpath(this.deleteIcon).click({force:true})}
    verifyMessage(){cy.get(this.message).contains("Please confirm that you want to permanently delete this session.").should("be.visible")}
    deleteAppointment(){cy.get(this.deleteButton).should('be.enabled').click({force:true})}
    clickJoinSession(){cy.get(this.joinSession).eq(1).click({force:true})}
    

}

export default CreateSession