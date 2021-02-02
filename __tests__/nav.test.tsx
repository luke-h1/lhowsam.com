/* eslint-disable */
import data from '../components/NavBar/data.json'


test('Navbar data is correct', () => { 
  expect(data).toHaveLength(4);
  expect(data.map((i) => i.name)).toEqual([
    'Home',
    'About',
    'Projects',
    'Blog',

  ]); 
}); 

for (let i = 0; i < data.length; i += 1){
  test('data[${i}] should have keys id, name & slug', () => { 
    expect(data[i]).toHaveProperty('id');
    expect(data[i]).toHaveProperty('name');
    expect(data[i]).toHaveProperty('slug');

  })
}

test('data returns Contact as last item', () => { 
  const Item1 = data[0];
  const Item2 = data[1];
  const Item3 = data[2];
  const Item4 = data[3];
  const Item5 = data[4];
  const i = jest.fn((currentName) => currentName.name);
  i(Item1); // home 
  i(Item2); // about 
  i(Item3); // Projects 
  i(Item4); // Blog
  expect(i).toHaveLastReturnedWith('Blog')
})