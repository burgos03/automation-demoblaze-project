class HomePage {
    locators = {
      product: (productName) => cy.contains(productName),
      addToCartButton: () => cy.contains('Add to cart'),
    };
  
    visit() {
      cy.visit('http://www.demoblaze.com/');
    }
  
    addToCart(productName) {
      this.locators.product(productName).click();
      this.locators.addToCartButton().click();
    }
}
  
export default new HomePage();
  