import toCamelCase from '../toCamelCase';

describe('toCamelCase', () => {
  test('converts string to camel-case', () => {
    const str = 'Hello World';
    const result = toCamelCase(str);
    expect(result).toEqual('HelloWorld');
  });

  test('multiple gaps get converted to camel-case', () => {
    const str = 'AWS Azure Vercel';
    const result = toCamelCase(str);
    expect(result).toEqual('AWSAzureVercel');
  });
});
