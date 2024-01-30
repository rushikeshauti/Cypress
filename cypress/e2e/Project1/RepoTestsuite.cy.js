export {login}
export {openAccount}
export {fundtransfer}
export {paybill}

class login
{
geturl(url){
    cy.visit(url).should("be.visible")
}
username(user){
    cy.get(':nth-child(2) > .input').click().type(user).should("be.visible")
}
password(pass){
    cy.get(':nth-child(4) > .input').click().type(pass).should("be.visible")
}
login(){
    cy.get(':nth-child(5) > .button').click()
}
}

class logout
{
    logoutTestsuit(){
    
    cy.get('#leftPanel > ul > :nth-child(8) > a').click();
    cy.log("Visit Again"); cy.wait(3000);
    }

}


//1
class openAccount
{
   
    openAccountExpectedresult(){
        cy.log("Verify that open new Account is Working As Expected.")
    }
        openAccountclick(){
            cy.get('#leftPanel > ul > :nth-child(1) > a').click()
        }

        ToAccount(To){
            cy.get('#type').select(To).should('be.visible')
        }
        fromAccount(from){
            cy.get('#fromAccountId').select(from).should('be.visible')
        }
        clickonbuttonfromopeningaccount(){
            cy.get('form.ng-valid > div > .button').click();
        }
        openingaccounttitle(){
            cy.get('.title').should('contain','Account Opened!')
        }
}

//2
class fundtransfer{

    ClickonFundTransfer(){
    cy.get('#leftPanel > ul > :nth-child(3) > a').click();
}

Enterfundamount(amount){
cy.get('#amount').click().type(amount).should('be.visible')
}

Selectfromaccount(from){
cy.get('#fromAccountId').select(from)
}

Select_To_account(To){
    cy.get('#toAccountId').select(To)
    }

    Fundtransfer_button(){
     cy.get(':nth-child(4) > .button').click()
    }

    Fundtransfer_Successfull_msg(){
    cy.log("Fund transfered Successful ")
    cy.get('.ng-scope > :nth-child(2)')
    //.should('contain','$100.00 has been transferred from account')
    cy.get('.ng-scope > :nth-child(2)').should('contain','$100.00 has been transferred from account')
}

}




//3
class paybill
{
    payclick(){
        cy.get('#leftPanel > ul > :nth-child(4) > a').click().should("be.visible")
    }
    Enterpayeename(pname){
    cy.get(':nth-child(1) > [width="20%"] > .input').type(pname)
}

Enteraddress(Add){
cy.get(':nth-child(2) > [width="20%"] > .input').type(Add)
       }

Entercity(city){
    cy.get(':nth-child(3) > [width="20%"] > .input').type(city)
    }

    Enterstate(state){
    cy.get(':nth-child(4) > [width="20%"] > .input').type(state)
    }

    Enterpincode(pincode){
        cy.get(':nth-child(5) > [width="20%"] > .input').type(pincode)
    }
    Enterphoneno(phno){
    cy.get(':nth-child(6) > [width="20%"] > .input').type(phno)
}
EnterAccountno(accno){
cy.get(':nth-child(8) > :nth-child(2) > .input').type(accno)
}
EnterconfirmAccountno(confirmacc){
    cy.get(':nth-child(9) > :nth-child(2) > .input').type(confirmacc)
}
EnterMoney(user){
cy.get(':nth-child(11) > :nth-child(2) > .input').type(user)
}
SelAccountnumber(user){
    cy.get(':nth-child(13) > :nth-child(2) > .input').select(user)
}
Button(user){
    cy.get(':nth-child(14) > :nth-child(2) > .button').click()
}
ExpectedResult(user){
    cy.log(" bills field working properly.")
}
ActalResult(user){
    cy.log("bills field is not working As Expected.")
}

}