import { Skills } from '../data/skills';

test('Skills data is correct', () => {
  expect(Skills).toHaveLength(13);
  expect(Skills.map((skill) => skill.name)).toEqual([
    'React',
    'Next',
    'Gatsby',
    'Basic Typescript',
    'Intermediate Javascript',
    'Basic Python',
    'Express',
    'Node',
    'Automated Testing',
    'Manual Testing',
    'Git / Github',
    'Styled components',
    'Tailwind css',
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
  const Skill9 = Skills[8];
  const Skill10 = Skills[9];
  const Skill11 = Skills[10];
  const Skill12 = Skills[11];
  const Skill13 = Skills[12];

  const i = jest.fn((s) => s.name);
  i(Skill1); // Next
  i(Skill2); // Gatsby
  i(Skill3); // Basic Typescript
  i(Skill4); // Intermediate Javascript
  i(Skill5); // Basic Python
  i(Skill6); // Basic Grahpql
  i(Skill7); // Express
  i(Skill8); // Node
  i(Skill9); // Automated Testing
  i(Skill10); // Manual Testing
  i(Skill11); // Git / Github
  i(Skill12); // Styled components
  i(Skill13); // Tailwind css

  expect(i).toHaveLastReturnedWith('Tailwind css');
});
