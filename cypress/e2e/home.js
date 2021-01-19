/// <reference types="Cypress" />

describe('home', () => {
  beforeEach(() => {
   cy.visit('/');
   cy.wait(600)
  });

  it('should have hero content', () => {
    cy.findAllByText("Hi,I'm Luke");
    cy.findAllByText(
      "Hi, I'm Luke.I'm passionate about solving technical problems and coming up with creative solutions.I enjoy working with the JAMstack, React, Node, testing technologies + practices & various dev-ops technologies",
    );

  });
  it('should have recent projects', () => {
    cy.findAllByText(/Projects/i);
  });


  it('should have recent blog posts', () => {
    cy.findAllByText(/forcing git merges/i);
  });
});