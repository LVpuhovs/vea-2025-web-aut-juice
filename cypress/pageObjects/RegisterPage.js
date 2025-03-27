import { BasePage } from "../pageObjects/basePage";

export class RegisterPage extends BasePage {
    static get url() {
        return "/#/register";
    }

    static get emailField(){
        return cy.get("#emailControl");
    }

    static get passwordField(){
        return cy.get("#passwordControl");
    }

    static get repeatPasswordField(){
        return cy.get("#repeatPasswordControl");
    }

    static get securityQuestionButton(){
        return cy.get("[aria-label=\"Selection list for the security question\"]");
    }

    static get favouritePetField(){
        return cy.contains(".mat-mdc-option", "Name of your favorite pet?");
    }

    static get answerField(){
        return cy.get("#securityAnswerControl");
    }

    static get registerButton(){
        return cy.get("#registerButton");
    }
}