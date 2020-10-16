describe("Lambda Eats" , () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit("http://localhost:3000/pizza")
    })

    it("Sanity Check", () => {
        expect(5).to.equal(5)
    })

    const getName = () => cy.get("input[name='name']")
    const getSize = () => cy.get("select[name='size']")
    const getPep = () => cy.get("input[name='pepperoni']")
    const getSaus = () => cy.get("input[name='sausage']")
    const getPine = () => cy.get("input[name='pineapple']")
    const getHam = () => cy.get("input[name='ham']")
    const getSpecial = () => cy.get("input[name='special']")
    const getAdd = () => cy.get("button")

    it("Get Elements", () => {
        getName().should("exist")
        getSize().should("exist")
        getPep().should("exist")
        getSaus().should("exist")
        getPine().should("exist")
        getHam().should("exist")
        getSpecial().should("exist")
        getAdd().should("exist")
    })

    describe("Input Quality Checks", () => {
        it("Check Name", () => {
            getName().type("Corey")
            getName().should("have.value", "Corey")
        })

        it("Check Size", () => {
            getSize().select("large")
            getSize().should("have.value", "large")
        })

        it("Check Pepperoni", () => {
            getPep().click()
            getPep().should("have.value", "on")
        })

        it("Check Sausage", () => {
            getSaus().click()
            getSaus().should("have.value", "on")
        })

        it("Check Pineapple", () => {
            getPine().click()
            getPine().should("have.value", "on")
        })

        it("Check Ham", () => {
            getHam().click()
            getHam().should("have.value", "on")
        })

        it("Check Special Instructions", () => {
            getSpecial().type("Extra cheese")
            getSpecial().should("have.value", "Extra cheese")
        })
    })

    describe("'Add to Order' Button Checks", () => {
        it("Add to Order Disabled", () => {
            getAdd().should("be.disabled")
        })

        it("Add to Order Enabled", () => {
            getName().type("Corey")
            getSize().select("large")
            getPep().click()
            getSaus().click()
            getPine().click()
            getHam().click()
            getSpecial().type("Extra cheese")

            getAdd().should("be.enabled")
            getAdd().click()
        })
    })
})