//const { expect } = require("chai")

//Alert
describe("Alertbox",() => {    
  it("simple Alert",()=> {    
  
  cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
  cy.wait(2000)
  cy.get('#alertexamples').click()

cy.on('window:alert' ,(t) =>{
expect(t).contains("I am an alert box!")
  })
  })
})

// for Prompt  https://letcode.in/alert
it("Prompt Alert", ()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.wait(2000)
      cy.window().then((win)=>{
      cy.stub(win,'prompt').returns('Ketan')
        
        
        })
       cy.get('#promptexample').click()
    })
    //
   it("confirm Alert",()=>{

     cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
     cy.wait(2000)
      cy.get("#confirmexample").click()
    cy.on('window:confirm',(t)=>{
      expect(t).contains("I am a confirm alert")
    })
  })
      
     // })
     
  