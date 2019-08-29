import generate from "@babel/generator";

const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
   const result = add(3, 4);
   expect(result).toBe(7);
});

test('should generate greeting from name!', () => {
   const result = generateGreeting('Nathan');
   expect(result).toBe('Hello Nathan!');
});

test('should generate greeting for no name', () => {
   const result = generateGreeting();
   expect(result).toBe('Hello Anonymous!');
});