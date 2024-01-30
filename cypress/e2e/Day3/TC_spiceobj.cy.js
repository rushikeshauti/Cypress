

//import { should } from "chai"
import {enrollpage} from "D:\\Cypress\\cypress\\e2e\\Day3\\spice_repository.cy.js"
describe("spice object",() => {    
    
    it("using fixtures",()=> {   
 
     cy.fixture("spicejetobj.json").then((d) =>{
        let obj = new enrollpage()
        cy.visit(d.url)
        //cy.title().should("eq" ,"abc")
     cy.url().should("eq","https://spiceclub.spicejet.com/signup")
 //cy.title().should("contain","SpiceClub - The frequent flyer program of SpiceJet")

//obj.drop(d.drop)
obj.title(d.Title)
cy.wait(2000)
obj.firstname(d.first_name)
obj.lastname(d.last_name)
//cy.title().should("eq" ,"abc")  // for generating html report
obj.country(d.Country)
obj.Birthday(d.Birth_Date)
 obj.Number(d.phone_no)
 obj.email(d.email_id)
 obj.password(d.password)
 obj.newpassword(d.password2)
 obj.box()
 cy.wait(2000)
 obj.submit()
 //obj.titlename()
 //cy.get('.col-sm-4 > .form-control')
 //.should("be.visible").select(data.drop)
 //.should("be.visible").select("Mrs")
 //obj.enterfirstname()













 //cy.get("input[id=first_name]").should("be.visible").type(data.first_name)
 /*
 cy.get("input[id= last_name]").should("be.visible").type(data.last_name)
 //cy.get(':nth-child(3) > :nth-child(1) > .form-control').should("be.visible").select(data.Country)
 //cy.get(':nth-child(3) > :nth-child(1) > .form-control').should("be.visible").select("Haiti")
 //cy.get('#dobDate').click().type(data.Birth_Date).should("be.visible")
 //cy.get('#dobDate').click().type('16-December-1998').should("be.visible")
 //cy.get('.react-tel-input > .form-control').should("be.visible").type(data.phone_no)
 cy.get('#email_id').click().should("be.visible").type(data.email_id)
 cy.get('#new-password').should("be.visible").click().type(data.password)
 cy.get('#c-password').should("be.visible").click().type(data.password2)
 cy.get('#defaultCheck1').should("be.visible").click()
 cy.get('.px-sm-4 > a > .btn').should("be.visible").click()
 cy.get('.btn-close > img').should("be.visible").click()
 cy.get('.btn-nav > :nth-child(1) > a > .btn').should("be.visible").click();

 */
 })
 })
 
 })
     