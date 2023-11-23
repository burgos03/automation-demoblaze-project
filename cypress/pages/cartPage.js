class CartPage {
    locators = {
      viewCartButton: () => cy.get('#cartur'),
    };
  
    viewCart() {
      this.locators.viewCartButton().click();
    }
}
  
export default new CartPage();
  