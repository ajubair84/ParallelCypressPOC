// <referemce types = "Cypress" />

Cypress.Commands.add("login",(emailId,password)=>{

    cy.fixture('testData').then((data)=>{
        cy.get("input[name$='email'").type(emailId)
        cy.get("input[name$='password']").type(password)
        cy.get(".MuiButton-contained").click()
        cy.title().should("include", "Calendar - Pathway");

    })
    Cypress.Commands.add("selectFutureDate", (daysAhead: number) => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + daysAhead);
        const formattedDate = futureDate.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        });
        cy.xpath("//input[@placeholder='MM/DD/YYYY']")
          .should("be.visible")
          .clear()
          .type(formattedDate);
      });
    //   Cypress.Commands.add("selectRandomTime", (selector) => {
    //     const hour = Math.floor(Math.random() * 12) + 1;
    //     const minutes = ["00", "15", "30", "45"];
    //     const randomMinute = minutes[Math.floor(Math.random() * minutes.length)];
    //     const ampm = Math.random() > 0.5 ? "AM" : "PM";
    //     const randomTime = `${hour}:${randomMinute} ${ampm}`;
    //     cy.get(selector).should("be.visible").clear().type(randomTime, { force: true });
    //     cy.log("Selected Time for " + selector + ": " + randomTime);
    //   });
    Cypress.Commands.add("selectRandomTime", (selector, baseTime = null) => {
        const hour = Math.floor(Math.random() * 12) + 1;
        const minutes = ["00", "30"]; 
        const randomMinute = minutes[Math.floor(Math.random() * minutes.length)];
        const ampm = Math.random() > 0.5 ? "AM" : "PM";
    
        let randomTime = `${hour}:${randomMinute} ${ampm}`;
        if (baseTime) {
            let [baseHour, baseMinute, basePeriod] = baseTime.split(/[: ]/);
            baseHour = parseInt(baseHour, 10);
            baseMinute = parseInt(baseMinute, 10);
            if (baseMinute === 0) {
                baseMinute = 30;
            } else {
                baseMinute = 0;
                baseHour += 1;
                if (baseHour > 12) {
                    baseHour = 1; 
                    basePeriod = basePeriod === "AM" ? "PM" : "AM";
                }
            }
            randomTime = `${baseHour}:${baseMinute.toString().padStart(2, "0")} ${basePeriod}`;
        }
        cy.get(selector).should("be.visible").clear().type(randomTime, { force: true });
        cy.log("Selected Time for " + selector + ": " + randomTime);
        return cy.wrap(randomTime); 
    });
})
Cypress.Commands.add('verifyDate', (selector: string) => {
    cy.get(selector)
      .invoke('text')
      .then((actualText) => {
        cy.log("Full UI Text:", actualText);
        const cleanedText = actualText.trim();
        cy.log("Cleaned Text:", cleanedText);
        const extractedDate = cleanedText.match(
          /(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday),\s(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}/
        );
        expect(extractedDate, "Date format not found in the text").to.not.be.null;
        cy.log("Extracted Date:", extractedDate ? extractedDate[0] : "No match found");
        expect(extractedDate![0]).to.match(
          /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday),\s(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}$/
        );
      });
});
