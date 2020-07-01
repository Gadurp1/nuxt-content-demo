describe('Bike details page', function() {
    it('should load the contents image.', function() {
        cy.viewport(2400, 1222)
        cy.visit('https://xenodochial-ramanujan-ea193c.netlify.app/bikes/f-650-gs')
        cy.get('[data-test="bike-image"]')                       // yields <nav>
        .should('be.visible') 
     })
     it('should load the bikes details.', function() {
        cy.viewport(2400, 1222)
        cy.visit('https://xenodochial-ramanujan-ea193c.netlify.app/bikes/f-650-gs')
        cy.get('[data-test="bike-details"]')                       // yields <nav>
        .should('be.visible') 
     })
    it('when the next button is clicked should redirect to that items page.', function() {
        cy.viewport(2400, 1222)
 
        cy.visit('https://xenodochial-ramanujan-ea193c.netlify.app/bikes/f-650-gs')
        cy.get('.w-full > .absolute > button > .border > .h-10').click()
        cy.url().should('eq', 'https://xenodochial-ramanujan-ea193c.netlify.app/bikes/f-750-gs');
     })
     it('when the prev button is clicked should redirect to that items page.', function() {
        cy.viewport(2400, 1222)
 
        cy.visit('https://xenodochial-ramanujan-ea193c.netlify.app/bikes/f-650-gs')
        cy.get('.w-full > .absolute > button > .border > .h-10').click()
        cy.url().should('eq', 'https://xenodochial-ramanujan-ea193c.netlify.app/bikes/f-750-gs');
        cy.get('.bg-none > .absolute > button > .border > .h-10').click()
        cy.url().should('eq', 'https://xenodochial-ramanujan-ea193c.netlify.app/bikes/f-650-gs');
 
     })
   })
   