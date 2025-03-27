import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
    static get url() {
        return "/#/address/create";
    }

    static get selectField() {
        return cy.get("mat-label");
    }
    static get countryField() {
        return cy.get("[placeholder=\"Please provide a country.\"]");
    }
    static get nameField() {
        return cy.get("[placeholder=\"Please provide a name.\"]");
    }
    static get mobileNumberField() {
        return cy.get("[placeholder=\"Please provide a mobile number.\"]");
    }
    static get zipCodeField() {
        return cy.get("[placeholder=\"Please provide a ZIP code.\"]");
    }
    static get addressField() {
        return cy.get("[placeholder=\"Please provide an address.\"]");
    }

    static get cityField() {
        return cy.get("[placeholder=\"Please provide a city.\"]");
    }
    static get stateField() {
        return cy.get("[placeholder=\"Please provide a state.\"]");
    }
    static get submitButton() {
        return cy.get("#submitButton");
    }

}