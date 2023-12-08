describe("Fundamentals Test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("Contains Correct Header", () => {
    cy.get("[data-test=fundamentals-header]").should(
      "contain.text",
      "Testing Fundamentals"
    );
    // cy.contains("Testing Fundamentals").should("be.visible");
  });
  it("Accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.getDataTest("accordion-item-1").click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.getDataTest("accordion-item-1").click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    // cy.get("[data-test=accordion]").should("be.visible");
  });
});
