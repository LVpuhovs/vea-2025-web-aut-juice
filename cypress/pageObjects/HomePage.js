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
    return cy.get('.item-name');
  }
  static get containterInfo(){
    return cy.get(".container");
  }

  static get closeCardButton(){
    return cy.get("button[aria-label=\"Close Dialog\"]");
  }

  static get extendReviews(){
    return cy.get("[aria-label=\"Expand for Reviews\"]");
  }

  static get addReviewField(){
    return cy.get("[aria-label=\"Text field to review a product\"]");
  }
  static get reviewSubmitButton(){
    return cy.get("#submitButton");
  }

  static get cardCount(){
    return cy.get("[class=\"mat-grid-tile ng-star-inserted\"]");
  }
  static get changeCount(){
    return cy.get("[aria-haspopup=\"listbox\"]");
  }
  static get selectCount(){
    return cy.get(".mdc-list-item__primary-text");
  }
}
