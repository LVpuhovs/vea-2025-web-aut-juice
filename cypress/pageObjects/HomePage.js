import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }
  static get loginButton() {
    return cy.get("#navbarLoginButton")
  }

  static get usernameButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchButton() {
    return cy.get("#searchQuery");
  }
  static get searchField() {
    return cy.get("#mat-input-0");
  }

  static get productClick() {
    return cy.get('.item-name').contains('Lemon Juice (500ml)');
  }
  static get containterInfo(){
    return cy.get(".container");
  }
}
