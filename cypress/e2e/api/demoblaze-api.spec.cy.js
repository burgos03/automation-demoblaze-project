/// <reference types="cypress" />

describe('DemoBlaze API Tests', () => {
    const baseUrl = 'http://api.demoblaze.com';
  
    it('Signup - Create a new user', () => {
        const newUser = {
          username: 'newuser',
          password: 'newpassword',
        };
    
        cy.request('POST', `${baseUrl}/signup`, newUser)
          .should((response) => {
            console.log(response);
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('errorMessage', undefined);
          });
      });
      
  
    it('Signup - Try to create an existing user', () => {
      const existingUser = {
        username: 'user1',
        password: 'password1',
      };

      cy.request({
        method: 'POST',
        url: `${baseUrl}/signup`,
        body: existingUser,
        failOnStatusCode: false,
      }).should((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('status', 'failed');
      });
    });
  
    it('Login - Correct username and password', () => {
      const validUser = {
            username: 'user1',
            password: 'password1',
        };
  
      cy.request('POST', `${baseUrl}/login`, validUser)
        .should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('status', 'success');
        });
    });
  
    it('Login - Incorrect username and password', () => {
      const invalidUser = {
            username: 'invaliduser',
            password: 'invalidpassword',
        };

      cy.request({
            method: 'POST',
            url: `${baseUrl}/login`,
            body: invalidUser,
            failOnStatusCode: false,
        }).should((response) => {
            expect(response.status).to.eq(401);
            expect(response.body).to.have.property('status', 'failed');
        });
    });
});
  