describe("Hello world", function() {
  it ("returns 1 to 100", function() {
    expect(fizzbuzz()
        .split(/\r\n|\r|\n/).length).toEqual(100);
  });
  it ("returns Fizz if divisible by 3 ", () => {
    expect(convertFizzBuzz(3)).toEqual("Fizz");  
  });
  it ("returns Fizz if divisible by 3 ", () => {
    expect(convertFizzBuzz(9)).toEqual("Fizz");  
  });
  it ("returns Buzz if divisible by 5 ", () => {
    expect(convertFizzBuzz(10)).toEqual("Buzz");  
  });
  it ("returns Buzz if divisible by 5 ", () => {
    expect(convertFizzBuzz(20)).toEqual("Buzz");  
  });
  it ("returns FizzBuzz if divisible by 3 and 5 ", () => {
    expect(convertFizzBuzz(30)).toEqual("FizzBuzz");  
  });
});
