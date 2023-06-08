/// <reference types="cypress" />

describe("demo", () => {
  it.only("visit application", () => {
    cy.visit("http://myapp.localhost");
  });
});
