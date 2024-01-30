export {enrollpage}
class enrollpage
{
geturl(url){
    cy.visit(url).should("be.visible")
}
title(title1){
    cy.get(".col-sm-4 > .form-control").select(title1).should("be.visible")
}
firstname(fname){
    cy.get('#first_name').click().type(fname).should("be.visible")   // we can give anything input in type()- program will run 
}

lastname(lname){
    cy.get('#last_name').click().type(lname).should("be.visible")
}

country(ctr){
    cy.get(':nth-child(3) > :nth-child(1) > .form-control').select(ctr).should("be.visible")
}

Birthday(birthday){
    cy.get('#dobDate').click().type(birthday).should("be.visible")
}

Number(num){
    cy.get('.react-tel-input > .form-control').type(num).should("be.visible")
}
email(mail){
    cy.get('#email_id').click().type(mail).should("be.visible")
}
password(pass){
    cy.get('#new-password').click().type(pass).should("be.visible")
}

newpassword(npass){
    cy.get('#c-password').click().type(npass).should("be.visible")
}


box(){
    cy.get('#defaultCheck1').click().should("be.visible")
}

submit(){
    cy.get('.btn-nav > :nth-child(1) > a > .btn').click()
}







/*
//1
titlename()
{
    cy.get(this.txttitlename).should("be.visible").select("Mrs")
}
    //2
    enterfirstname(first_name)
    {
        cy.get(this.txtusername).type(first_name) 
    }
    //3
lastname(password)
    {
cy.get(this.txtpassword).type(password)
    }
//4
    txtdate()
        {
            cy.get(this.txtdate).click()
        }
    
}
*/
}