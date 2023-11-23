class CheckoutPage {
    locators = {
      placeOrderButton: () => cy.contains('Place Order'),
      nameInput: () => cy.get('#name'),
      countryInput: () => cy.get('#country'),
      cityInput: () => cy.get('#city'),
      cardInput: () => cy.get('#card'),
      monthInput: () => cy.get('#month'),
      yearInput: () => cy.get('#year'),
      purchaseButton: () => cy.contains('Purchase'),
      successAlert: () => cy.get('.sweet-alert'),
      okButton: () => cy.contains('OK'),
    };
  
    placeOrder() {
      this.locators.placeOrderButton().click();
    }
  
    completePurchase(name, country, city, card, month, year) {
      this.locators.nameInput().type(name);
      this.locators.countryInput().type(country);
      this.locators.cityInput().type(city);
      this.locators.cardInput().type(card);
      this.locators.monthInput().type(month);
      this.locators.yearInput().type(year);
      this.locators.purchaseButton().click();
    }
  
    verifyPurchaseSuccess() {
      this.locators.successAlert().should('be.visible');
      this.locators.okButton().click();
    }
}
  
export default new CheckoutPage();
  