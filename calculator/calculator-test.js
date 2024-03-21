
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount:850000,years:30,rate:6.85})).toEqual('5569.7');
  
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({amount:300000,years:10,rate:5})).toEqual('3181.96');
});

it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({amount:300000,years:10,rate:5})).toBe('3181.96');
  expect(calculateMonthlyPayment({amount:300000,years:10,rate:5})).toBeInstanceOf(String);
  expect(calculateMonthlyPayment({amount:300000,years:10,rate:5})).not.toBeFalsy();
});

it("should return a String result instance", function() {
  // ..
  expect(calculateMonthlyPayment({amount:300000,years:10,rate:5})).toBeInstanceOf(String);
});

it("should return a true value", function() {
  // ..
  expect(calculateMonthlyPayment({amount:300000,years:10,rate:5})).not.toBeFalsy();
});





/// etc


