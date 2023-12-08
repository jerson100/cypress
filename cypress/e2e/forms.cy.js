describe("Form Testing", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Suscribe Form", () => {
    cy.contains("Testing Forms").should("be.visible");
    cy.get("input[type='text']").as("myinputemail");
    cy.get("@myinputemail").type("juamkoo@gmail.com");
    // cy.get("input[type='text']").type("juamkoo@gmail.com");
    cy.get('[data-testid="btnsubmit"]').click();
    cy.get("p")
      .contains("Successfully subbed: juamkoo@gmail.com!")
      .should("exist");
    // cy.get("input[type='text']").should("be.value", "juamkoo@gmail.com");
  });
});
