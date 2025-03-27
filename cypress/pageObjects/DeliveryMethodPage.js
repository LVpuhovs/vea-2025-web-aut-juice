import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "/#/delivery-method";
    }
    static get deliverySpeedSelect() {
        return cy.get("[class=\"mat-mdc-table mdc-data-table__table cdk-table\"]");
    }

    static get continueButton() {
        return cy.get("[aria-label=\"Proceed to delivery method selection\"]");
    }
}