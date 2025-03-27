import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get url() {
        return "/#/address/create";
    }

    static get addNewCardButton() {
        return cy.get("#mat-expansion-panel-header-0")
    }

    static get selectField() {
        return cy.get("mat-label");
    }
    static get expiryMonth() {
        return cy.get("#mat-input-3");
    }

    static get expiryYear() {
        return cy.get("#mat-input-4");
    }
    static get submitButton() {
        return cy.get("#submitButton");
    }
    static get validate() {
        return cy.get("mat-row");
    }
}