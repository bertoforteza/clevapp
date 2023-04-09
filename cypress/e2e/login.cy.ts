describe("Given a login page", () => {
  describe("When a user types 'admin' on the username field, and 'adminadmin' on the password field, and then clicks on the login button", () => {
    it("Then it should log the user in and navigate to the home page", () => {
      cy.visit("/login");

      cy.findByLabelText(/username/i).type("admin");
      cy.findByLabelText(/password/i).type("adminadmin");
      cy.get("button").click();

      cy.findByRole("heading", { level: 2, name: /clever posts/i });
    });
  });
});
