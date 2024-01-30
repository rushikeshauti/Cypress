import {registration} from "D:\\Cypress\\cypress\\e2e\\Assignment\\Task2Repository.cy.js"
describe("Registration with parabank",() => {     // describe means Test case
        it("using fixtures",()=> {   
            cy.fixture("Task2.json").then((d) =>{
               let obj = new registration()
               cy.visit(d.url)
                 cy.url().should("eq","https://parabank.parasoft.com/parabank/index.htm")
    cy.wait(2000)
    obj.loginpannel()
   cy.get('.title').should('be.visible');
   obj.firstname(d.first_name)
   obj.lastname(d.last_name)
   obj.Address(d.Address)
   obj.city(d.city)
   obj.state(d.state)
   obj.pincode(d.pincode)
   obj.phno(d.phoneno1)
   obj.code(d.codessn)
   obj.username(d.username)
   obj.password(d.password)
   obj.confirmpass(d.password2)
   obj.Button()
  // obj.resultCust()
 //  obj.resultThank()






 //   cy.title().should('be.visible');
 //cy.get(input[id="customer.firstName"]).type("Ketan")
 //cy.get('#loginPanel > :nth-child(3) > a').click()
/* multiline    
   comment
 cy.get(':nth-child(1) > [width="20%"]').type("Rohit");
cy.get(':nth-child(2) > [width="20%"]').type("Jadhav");
cy.get(':nth-child(3) > [width="20%"]').type("A.p borivali tal junnar dist mumbai");
cy.get(':nth-child(4) > [width="20%"]').type("Borivali");
cy.get(':nth-child(5) > [width="20%"]').type("maharastra");
cy.get(':nth-child(6) > [width="20%"]').type("400063");
cy.get(':nth-child(7) > [width="20%"]').type("9876567898");
cy.get(':nth-child(8) > [width="20%"]').type("876965432");

cy.get(':nth-child(10) > [width="20%"]').type("Rohit7776");
cy.get(':nth-child(11) > [width="20%"]').type("Rohit@123");
cy.get(':nth-child(12) > [width="20%"]').type("Rohit@123");


cy.get('[colspan="2"] > .button').click()
//cy.get('#leftPanel > ul > :nth-child(8) > a').click()
//cy.get('.title').should('be.visible').contain("")
//
 */
    })
})
})