import { Projects } from '../shared/projects';

test('skills data is correct', () => {
  expect(Projects).toHaveLength(3);
  expect(Projects.map((skill) => skill.title)).toEqual([
    'My Website',
    'Airbnb clone - full stack clone of Airbnb',
    'Automation',
  ]);
});

for (let i = 0; i < Projects.length; i += 1) {
  test(`data[${i}] should have keys id, text & src`, () => {
    expect(Projects[i]).toHaveProperty('id');
    expect(Projects[i]).toHaveProperty('title');
    expect(Projects[i]).toHaveProperty('description');
    expect(Projects[i]).toHaveProperty('githubUrl');
    expect(Projects[i]).toHaveProperty('tech');
  });
}
