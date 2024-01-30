//const { expect } = require("chai")

describe("Handle Alert",() => {    
    it.skip("Alert",()=> {    
    
    cy.visit("https://letcode.in/alert")

   cy.get('#accept').click()
    cy.on('window:alert' ,(t) =>{
expect(t).contains("Hey! Welcome to LetCode")
    })

   it.only("Confirm Alert", ()=> {    
    
    cy.visit("https://letcode.in/alert")
    //cy.wait(2000)
    cy.get('#confirm').click()

    cy.on('window:alert' ,(t1) =>{

        expect(t1).contains("Are you happy with LetCode?")
    })
   })
    })
})