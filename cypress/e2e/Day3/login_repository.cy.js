
export {loginpage}
class loginpage
{

txtusername="input[name=username]"
txtpassword="input[name=password]"
submitbutton="button[type=submit]"
    //1
    enterusername(username)
    {
        cy.get(this.txtusername).type(username) 
    }

    //2
enterpassword(password)
    {
cy.get(this.txtpassword).type(password)
    }

//3
    clickonsubmit()
        {
            cy.get(this.submitbutton).click()
        }
    
}