//client
describe('Home Page test',()=>{
    it('Check The Input field',()=>{
        cy.visit('/');
        cy.get('input').type('Cinderalla')
        cy.get('button').should('be.visible')
        cy.get('button.bg-color').click();
        cy.contains('Welcome,Cinderalla')
        cy.get('input').should('have.value','Cinderalla')
})

})