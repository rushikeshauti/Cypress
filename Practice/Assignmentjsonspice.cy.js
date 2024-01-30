describe("Data driven Scenario",() => {    
    
   it("using fixtures",()=> {   

    cy.fixture('spicejet').then((data) =>{
    cy.visit(data.url)
    cy.url().should("eq",data.url)
cy.title().should("contain","SpiceClub - The frequent flyer program of SpiceJet")

cy.get('.col-sm-4 > .form-control')
.should("be.visible").select(data.drop)
//.should("be.visible").select("Mrs")
cy.get("input[id=first_name]").should("be.visible").type(data.first_name)
cy.get("input[id= last_name]").should("be.visible").type(data.last_name)
cy.get(':nth-child(3) > :nth-child(1) > .form-control').should("be.visible").select(data.Country)
//cy.get(':nth-child(3) > :nth-child(1) > .form-control').should("be.visible").select("Haiti")
cy.get('#dobDate').click().type(data.Birth_Date).should("be.visible")
//cy.get('#dobDate').click().type('16-December-1998').should("be.visible")
cy.get('.react-tel-input > .form-control').should("be.visible").type(data.phone_no)
cy.get('#email_id').click().should("be.visible").type(data.email_id)
cy.get('#new-password').should("be.visible").click().type(data.password)
cy.get('#c-password').should("be.visible").click().type(data.password2)
cy.get('#defaultCheck1').should("be.visible").click()
cy.get('.px-sm-4 > a > .btn').should("be.visible").click()
cy.get('.btn-close > img').should("be.visible").click()
cy.get('.btn-nav > :nth-child(1) > a > .btn').should("be.visible").click();
})
})

})
    