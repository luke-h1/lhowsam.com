describe('recent blogs', () => {
  before(() => {
    cy.visit('/');
  });
  it('should display recent blogs correctly', () => {
    cy.getByTestId('blog-post-Next.js SSR notes')
      .find('h2')
      .contains('Next.js SSR notes')
      .should('be.visible');

    cy.getByTestId('blog-post-Next.js SSR notes')
      .find('p')
      .contains('April 6, 2021')
      .should('be.visible');

    cy.getByTestId('blog-post-Next.js SSR notes')
      .find('p')
      .contains(
        'A few notes that explain how server-side rendering works in Next.js'
      )
      .should('be.visible');

    cy.getByTestId('blog-post-Forcing git merges')
      .find('h2')
      .contains('Forcing git merges')
      .should('be.visible');

    cy.getByTestId('blog-post-Forcing git merges')
      .find('p')
      .contains('December 12, 2020')
      .should('be.visible');

    cy.getByTestId('blog-post-Forcing git merges')
      .find('p')
      .contains(
        'Isolating features into separate branches is a really common practice for most developers. By separating features & bug fixes you can avoid a lot of problems and keep your branches clean.'
      )
      .should('be.visible');

    cy.getByTestId('blog-post-First blog post')
      .find('h2')
      .contains('First blog post')
      .should('be.visible');

    cy.getByTestId('blog-post-First blog post')
      .find('p')
      .contains('December 10, 2020')
      .should('be.visible');

    cy.getByTestId('blog-post-First blog post')
      .find('p')
      .contains('Posting the first blog post')
      .should('be.visible');
  });

  it('should display blog slug page correctly', () => {
    cy.visit('/blog/full-stack-deploy-with-dokku');
    cy.get('span')
      .contains('Full stack deploy with Dokku')
      .should('be.visible');
    cy.get('img').should('be.visible');
    cy.get('p')
      .contains(
        "Dokku is an easy to use & cost-effective solution to deploying your application in a language-agnostic way. It's an open-source, self-hosted alternative to Heroku. Once everything is set up, we can simply use a bash script to deploy your app on your own server."
      )
      .should('be.visible');

    cy.visit('/blog/next-js-ssr-notes');
    cy.get('span').contains('Next.js SSR notes').should('be.visible');
    cy.get('img').should('be.visible');
    cy.get('p')
      .contains(
        'Pre rendering is the term for rendering HTML before it is sent down to the client. By default, Next will pre-render every page. This however can be done in two different ways:'
      )
      .should('be.visible');
  });
});
