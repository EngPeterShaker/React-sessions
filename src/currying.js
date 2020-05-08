function a(a) {
  function b(b) {
    function c(c){
      return a * b * c;
    }
    return c;
  }
  return b;
}
console.log(a(33)(22)(2)) // a* b *c

/////////////////////////////////////////////////////////////////////////////////////////////
//currying
function curry(f) { // curry(f) does the currying transform
  //f = sum
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };

}

// const curry=(dispatchFn)=>(a) =>b =>dispatchFn(a,b)


// usage
function sum(a, b) {
  return a + b;
}



let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3