describe("Lambda Eats" , () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("Sanity Check", () => {
        expect(5).to.equal(5)
    })
})