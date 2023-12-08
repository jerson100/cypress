describe("Examples Test", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("Multi-pages testing", () => {
    cy.get("[data-test='nav-item-home']").click();
    cy.location("pathname").should("equal", "/");

    cy.get("[data-test='nav-item-overview']").click();
    cy.location("pathname").should("equal", "/overview");

    cy.get("[data-test='nav-item-fundamentals']").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.get("[data-test='nav-item-examples']").click();
    cy.location("pathname").should("equal", "/examples");
  });

  it("Interc.interepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    }).as("examples");
    cy.get("[data-test='btn-intercept']").click();
    cy.wait("@examples")
      .its("response.body.name")
      .should("equal", "Using fixtures to represent data");
    // cy.wait("@examples").should(({ request, response }) => {
    //   console.log(response.body);
    //   //   expect(response.body).to.have.property("name", "Cypress");
    // });
  });

  it.only("grudges", () => {
    cy.contains(/add some grudges/i);

    cy.get("[data-test='grudge-list']").as("grudgeList");

    cy.get("@grudgeList").within(() => {
      cy.get("li").should("have.length", 0);
    });

    cy.get("[data-test='grudge-input']").within(() => {
      cy.get("input").type("some grudge");
    });

    cy.get("[data-test='add-grudge-button']").click();

    cy.get("@grudgeList").within(() => {
      cy.get("li").should("have.length", 1);
      cy.get("li").its(0).should("contain", "some grudge");
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
      cy.get("li").should("have.length", 0);
    });
  });
});
