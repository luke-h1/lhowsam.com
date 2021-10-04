import { skills } from '../data/skills';

test('skills title is correct', () => {
  expect(skills.map((skill) => skill.title)).toEqual([
    'Frontend',
    'Backend',
    'Other',
    'Testing',
  ]);
});

for (let i = 0; i < skills.length; i += 1) {
  test(`data[${i}] should have properties title and items`, () => {
    expect(skills[i]).toHaveProperty('title');
    expect(skills[i]).toHaveProperty('items');
  });
}
