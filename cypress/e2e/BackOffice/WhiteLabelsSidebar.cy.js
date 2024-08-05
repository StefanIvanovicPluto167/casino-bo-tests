describe('Navigate to White Labels General', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("open BackOffice, navigate to Sidebar and add a new Sidebar", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('Sidebar').click()
    cy.contains("Add Category").click()
    cy.get('body > div:nth-child(2) > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > svg:nth-child(1)').click()
    cy.get('input[type="file"]').attachFile('kyc-picture.png')
    cy.xpath('//*[@id="name"]').clear().type("Test")
    cy.contains("Add Subsection").click()
    cy.get('body > div:nth-child(2) > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > svg:nth-child(1)').click()
    cy.xpath('//*[@id="name"]').clear().type("Test Subsection")
    cy.xpath('//*[@id="route"]').type("/")
    cy.get('input[type="file"]').attachFile('kyc-picture.png')
    cy.contains("Confirm Changes").click()

  })
  it("navigate to casino to check if the new added Sidebar is visible", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Test").scrollIntoView().should('be.visible')
    cy.contains("Test Subsection").scrollIntoView().should('be.visible')
  })
  it("navigate to BO to edit the new added Sidebar and check on Casino the changes", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('Sidebar').click()
    cy.get('body > div:nth-child(2) > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > svg:nth-child(1)').click()
    cy.xpath('//*[@id="name"]').clear().type("Edit Test")
    cy.get('body > div:nth-child(2) > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > svg:nth-child(1)').click()
    cy.xpath('//*[@id="name"]').clear().type("Edited Test Subsection")
    cy.contains("Confirm Changes").click()
    cy.visit("https://chipfling.com/")
    cy.contains("Edit Test").scrollIntoView().should('be.visible')
    cy.contains("Edited Test Subsection").scrollIntoView().should('be.visible')
  })
  it("navigate to BO to delete the new added Sidebar and check on Casino it's no longer there", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('Sidebar').click()
    cy.get('body > div:nth-child(2) > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > svg:nth-child(2)').click()
    cy.contains("Confirm Changes").click()
    cy.visit("https://chipfling.com/")
    cy.contains("7Mojos Live").scrollIntoView()
    cy.contains("Edited Test Subsection").should('not.exist')
    
  })
   
})