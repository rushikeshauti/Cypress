describe("Rightclick operations",()=>{

    it.skip("right click", ( )=>{
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/")
    
 
    cy.get('.toctree-l1.current > ul > :nth-child(2) > .reference').click()
cy.wait(1000)
  cy.get('.context-menu-one').trigger("contextmenu") 
   //   cy.get('.context-menu-one').rightclick()   // we use both
      cy.get('.context-menu-icon-copy').click()
    })
    
    it.only("Double click", ( )=>{
        cy.visit("https://www.plus2net.com/javascript_tutorial/ondblclick-demo2.php")
        cy.get('input').dblclick()
    cy.wait(1000)
   //   cy.get('.context-menu-one').trigger("contextmenu") 
       //   cy.get('.context-menu-one').rightclick()   // we use both
     //     cy.get('.context-menu-icon-copy').click()
        })
    
    
    })