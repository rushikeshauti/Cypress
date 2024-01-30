describe("Sign up with spicejet",() => {     // describe means Test case
    it("sign up ",()=> {    
                 // we write test case in i
    cy.visit("https://spiceclub.spicejet.com/signup")
    cy.get('.col-sm-4 > .form-control').select("Mrs")
    cy.get("input[id=first_name]").type("Ketan")
    cy.get("input[id= last_name]").type("gadge")
    cy.get(':nth-child(3) > :nth-child(1) > .form-control').select("Haiti")
    cy.get('#dobDate').click().type('16-December-1998')
    cy.get('.react-tel-input > .form-control').type("7776987650")
    cy.get('#email_id').click().type("ketan123@gmail.com")
    cy.get('#new-password').click().type("Ketan@123")
   cy.get('#c-password').click().type("Ketan@123")
  cy.get('#defaultCheck1').click()
  cy.get('.px-sm-4 > a > .btn').click()
  cy.get('.btn-close > img').click()
  cy.get('.btn-nav > :nth-child(1) > a > .btn').click();
    })
                })