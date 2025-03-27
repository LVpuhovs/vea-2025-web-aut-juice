import { HomePage } from "../pageObjects/HomePage";
import {LoginPage} from "../pageObjects/LoginPage";
import {RegisterPage} from "../pageObjects/RegisterPage";
import {BasketPage} from "../pageObjects/BasketPage";
import {SelectAddressPage} from "../pageObjects/SelectAddressPage";
import {DeliveryMethodPage} from "../pageObjects/DeliveryMethodPage";
import {PaymentOptionsPage} from "../pageObjects/PaymentOptionsPage";
import {OrderSummaryPage} from "../pageObjects/OrderSummaryPage";
import {OrderCompletionPage} from "../pageObjects/OrderCompletionPage";
import {SavedAddressesPage} from "../pageObjects/SavedAddressesPage";
import {CreateAddressPage} from "../pageObjects/CreateAddressPage";
import {SavedPaymentMethodsPage} from "../pageObjects/SavedPaymentMethodsPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButtonClick.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.usernameButton.should("contain.text","demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notCustomerButton.click();
      // Find - how to generate random number in JS
      const emailNumber = Math.floor(Math.random() * 101);
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const email = "email_" + emailNumber.toString() + "@ebox.com";
      // Save that email address to some variable
      RegisterPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      const password = "password_" + emailNumber.toString();
      RegisterPage.passwordField.type(password);
      RegisterPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegisterPage.securityQuestionButton.click();
      // Select  "Name of your favorite pet?"
      RegisterPage.favouritePetField.click();
      // Fill in answer
      RegisterPage.answerField.type("cat");
      // Click Register button
      RegisterPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButtonClick.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.usernameButton.should("contain.text",email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon");
      HomePage.searchField.type('{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.productClick.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.containterInfo.should("contain.text","Sour but full of vitamins.");
    });
    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon", () => {
    // Click on search icon
      HomePage.searchButton.click();
    // Search for 500ml
      HomePage.searchField.type("500ml");
      HomePage.searchField.type('{enter}');
    // Select a product card - Lemon Juice (500ml)
      HomePage.productClick.contains('Lemon Juice (500ml)').click();
    // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.containterInfo.should("contain.text","Sour but full of vitamins.");
    })

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for 500ml
      HomePage.searchField.type("500ml");
      HomePage.searchField.type('{enter}');
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productClick.contains('Eggfruit Juice (500ml)').click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.containterInfo.should("contain.text","Now with even more exotic flavour.");
      // Close the card
      HomePage.closeCardButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productClick.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.containterInfo.should("contain.text","Sour but full of vitamins.");
      // Close the card
      HomePage.closeCardButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productClick.contains('Strawberry Juice (500ml)').click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.containterInfo.should("contain.text","Sweet & tasty!");
    })


    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for King
      HomePage.searchField.type("King");
      HomePage.searchField.type('{enter}');
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productClick.contains('King of the Hill').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.extendReviews.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.extendReviews.should("contain.text","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!")
    })


    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Raspberry
      HomePage.searchField.type("Raspberry");
      HomePage.searchField.type('{enter}');
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productClick.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      HomePage.addReviewField.clear().type("Tastes like metal");
      HomePage.addReviewField.should('have.value', 'Tastes like metal');
      // Click Submit
      HomePage.reviewSubmitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.extendReviews.click();
      // Validate review -  "Tastes like metal"
      HomePage.extendReviews.should("contain.text","Tastes like metal")
    })


    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.cardCount.should("have.length","12");
      // Change  items per page (at the bottom of page) to 24
      HomePage.changeCount.click();
      HomePage.selectCount.contains('24').click();
      // Validate that the amount of cards is 24
      HomePage.cardCount.should("have.length","24");
      // Change items per page (at the bottom of page) to 36
      HomePage.changeCount.click();
      HomePage.selectCount.contains('36').click();
      // Validate that the amount of cards is 36
      HomePage.cardCount.should("have.length","36");
    })


    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt",  () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Girlie
      HomePage.searchField.type("Girlie");
      HomePage.searchField.type('{enter}');
      // Add to basket "Girlie"
      HomePage.addToBasket.click();
      // Click on "Your Basket" button
      HomePage.yourCartButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.SelectAddress.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.ContinueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliverySpeedSelect.contains("Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.cardSelection.click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeOrderAndPay.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.validation.should("contain.text", "Thank you for your purchase!")
    })


    // Create scenario - Add address
    it("Add address",  () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPaymentsButton.click();
      // Click on My saved addresses
      HomePage.savedAddressButton.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAddressButton.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.selectField.contains("Country").click();
      CreateAddressPage.countryField.type("Latvia");
      CreateAddressPage.selectField.contains("Name").click();
      CreateAddressPage.nameField.type("Markuss");
      CreateAddressPage.selectField.contains("Mobile Number").click();
      CreateAddressPage.mobileNumberField.type("23412455");
      CreateAddressPage.selectField.contains("ZIP Code").click();
      CreateAddressPage.zipCodeField.type("LV-3210");
      CreateAddressPage.selectField.contains("Address").click();
      CreateAddressPage.addressField.type("Majas iela 1");
      CreateAddressPage.selectField.contains("City").click();
      CreateAddressPage.cityField.type("Pope");
      CreateAddressPage.selectField.contains("State").click();
      CreateAddressPage.stateField.type("Turpat");
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      SavedAddressesPage.validations.should("contain.text", "Latvia")

    })

    // Create scenario - Add payment option
    it.only("Add payment option",  () => {
    // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPaymentsButton.click();
      // Click on My payment options
      HomePage.paymentsButton.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addNewCardButton.click();
      // Fill in Name
      SavedPaymentMethodsPage.selectField.contains("Name").click();
      SavedPaymentMethodsPage.selectField.contains("Name").type("Bob Stone");
      // Fill in Card Number
      SavedPaymentMethodsPage.selectField.contains("Card Number").click();
      SavedPaymentMethodsPage.selectField.contains("Card Number").type("1234567890123456");
      // Set expiry month to 7
      SavedPaymentMethodsPage.expiryMonth.select("7");
      // Set expiry year to 2090
      SavedPaymentMethodsPage.expiryYear.select("2090");
      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.validate.should("contain.text", "Bob Stone");
    })

  });
});
