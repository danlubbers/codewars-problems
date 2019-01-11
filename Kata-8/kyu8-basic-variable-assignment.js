// https://www.codewars.com/kata/basic-variable-assignment

// This code should store "codewa.rs" as a variable called "name" but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;
console.log(name)

// This is how you get it to pass
// describe("Solution", function(){
//     it("should test for something", function(){
//       Test.assertEquals("codewa.rs", "codewa.rs", "This is just an example of how you can write your own TDD tests");
//     });
//   });