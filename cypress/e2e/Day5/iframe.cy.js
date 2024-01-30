
import 'cypress-iframe'
describe("iframe Test",() => {     // describe means Test case
    it("iframe",()=> {    
                 // we write test case in i
    cy.visit("https://jqueryui.com/droppable/")
          cy.frameLoaded('.demo-frame');
          //shifting focus
          cy.iframe().find("#draggable").then(function(t){
             const frmtxt = t.text()
             //assertion to verify text
             expect(frmtxt).to.contains('Drag me to my target');
             cy.log(frmtxt);
          })
       });
    });




            