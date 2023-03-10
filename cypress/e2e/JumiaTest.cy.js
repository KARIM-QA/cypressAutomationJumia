/// <reference types="cypress"/>

describe('Jumia Test Suite', () => {
    it('jumia Functional Test', () => {

      cy.visit('https://www.jumia.com.tn/' );
      cy.xpath("//button[@aria-label='newsletter_popup_close-cta']").click();
      cy.xpath("//input[@id='fi-q']").type("pc portable msi");
      cy.xpath("//button[normalize-space()='Rechercher']").click();
      cy.xpath("//h3[contains(text(),'Msi PC Portable Gamer GF63 Thin - i5 11400H 8G 512')]").should('have.text','Msi PC Portable Gamer GF63 Thin - i5 11400H 8G 512SSD - GTX1650');
      cy.wait(10000);
    })
  })

  