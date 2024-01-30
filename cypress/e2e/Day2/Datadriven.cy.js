describe("Data driven",() => {     // describe means Test case
    it("using Fixtures",()=> {    
                 // we write test case in i
   
cy.fixture('data_orangehrm').then((data) => {


     cy.visit(data.url)
    cy.get("input[name=username]").type(data.username)         
    cy.get("input[name=password]").type(data.password)
    cy.get("button[type=submit]").click()
    })
})
})        