
//import { contains } from "cypress/types/jquery"
import {login} from "D:\\Cypress\\cypress\\e2e\\Project1\\RepoTestsuite.cy.js"
import {openAccount} from "D:\\Cypress\\cypress\\e2e\\Project1\\RepoTestsuite.cy.js"
import {fundtransfer} from "D:\\Cypress\\cypress\\e2e\\Project1\\RepoTestsuite.cy.js"
import {paybill} from "D:\\Cypress\\cypress\\e2e\\Project1\\RepoTestsuite.cy.js"
describe(" Test Suite Parabank ",() => {     

    beforeEach(function(){ 
        cy.fixture("Testsuite.json").then((d) =>{
           let obj = new login()
           cy.visit(d.url)
        cy.url().should("eq","https://parabank.parasoft.com/parabank/index.htm")
obj.username(d.username1)
obj.password(d.password1)
obj.login()
       })
    })

    afterEach(function(){
      cy.wait(3000)
      cy.get('#leftPanel > ul > :nth-child(8) > a').click();
      cy.log("Visit Again") 
     
    })

    it("Open Account Test case ",()=> { 
      cy.fixture("TestsuiteTestcase1.json").then((data) =>{
      let openacc = new openAccount()
     openacc.openAccountExpectedresult()
    openacc.openAccountclick()
  openacc.ToAccount(data.selectAccountTest1)
      cy.wait(2000)
    openacc.fromAccount(data.selectAccountNoTest1)
     openacc.clickonbuttonfromopeningaccount()
    })
  })

    it("Fund Transfer Test case", () => {
      cy.fixture("TestsuiteTestcase2.json").then((data2) =>{
      let  FundTransfer = new fundtransfer()
      FundTransfer.ClickonFundTransfer()
      cy.wait(2000)
      FundTransfer.Enterfundamount(data2.FundTransferAmount)
       cy.wait(2000)
       FundTransfer.Selectfromaccount(data2.fromAccountId)
      FundTransfer.Select_To_account(data2.toAccountId)
     FundTransfer.Fundtransfer_button()
     FundTransfer.Fundtransfer_Successfull_msg()
      })
    })

    it("Pay bills Test case ",()=> { 
      cy.fixture("TestsuiteTestcase3.json").then((data3) =>{
      let bill = new paybill()
 bill.ExpectedResult()
 cy.wait(1000)
bill.payclick()
bill. Enterpayeename(data3.PayeeName)
bill.Enteraddress(data3.PayeeAdd)
bill.Entercity(data3.Payeecity)
bill.Enterstate(data3.Payeestate)
bill.Enterpincode(data3.PayeezipCode)
bill.Enterphoneno(data3.PayeephoneNumber)
bill.EnterAccountno(data3.Account)
bill.EnterconfirmAccountno(data3.verifyaccount)
 bill.EnterMoney(data3.amount)
cy.wait(1000)
bill.SelAccountnumber(data3.fromaccount)
cy.wait(1000)
bill.Button()
bill.ActalResult()
    })
    })
  })
