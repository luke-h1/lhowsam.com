  
/* eslint-disable */
import NavData from '../../data/nav.json';


test('Navbar data is correct', () => { 
  expect(NavData).toMatchSnapshot();
  expect(NavData).toHaveLength(5);
  expect(NavData.map((i) => i.title)).toEqual([
    'Home',
    'About',
    'Blog',
    'Projects',
    'Contact'

  ]); 
}); 

for (let i = 0; i < NavData.length; i += 1){
  test('NavData[${i}] should have keys id, title & slug', () => { 
    expect(NavData[i]).toHaveProperty('id');
    expect(NavData[i]).toHaveProperty('title');
    expect(NavData[i]).toHaveProperty('slug');

  })
}

test('NavData returns Contact as last item', () => { 
  const Item1 = NavData[0];
  const Item2 = NavData[1];
  const Item3 = NavData[2];
  const Item4 = NavData[3];
  const Item5 = NavData[4];
  const name = jest.fn((currentName) => currentName.title);
  name(Item1); // home 
  name(Item2); // about 
  name(Item3); // blog 
  name(Item4); // projects
  name(Item5); // contact
  expect(name).toHaveLastReturnedWith('Contact')
})