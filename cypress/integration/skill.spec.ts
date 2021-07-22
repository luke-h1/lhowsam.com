import { Skills } from '../../src/shared/Skills';


describe('skills', () => { 
    before(() => { 
        cy.visit('/')
    })
})
it('should render skills correctly', () => { 
    Skills.map((skill) => { 
        cy.contains(skill.id)
        cy.contains(skill.src)
        cy.contains(skill.text)
    })
})
