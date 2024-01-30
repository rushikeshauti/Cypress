
describe('zoho handle dropdown', ()=>{

    it('dropdown',()=>{

  cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
 

  cy.get('#travname').type("ketan")
  cy.get('#travlastname').type("lokesh")
  cy.get('#order_comments').type(" you are the creator of your future , so give your best .")
 // cy.get('#dob').click().type("")
 cy.get('#sex_1').click()
 cy.get('#fromcity').type("kolkata")

 //cy.get('select')
 //cy.get("select[id=zcf_address_country]")
  //.select('China')
 // .should('have.value','China')

  
    }) 
})

