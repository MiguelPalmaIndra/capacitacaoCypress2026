/// <reference types="cypress" />

describe ('Acessar google', () => {

    it('Acessar google com sucesso', () => {
        cy.visit('https://www.google.com/')
    })
})