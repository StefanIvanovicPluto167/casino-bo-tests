describe('Navigate to Analytics', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("navigate to Admin Users", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.contains("Admin Users").click()
    
  })
  it("navigate to Admin Users and add a new user", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.contains("Admin Users").click()
    cy.contains("Add User").click()
    cy.xpath('//*[@id="user-name"]').type("Test")
    cy.xpath('//*[@id="user-surname"]').type("Automation")
    //cy.xpath('/html/body/div[2]/div[3]/div/div[1]/form/div/div/div/div[3]/div/div/div/div/button/svg/path').click()
    cy.xpath('//*[@id="user-email"]').type('qateststefan@gmail.com')
    cy.xpath('//*[@id="user-password"]').type('Password123!')
    cy.xpath('//*[@id="user-phone"]').type('+381638538395')
    cy.contains("No Brands Selected").click()
    cy.contains("2 - ChipFling").click()
    cy.xpath('/html/body/div[2]/div[3]/div/div[1]/form/div/div/div/div[7]').click()
    cy.contains("Cancel").click()
  })
   
})