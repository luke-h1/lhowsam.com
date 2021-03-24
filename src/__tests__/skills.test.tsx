import { Skills } from '../data/skills';

test('Skills data is correct', () => {
  expect(Skills).toHaveLength(13);
  expect(Skills.map((skill) => skill.name)).toEqual([
    'React',
    'Next.js',
    'Gatsby',
    'basic Typescript',
    'intermediate Javascript',
    'basic Python',
    'basic GraphQL',
    'Express',
    'Node JS',
    'Automated Testing',
    'Manual Testing',
    'Git / Github',
    'Styled components',

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
  i(Skill1); // React
  i(Skill2); // Next.js
  i(Skill3); // Gatsby
  i(Skill4); // basic typescript
  i(Skill5); // intermediate Javascript
  i(Skill6); // basic Python
  i(Skill7); // basic Grahpql
  i(Skill8); // Express
  i(Skill9); // Node JS
  i(Skill10); // Automated Testing
  i(Skill11); // Manual Testing
  i(Skill12); // Git / Github
  i(Skill13); // Styled components

  expect(i).toHaveLastReturnedWith('Styled components');
});
