import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
    static get url() {
        return "/#/address/select";
    }
    static get SelectAddress(){
        return cy.get("[class=\"mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted\"]");
    }

    static get ContinueButton() {
        return cy.get("[aria-label=\"Proceed to payment selection\"]")
    }
}