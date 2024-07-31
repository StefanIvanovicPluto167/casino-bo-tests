describe('Navigate to Rewards', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("navigate to rewards", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.contains("Rewards").click()
    cy.contains("New Reward").click()
    cy.contains("Select Reward type").click()
  })
   
})