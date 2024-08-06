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
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('VIP Progress').click()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[1]/div/div/div[1]').click()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[1]/div/div/div[5]/div[1]/div[1]/button').scrollIntoView()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[1]/div/div/div[5]/div[1]/div[1]/button').click()
    cy.contains("Edit tier").scrollIntoView()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[2]/div/div/div[1]/div[1]/div/div').type("Test")
    cy.get('input[type="file"]').attachFile('kyc-picture.png')
    cy.get('//*[@id=":r12:"]').clear().type("5000")
  })

  /*it("Delete VIP", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('VIP Progress').click()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[1]/div/div/div[6]/div[1]/div[2]').click()
    cy.xpath('//*[@id="full-width-tabpanel-vipprogress"]/div/div/div/form/div/div[2]/div/div/button').click()
  })*/
   
})