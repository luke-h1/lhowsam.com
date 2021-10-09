import projects from '../data/projects';
import { Project } from '../data/projects';

test('skills data is correct', () => {
  expect(projects).toHaveLength(3);
  expect(projects.map((p: Project) => p.title)).toEqual([
    'My Website',
    'tmtodos.me - full stack todo app',
    'Automation',
  ]);
});

for (let i = 0; i < projects.length; i += 1) {
  test(`data[${i}] should have keys id, text & src`, () => {
    expect(projects[i]).toHaveProperty('id');
    expect(projects[i]).toHaveProperty('title');
    expect(projects[i]).toHaveProperty('description');
    expect(projects[i]).toHaveProperty('githubUrl');
    expect(projects[i]).toHaveProperty('tech');
  });
}
