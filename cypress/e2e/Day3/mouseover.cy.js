describe("Mouse operations",()=>{

it("Mouseover", ( )=>{
cy.visit("https://demo.opencart.com/")

cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
.should("be.visible")
.click()

})




})