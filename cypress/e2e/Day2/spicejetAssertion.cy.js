//const { assert } = require("chai")


describe("Book Tikets of spicejet",() => {    
    it("Book flight",()=> {    
    
    cy.visit("https://www.spicejet.com/")
    cy.url().should("eq","https://www.spicejet.com/")
    cy.title().should("contain","SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets")
    cy.get('[data-testid="search-source-code"]').should("be.visible")
  cy.get('[data-testid="search-arrow-icon"]').should("be.visible").click()
  cy.get('[data-testid="search-source-code"]').should("be.visible").click()

  cy.get(':nth-child(1) > [data-testid="auto-cmp-row-2"] > .css-1dbjc4n > [data-testid="auto-cmp-row-title-2"]').should("be.visible").click()
   cy.get('.r-gmdvlt > .r-1loqt21 > .r-1awozwy').should("be.visible").click()
   cy.get('[data-testid="home-travellers-adult-3"]').should("be.visible").click()
   cy.get('[data-testid="home-travellers-child-2"]').should("be.visible").click()
   cy.get('[data-testid="home-travellers-action-btn"]').should("be.visible").click()
   cy.get('[data-testid="travel-type-2"]').should("be.visible").click()
   cy.wait(2000)
   cy.get('.r-pl6hi6 > .r-1loqt21 > .r-1awozwy').should("be.visible").click()
  cy.get('.r-150rngu > :nth-child(1) > :nth-child(1) > .css-1dbjc4n').should("be.visible").click
  cy.wait(2000)
   cy.get('[data-testid="home-currencies-action-btn"]').should("be.visible").click()
   cy.get('[style="flex-wrap: nowrap;"] > :nth-child(1) > .css-1dbjc4n > .css-76zvg2').should("be.visible").click();
   cy.get('[data-testid="search-submit-btn"]').should("be.visible").click()
   cy.get('.r-1tf5bf9').should("be.visible").click()
   cy.get('.r-obd0qt > .r-1awozwy').should("be.visible").click()
   cy.get('[data-testid="search-results-refresh-btn"]').should("be.visible").click()

    })
  })
