describe("new tab", ()=> {
  
    it.skip("remove attribute", ()=>{

cy.visit("https://www.asianpaints.com/online-shop/colour-selection-tools.html")
cy.wait(10000)
cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > .loadLazyImage').invoke('removeAttr','target').click()
cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")



    })
    it.only("href attribute", ()=>{

        cy.visit("https://www.asianpaints.com/online-shop/colour-selection-tools.html")
        cy.wait(3000)
        cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > p').then(newtab=>{
            const hreftab=newtab.prop('href')
            cy.visit(hreftab)
            cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
        })
    })
})