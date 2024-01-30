describe("new tab", ()=> {
  
    it("tab handle", ()=>{

cy.visit("https://demoqa.com/browser-windows")
cy.get("#tabButton").click()
cy.get('https://demoqa.com/browser-windows').invoke('removeAttr','target').click()
//cy.url().should("eq","https://demoqa.com/browser-windows")
    })

})