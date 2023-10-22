module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = new Set();
  const closingBrackets = new Set();
  const bracketPairs = {};
  for (const [open, close] of bracketsConfig) {
    openingBrackets.add(open);
    closingBrackets.add(close);
    bracketPairs[close] = open;
  }
  for (const bracket of str) {
    if (openingBrackets.has(bracket)) {
      if (stack.length > 0 && stack[stack.length - 1] === bracket) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else if (closingBrackets.has(bracket)) {
      if (stack.length === 0 || stack.pop() !== bracketPairs[bracket]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
