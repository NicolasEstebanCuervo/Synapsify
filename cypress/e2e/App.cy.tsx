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

    // The nav buttons on the home page work correctly.

    it("The nav button home nav works.", () => {
        cy.contains("Home").click()
        cy.visit("http://localhost:3000/")
    });
    
    it("The nav button tickets works.", () => {
        cy.contains("Get Rolling!").click()
        cy.visit("http://localhost:3000/tickets")
    });

    it("The nav button tasks works.", () => {
        cy.contains("Tickets").click()
        cy.visit("http://localhost:3000/tickets")
    });

    it("The nav button notes works.", () => {
        cy.contains("Create a note").click()
        cy.visit("http://localhost:3000/notes")
    });

    // Create a ticket, a ticket and a task and create a note

    it("Create a ticket.", () => {
        cy.contains("Get Rolling!").click()
        cy.visit("http://localhost:3000/tickets")
        cy.contains("New ticket").click()

        cy.get('[placeholder="Title"]').type("Create a website");
        cy.get('[placeholder="Assignee"]').type("John Doe");
        cy.get('[placeholder="Priority"]').type("High");
        cy.get('[type="submit"]').click();
    });

    it("Create a ticket and a task.",()=> {
        cy.contains("Brainstorms to Brilliance: Synapsify's Note-taking Magic!").click()
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

    it("Create a ticket and a task and mark as completed.",()=> {
        cy.contains("Brainstorms to Brilliance: Synapsify's Note-taking Magic!").click()
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

    it("Create a ticket and a task and edit it.",()=> {
        cy.contains("Brainstorms to Brilliance: Synapsify's Note-taking Magic!").click()
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

    it("Create a ticket and a task and delete it.",()=> {
        cy.contains("Brainstorms to Brilliance: Synapsify's Note-taking Magic!").click()
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

    it("Create a note.",()=> {
        cy.contains("Write Your Story!").click()
        cy.visit("http://localhost:3000/notes")
        cy.get('[placeholder="Title"]').type("My first note");
        cy.get('[type="submit"]').click();
    });

    it("Create a note and delete it.",()=> {
        cy.contains("Write Your Story!").click()
        cy.visit("http://localhost:3000/notes")
        cy.get('[placeholder="Title"]').type("My first note");
        cy.get('[type="submit"]').click();
        cy.contains('Delete',{timeout:2000}).click();
    });

    it("Create a note and write on it.",()=> {
        cy.contains("Write Your Story!").click()
        cy.visit("http://localhost:3000/notes")
        cy.get('[placeholder="Title"]').type("My first note");
        cy.get('[type="submit"]').click();
    
        cy.contains("My first note", {timeout:2000}).click()

        cy.get('[id="editor"]').invoke('show').click()
        cy.get('[id="editor"]').type("Hello, this is my first note :D");
    });

    it("Create a note and create a header and a text on it.",()=> {
        cy.contains("Write Your Story!").click()
        cy.visit("http://localhost:3000/notes")
        cy.get('[placeholder="Title"]').type("My first note");
        cy.get('[type="submit"]').click();
    
        cy.contains("My first note", {timeout:2000}).click()

        cy.get('[id="editor"]').invoke('show').click()
        cy.get('.ce-toolbar__plus').click()

        cy.get('[data-item-name="header"]').click()
        cy.get('.ce-header').type("This is my first header in Synapsify.")

        cy.get('[id="editor"]').invoke('show').click()
        cy.get('.ce-toolbar__plus').click()
        cy.get('[data-item-name="paragraph"]').click()
        cy.get('.ce-paragraph ').type("This is my first text in Synapsify.")
    });

    it("Create a note and create a header and a items list on it.",()=> {
        cy.contains("Write Your Story!").click()
        cy.visit("http://localhost:3000/notes")
        cy.get('[placeholder="Title"]').type("My first note");
        cy.get('[type="submit"]').click();
    
        cy.contains("My first note", {timeout:2000}).click()

        cy.get('[id="editor"]').invoke('show').click()
        cy.get('.ce-toolbar__plus').click()

        cy.get('[data-item-name="header"]').click()
        cy.get('.ce-header').type("This is my first header in Synapsify.")

        cy.get('[id="editor"]').invoke('show').click()
        cy.get('.ce-toolbar__plus').click()
        cy.get('[data-item-name="list"]').click()

        cy.get('.cdx-block > :nth-child(1)').type('This it my first item in Synapsify{enter}');
        cy.get('.cdx-block > :nth-child(2)').type('This is my second item in Synapsify{enter}')
    });


    it.only("Create a note and create a header and a text on it.",()=> {
        cy.contains("Write Your Story!").click()
        cy.visit("http://localhost:3000/notes")
        cy.get('[placeholder="Title"]').type("My first note");
        cy.get('[type="submit"]').click();
    
        cy.contains("My first note", {timeout:2000}).click()

        cy.get('[id="editor"]').invoke('show').click()
        cy.get('.ce-toolbar__plus').click()

        cy.get('[data-item-name="header"]').click()
        cy.get('.ce-header').type("This is my first header in Synapsify.")

        cy.get('[id="editor"]').invoke('show').click()
        cy.get('.ce-toolbar__plus').click()
        cy.get('[data-item-name="paragraph"]').click()
        cy.get('.ce-paragraph ').type("This is my first text in Synapsify.")
    });

}) 

