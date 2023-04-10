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

describe("Given a home page", () => {
  describe("When a user clicks on a 'delete' button from a post", () => {
    it("Then it should show a modal with message 'Post successfully deleted'", () => {
      cy.visit("/");

      cy.findByLabelText(/username/i).type("admin");
      cy.findByLabelText(/password/i).type("adminadmin");
      cy.get("button").click();

      cy.get(".post-card:nth-child(1) > .button").click();
      cy.findByText(/post successfully deleted/i);
    });
  });

  describe("When a user clicks on the 'logout' button", () => {
    it("Then it should navigate to the login page", () => {
      cy.visit("/");

      cy.findByLabelText(/username/i).type("admin");
      cy.findByLabelText(/password/i).type("adminadmin");
      cy.get("button").click();

      cy.get("header > .button").click();

      cy.findByRole("heading", { level: 2, name: /login/i });
    });
  });
});
