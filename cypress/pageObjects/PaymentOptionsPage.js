import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/payment/shop";
    }
    static get cardSelection() {
        return cy.get("#mat-radio-46");
    }

    static get continueButton() {
        return cy.get("[aria-label=\"Proceed to review\"]")
    }
}