export default function toCamelCase(str: string) {
  return str
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0) + word.slice(1);
    })
    .join(''); // Join all the words back together
}
