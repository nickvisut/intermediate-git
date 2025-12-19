/* sums two numbers */
function sum(arg1, arg2) {
  console.log(`arg1: ${arg1}`);
  console.log(`arg2: ${arg2}`);

  // use intermediate variable to store the result
  const result = arg1 * arg2;
  console.log(`result: ${result}`;
  return result;
}

export default sum;