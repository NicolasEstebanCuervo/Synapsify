describe("App",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    // The page loads correctly

    it("The home page load with your title", () => {
        cy.contains("Synapsify");
    });

    it("The home page load with your subtitle", () => {
        cy.contains("Sail the tide of productivity with Sinapsify.");
    });

    // The buttons on the home page work correctly.

    it("The button tickets works.", () => {
        cy.contains("Get Rolling!").click()
        cy.visit("http://localhost:3000/tickets")
    });

    it("The button tasks works.", () => {
        cy.contains("Make It Happen!").click()
        cy.visit("http://localhost:3000/tickets")
    });

    it("The button notes works.", () => {
        cy.contains("Write Your Story!").click()
        cy.visit("http://localhost:3000/notes")
    });

    // Create a ticket, a ticket and a task and a task using the buttons on the home page.

    it("Create a ticket via the home page button", () => {
        cy.contains("Get Rolling!").click()
        cy.visit("http://localhost:3000/tickets")
        cy.contains("New ticket").click()

        cy.get('[placeholder="Title"]').type("Create a website");
        cy.get('[placeholder="Assignee"]').type("John Doe");
        cy.get('[placeholder="Priority"]').type("High");
        cy.get('[type="submit"]').click();
    });

    it("Create a ticket and a task via the home page button",()=> {
        cy.contains("Get Rolling!").click()
        cy.visit("http://localhost:3000/tickets")
        cy.contains("New ticket").click()

        cy.get('[placeholder="Title"]').type("Create a web");
        cy.get('[placeholder="Assignee"]').type("John Doe");
        cy.get('[placeholder="Priority"]').type("High");
        cy.get('[type="submit"]').click();

        cy.get(':nth-child(1) > :nth-child(1) > .css-pram2n', { timeout: 2000 }).click()

        cy.get('[data-testid="add-icon-cypress"]').click();
        
        cy.get('[placeholder="Title"]').type("Create the form");
        cy.get('[placeholder="Description"]').type("Create the registration form for the website");
        cy.get('[type="submit"]').click();
    });

    it("Create a ticket and a task and mark as completed via the home page button",()=> {
        cy.contains("Get Rolling!").click()
        cy.visit("http://localhost:3000/tickets")
        cy.contains("New ticket").click()

        cy.get('[placeholder="Title"]').type("Create a website");
        cy.get('[placeholder="Assignee"]').type("John Doe");
        cy.get('[placeholder="Priority"]').type("High");
        cy.get('[type="submit"]').click();

        cy.get(':nth-child(1) > :nth-child(1) > .css-pram2n', { timeout: 2000 }).click()

        cy.get('[data-testid="add-icon-cypress"]').click();
        
        cy.get('[placeholder="Title"]').type("Create the form");
        cy.get('[placeholder="Description"]').type("Create the registration form for the website");
        cy.get('[type="submit"]').click();
        
        cy.get('[data-testid="check-box-cypress"]').click();
    });

    it("Create a ticket and a task and edit it via the home page button",()=> {
        cy.contains("Get Rolling!").click()
        cy.visit("http://localhost:3000/tickets")
        cy.contains("New ticket").click()

        cy.get('[placeholder="Title"]').type("Create a website");
        cy.get('[placeholder="Assignee"]').type("John Doe");
        cy.get('[placeholder="Priority"]').type("High");
        cy.get('[type="submit"]').click();

        cy.get(':nth-child(1) > :nth-child(1) > .css-pram2n', { timeout: 2000 }).click()

        cy.get('[data-testid="add-icon-cypress"]').click();
        
        cy.get('[placeholder="Title"]').type("Create the form");
        cy.get('[placeholder="Description"]').type("Create the registration form for the website");
        cy.get('[type="submit"]').click();

        cy.get('[data-testid="edit-icon-cypress"]', { timeout: 2000 }).click()
        
        cy.get('[placeholder="Title"]').clear().type("Create navbar");
        cy.get('[placeholder="Description"]').clear().type("Create the navbar for the page");
        cy.get('[type="submit"]').click();
    });

    it.only("Create a ticket and a task and delete it via the home page button",()=> {
        cy.contains("Get Rolling!").click()
        cy.visit("http://localhost:3000/tickets")
        cy.contains("New ticket").click()

        cy.get('[placeholder="Title"]').type("Create a website");
        cy.get('[placeholder="Assignee"]').type("John Doe");
        cy.get('[placeholder="Priority"]').type("High");
        cy.get('[type="submit"]').click();

        cy.get(':nth-child(1) > :nth-child(1) > .css-pram2n', { timeout: 2000 }).click()

        cy.get('[data-testid="add-icon-cypress"]').click();
        
        cy.get('[placeholder="Title"]').type("Create the form");
        cy.get('[placeholder="Description"]').type("Create the registration form for the website");
        cy.get('[type="submit"]').click();

        cy.get('[data-testid="exit-icon-cypress"]', { timeout: 2000 }).click()

    });
})