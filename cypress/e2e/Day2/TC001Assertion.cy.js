

describe("Assertions",() => {     
    it.skip("Implicit Assertions",()=> {    
        //TDD Type         
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   .and("include","orange")
   .and("contain","orange")
   
   
    //cy.url().should("include","orange")
   // cy.url().should("contain","orange")
   // cy.title().should("eq","OrangeHRM")

    cy.get("input[name=username]").type("Admin")         
    cy.get("input[name=password]").type("admin123")
    cy.get("button[type=submit]").click()
    })
     
    it.only("Implicit Assertions",()=> {   
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name=username]").type("Admin")         
        cy.get("input[name=password]").type("admin123")
        cy.get("button[type=submit]").click()

//BDD type // As per our need we use Explicit name , id etc expected
let expname="Burak İkinci"
cy.get('.oxd-userdropdown-name').then(    (x)=>  {

let acname=x.text()
expect(acname).to.equal("Burak İkinci")
expect(acname).to.not.equal(expect)
//TDD
assert.equal(acname,expname)
//assert.notEqual(acname,expname)

})
    })
                })