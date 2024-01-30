import 'cypress-file-upload'
describe("Handle file upload",() => {     // describe means Test case
    it("File upload",()=> {    
                 // we write test case in i
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.wait(2000)


const path ='Fileupload.txt';

    cy.get("#file-upload").attachFile(path);
   cy.get("#file-submit").click()
    })
                })