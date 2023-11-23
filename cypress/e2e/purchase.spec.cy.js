import HomePage from '../pages/homePage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';

describe('Purchase on demoblaze', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Add products to cart and purchase them.', () => {
    HomePage.addToCart('Samsung galaxy s6');
    HomePage.visit();
    HomePage.addToCart('Samsung galaxy s7');
    
    CartPage.viewCart();

    CheckoutPage.placeOrder();
    CheckoutPage.completePurchase('Juan Perez', 'Bolivia', 'Cochabamba', '1234567890123456', '12', '2023');
    CheckoutPage.verifyPurchaseSuccess();
  });
});
