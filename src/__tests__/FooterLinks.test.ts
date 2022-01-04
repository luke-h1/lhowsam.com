import { FooterLinks } from '../data/FooterLinks';

describe('Footer links', () => {
  test('footer data is correct', () => {
    expect(FooterLinks).toHaveLength(3);

    expect(FooterLinks.map(link => link.title)).toEqual([
      'Email',
      'Github',
      'LinkedIn',
    ]);
    expect(FooterLinks.map(link => link.href)).toEqual([
      'mailto:luke.howsam@yahoo.com',
      'https://github.com/luke-h1',
      'https://www.linkedin.com/in/lukehowsam',
    ]);
  });
  for (let i = 0; i < FooterLinks.length; i+= 1) {
    test(`data[${i}] should have keys id, href & title`, () => {
      expect(FooterLinks[i]).toHaveProperty('id')
      expect(FooterLinks[i]).toHaveProperty('href')
      expect(FooterLinks[i]).toHaveProperty('title')
    })
  }
});
