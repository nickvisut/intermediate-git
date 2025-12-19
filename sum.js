/* sums two numbers */
function sum(a, b) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);

  // use intermediate variable to store the result
  const result = a * b;
  console.log(`result: ${result}`;
  return result;
}

export default sum;