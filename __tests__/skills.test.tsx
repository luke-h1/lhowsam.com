import { Skills } from '../data/skills';

test('Skills data is correct', () => {
  expect(Skills).toHaveLength(6);
  expect(Skills.map((skill) => skill.name)).toEqual([
    'React',
    'Express',
    'Node',
    'Automated Testing',
    'Manual Testing',
    'Git / Github',
  ]);
});

for (let i = 0; i < Skills.length; i += 1) {
  test(`data[${i}] should have keys id, name & slug`, () => {
    expect(Skills[i]).toHaveProperty('id');
    expect(Skills[i]).toHaveProperty('name');
  });
}

test('data returns Git / Github as last item', () => {
  const Skill1 = Skills[0];
  const Skill2 = Skills[1];
  const Skill3 = Skills[2];
  const Skill4 = Skills[3];
  const Skill5 = Skills[4];
  const Skill6 = Skills[5];

  const i = jest.fn((skillName) => skillName.name);
  i(Skill1); // React
  i(Skill2); // Express
  i(Skill3); // Node
  i(Skill4); // Automated Testing
  i(Skill5); // Manual Testing
  i(Skill6); // Git / Github
  expect(i).toHaveLastReturnedWith('Git / Github');
});
