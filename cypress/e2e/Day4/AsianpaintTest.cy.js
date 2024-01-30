describe("Asian Paint Add cart",()=>{

    it("Addcart", ( )=>{
    cy.visit("https://www.asianpaints.com/")

    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('a[data-target="#SHOP"]').trigger('mouseover').click()
 //   cy.get("Wallpapers").click({ force: true })

 //cy.scrollTo('bottom')
 //cy.scrollTo("top")
 
 cy.get(':nth-child(4) > .anchor-explore-stores > .imageWrapper > .image-explore-stores > img')
 .click()
 cy.get('[data-attr-tags="/etc/tags/asianpaintsrevamp/shop-filter-tags/price/rs300-rs399,,/etc/tags/asianpaintsrevamp/shop-filter-tags/colour/clear,/etc/tags/asianpaintsrevamp/shop-filter-tags/surface/wood,/etc/tags/asianpaintsrevamp/shop-filter-tags/size/500ml"] > :nth-child(5) > .global-button-white')
 .click()
 cy.get('#cartPinCode')
 .type("412411")
 cy.get('.pin-code-form > .ctaComp > .ctaText')
 .click()
 cy.get('.cart-items-dropdowb > .iconLinks')
 .click()
 //cy.get('[data-attr-tags="/etc/tags/asianpaintsrevamp/shop-filter-tags/price/rs200-rs299,,/etc/tags/asianpaintsrevamp/shop-filter-tags/colour/clear,/etc/tags/asianpaintsrevamp/shop-filter-tags/surface/wood,/etc/tags/asianpaintsrevamp/shop-filter-tags/size/250ml"] > .amount-box > .amt')
 
 /*
 let expvalue=""
 cy.get('.oxd-userdropdown-name').then(    (x)=>  {
 
 let acvalue=x.text()
 expect(acvalue).to.equal("Burak İkinci")
 expect(acvalue).to.not.equal(expect)
 //TDD
 assert.equal(acvalue,expvalue)

*/




 //cy.wait(1000)
 //cy.get('[data-attr-price="5500.00"] > :nth-child(5) > .global-button-white > :nth-child(1)').click()

 //cy.get('#cartPinCode').type("412411")
 //cy.get('#add-to-cart-click').click()

 //cy.get('.pin-code-form > .ctaComp > .ctaText').click()
 //cy.get('.cart-items-dropdowb').click()


    })
    
    
    })
    
   // })