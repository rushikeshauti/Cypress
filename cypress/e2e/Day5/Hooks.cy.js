
describe("Hooks",  ()=> {

it("login", ()=>{

before(function(){
cy.log("This is the setup block")
})

after(function(){
    cy.log("This is the teardown block")  
})

})
})