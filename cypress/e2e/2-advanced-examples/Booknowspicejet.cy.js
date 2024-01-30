describe("Book Tikets of spicejet",() => {     // describe means Test case
    it("Book flight",()=> {    
                 // we write test case in i
    cy.visit("https://www.spicejet.com/")
    
 //  cy.get('[data-testid="travel-type-2"] > .css-76zvg2').click()
 // cy.get('[data-testid="guest-submit-btn"]').click()
    cy.get('[data-testid="search-source-code"]').click()
    cy.get('[data-testid="auto-cmp-row-30"] > .css-1dbjc4n').click()
   cy.get('[data-testid="search-arrow-icon"]').click()
   cy.get('[data-testid="search-source-code"]').click()
//   cy.get('[data-testid="guest-submit-btn"]').click()
   cy.get(':nth-child(1) > [data-testid="auto-cmp-row-2"] > .css-1dbjc4n > [data-testid="auto-cmp-row-title-2"]').click()
   cy.get('.r-gmdvlt > .r-1loqt21 > .r-1awozwy').click()
   cy.get('[data-testid="home-travellers-adult-3"]').click()
   cy.get('[data-testid="home-travellers-child-2"]').click()
   cy.get('[data-testid="home-travellers-action-btn"]').click()
   cy.get('[data-testid="travel-type-2"]').click()
   cy.get('.r-pl6hi6 > .r-1loqt21 > .r-1awozwy').click()
   cy.get('.r-150rngu > :nth-child(1) > :nth-child(1) > .css-1dbjc4n').click()
   cy.get('[data-testid="home-currencies-action-btn"]').click()
   cy.get('[style="flex-wrap: nowrap;"] > :nth-child(1) > .css-1dbjc4n > .css-76zvg2').click();
   cy.get('[data-testid="search-submit-btn"]').click()
   cy.get('.r-1tf5bf9').click()
   cy.get('.r-obd0qt > .r-1awozwy').click()
   cy.get('[data-testid="search-results-refresh-btn"]').click()



    })
})