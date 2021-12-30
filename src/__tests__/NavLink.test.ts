import { NavLinks } from '../data/NavLinks';

test('skills data is correct', () => {
  expect(NavLinks).toHaveLength(4);
  expect(NavLinks.map(link => link.text)).toEqual(['Home', 'About', 'Blog', 'Projects']);
});

for (let i = 0; i < NavLinks.length; i += 1) {
  test(`data[${i}] should have keys id, text & src`, () => {
    expect(NavLinks[i]).toHaveProperty('id');
    expect(NavLinks[i]).toHaveProperty('text');
    expect(NavLinks[i]).toHaveProperty('slug');
  });
}
