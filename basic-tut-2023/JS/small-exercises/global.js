function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y); //output :: 1 'undefined' 'number'

console.log(0.1 + 0.2 === 0.3); // outpu:: false  {0.1+0.2 = 0.3000000000000004}
console.log(0.1 + 0.3 === 0.4); // output true {0.1+0.3 = 0.4}
