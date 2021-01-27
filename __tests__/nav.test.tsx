/* eslint-disable */
import NavData from '../components/Nav/nav.json';


test('Navbar data is correct', () => { 
  expect(NavData).toHaveLength(4);
  expect(NavData.map((i) => i.name)).toEqual([
    'Home',
    'About',
    'Projects',
    'Blog',

  ]); 
}); 

for (let i = 0; i < NavData.length; i += 1){
  test('NavData[${i}] should have keys id, name & slug', () => { 
    expect(NavData[i]).toHaveProperty('id');
    expect(NavData[i]).toHaveProperty('name');
    expect(NavData[i]).toHaveProperty('slug');

  })
}

test('NavData returns Contact as last item', () => { 
  const Item1 = NavData[0];
  const Item2 = NavData[1];
  const Item3 = NavData[2];
  const Item4 = NavData[3];
  const Item5 = NavData[4];
  const i = jest.fn((currentName) => currentName.name);
  i(Item1); // home 
  i(Item2); // about 
  i(Item3); // Projects 
  i(Item4); // Blog
  expect(i).toHaveLastReturnedWith('Blog')
})