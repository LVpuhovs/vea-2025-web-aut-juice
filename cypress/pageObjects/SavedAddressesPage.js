import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
    static get url() {
        return "/#/address/saved";
    }

    static get addNewAddressButton() {
        return cy.get("[aria-label=\"Add a new address\"]");
    }
    static get validations() {
        return cy.get("[class=\"mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted\"]");
    }
}