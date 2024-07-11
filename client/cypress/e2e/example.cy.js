describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')
        // visit to visit  a url
        cy.contains('Welcome')
        cy.contains('Register')
        cy.contains('Login')

        //if a text is present in the document
        
    })
})