describe("Login with orangeHRM",() => {     // describe means Test case
it("Login",()=> {    
             // we write test case in i
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get("input[name=username]").type("Admin")         
cy.get("input[name=password]").type("admin123")
cy.get("button[type=submit]").click()
})
            })
            it("Login - Failed",()=> {    
                // we write test case in i
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                cy.wait(2000)
                cy.title().should("eq" ,"abc")
              //  cy.wait(2000)
  // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   cy.get("input[name=username]").type("Admin")         
   cy.get("input[name=password]").type("admin123")
   cy.get("button[type=submit]").click()
   })