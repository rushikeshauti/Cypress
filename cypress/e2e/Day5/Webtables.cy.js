
describe("webtable Test",() => {     // describe means Test case
    it("Webtable",()=> {    
                 // we write test case in i
    cy.visit("https://www.dezlearn.com/webtable-example/")

cy.get("#post-9373 > div > div > section > div > div > div > section > div > div > div > div > div > table > tbody > tr").should("have.length",7);

cy.get("#post-9373 > div > div > section > div > div > div > section > div > div > div > div > div > table > tbody > tr >th").should("have.length",6);

cy.get('tbody > :nth-child(4) > :nth-child(1)').contains("John White")
  
cy.get("#post-9373 > div > div > section > div > div > div > section > div > div > div > div > div > table > tbody > tr")
.each(($row, index , $rows) =>{
cy.wrap($row).within(()=>{

cy.get("th").each(($col,index,$cols)=>{
    cy.log($col.text())

    
})

})


})


})
       });
    




            