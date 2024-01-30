
import {loginpage} from "D:\\Cypress\\cypress\\e2e\\Day3\\login_repository.cy.js"

describe("Login with orangeHRM",() => {     // describe means Test case
    it("Login",()=> {    
            
  //  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.fixture("data_orangehrm.json").then((d)=>{
 cy.visit(d.url)
 //cy.title().should("eq" ,"abc")
  let obj= new loginpage()      


//obj.enterusername().type("Admin") 
   obj.enterusername(d.username)         
   obj.enterpassword(d.password)
    obj.clickonsubmit()
   // cy.get("button[type=submit]").click()
    })
                })
       })