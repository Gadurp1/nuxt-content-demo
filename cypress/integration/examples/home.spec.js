describe('test_name', function() {

 it('Clicking enter garage redirect to the first item in garage.', function() {

    cy.viewport(2400, 1222)
 
    cy.visit('http://localhost:3000/')
 
    cy.get('[data-test=enter-button]').click()
    
 
 })

})
