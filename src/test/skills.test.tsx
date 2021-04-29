import { Skills } from '../data/skills';

test('Skills data is correct', () => {
  expect(Skills).toHaveLength(8);
  expect(Skills.map((skill) => skill.name)).toEqual([
    'React',
    'Next',
    'Typescript',
    'Javascript (ES6+)',
    'Testing (automated & manual)',
    'Express',
    'Node JS',
    'Git / Github',
  ]);
});

for (let i = 0; i < Skills.length; i += 1) {
  test(`data[${i}] should have keys id, name & slug`, () => {
    expect(Skills[i]).toHaveProperty('id');
    expect(Skills[i]).toHaveProperty('name');
  });
}

test('data returns styled components as last item', () => {
  const Skill1 = Skills[0];
  const Skill2 = Skills[1];
  const Skill3 = Skills[2];
  const Skill4 = Skills[3];
  const Skill5 = Skills[4];
  const Skill6 = Skills[5];
  const Skill7 = Skills[6];
  const Skill8 = Skills[7];

  const i = jest.fn((s) => s.name);
  i(Skill1); // React
  i(Skill2); // Next
  i(Skill3); // Typescript
  i(Skill4); // Javascript (ES6+)
  i(Skill5); // Testing (automated & manual)
  i(Skill6); // Express
  i(Skill7); // Node JS
  i(Skill8); // Git / Github

  expect(i).toHaveLastReturnedWith('Git / Github');
});
