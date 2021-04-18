import { Links } from '../components/Nav/Links';

test('Links data is correct', () => {
  expect(Links).toHaveLength(4);
  expect(Links.map((l) => l.name)).toEqual([
    'Home',
    'About',
    'Projects',
    'Blog',
  ]);
});

for (let i = 0; i < Links.length; i += 1) {
  test(`Link - [${i}] should have keys id, name & slug`, () => {
    expect(Links[i]).toHaveProperty('id');
    expect(Links[i]).toHaveProperty('name');
    expect(Links[i]).toHaveProperty('slug');
  });
}

test('Links returns with blog as last item', () => {
  const Link1 = Links[0]; // Home
  const Link2 = Links[1]; // About
  const Link3 = Links[2]; // Projects
  const Link4 = Links[3]; // Blog
  const i = jest.fn((l) => l.name);
  i(Link1);
  i(Link2);
  i(Link3);
  i(Link4);

  expect(i).toHaveLastReturnedWith('Blog');
});
