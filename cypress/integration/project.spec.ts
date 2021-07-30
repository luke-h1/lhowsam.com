describe('blog page should work', () => {
  context('1080p res', () => {

    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.get('[data-testid=project-title]').scrollIntoView().should('be.visible')
    });
  });

  it('should render properly', () => {
    cy.visit('/projects');
    cy.contains('Projects').should('exist');
  });

  it('should render lhowsam project', () => { 
    cy.visit('/projects');
    cy.contains('My Website').should('exist')
    cy.contains('I use this project as a training ground for myself and often find myself in the deep end of learning a new framework or trying a new technology (This has helped me get comfortable with React & Next for example). I like working on this site and can\'t wait to continue to improve it with the latest technologies available').should('be.visible')
  })

  it('should render tmtodos project', () => { 
    cy.visit('/projects');
    cy.contains('tmtodos.me - full stack todo app').should('be.visible')
    cy.contains('this project was an eye opener on which technologies I most like working with (building full stack applications is really satisifying) and the importance of picking the correct tech-stack to start a project with. Initially the tech stack I chose to start this project was simply not suitable (i.e. Redux was overkill for this project).')
  })

  it('should render Automation project', () => {
    cy.visit('/projects'); 
    cy.contains('Automation').should('be.visible')
    cy.contains('I am a huge advocate for infrastructure automation & continuous integration as this allows developers to focus on innovating new features and solving new problems rather than being backlogged with maintaining existing infrastructure.In this project, I made Ansible playbooks & Bash scripts that automate the setup of my development environment & deployment environments (EC2, docker images etc.)').should('be.visible')
  })
});
