describe('Navigate to White Labels General', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("Create VIP", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('VIP Progress').click()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[1]/div/div/div[1]').click()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[1]/div/div/div[5]/div[1]/div[1]/button').scrollIntoView()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[1]/div/div/div[5]/div[1]/div[1]/button').click()
    cy.contains("Edit tier").scrollIntoView()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[2]/div/div/div[1]/div[1]/div/div').type("Test")
    cy.get('input[type="file"]').attachFile('kyc-picture.png')
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[2]/div/div/div[3]/div[2]/div[2]/div/div/div').clear().type("5000")
    cy.contains("Save").click()
  })
  it("visit Chipfling to see the new added VIP tier", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]/div').click();
    cy.contains("Rewards").click()
    cy.contains("Test").scrollIntoView().should('be.visible')
    cy.contains("See all rewards").click()
    cy.contains("Test").scrollIntoView().should('be.visible')
  })
  it("navigate to BO to delete the added VIP then visit Casino to confirm removal", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('VIP Progress').click()
    cy.contains("Test").scrollIntoView()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[1]/div/div/div[5]/div[1]/div[1]/button').click()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[1]/div/div/div[5]/div[1]/div[2]/button').click()
    cy.contains("Save").click()
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]/div').click();
    cy.contains("Rewards").click()
    cy.contains("Platinum").scrollIntoView()
    cy.contains("Test").should('not.exist')
    cy.contains("See all rewards").click()
    cy.contains("Platinum").scrollIntoView()
    cy.contains("Test").should('not.exist')
  })
   
})