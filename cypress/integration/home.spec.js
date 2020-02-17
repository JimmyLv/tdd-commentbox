describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/home')
  })
  it('should have multiple tabs on the bottom', () => {
    cy.contains('书架')
    cy.contains('推荐')
    cy.contains('捐赠')
    cy.contains('我的')
  })

  it('should show book list by category and tag', () => {
    // todo: should update to testId from plain text?
    cy.contains('书架').click()
    cy.contains('Bookshelf')

    cy.contains('编程').click()
    cy.contains('Java编程思想')

    cy.contains('JavaScript 1本').click()
    cy.contains('Java编程思想')
    cy.contains('你不知道的JavaScript')

    cy.contains('文学').click()
    cy.contains('平凡的世界')
  })
})
