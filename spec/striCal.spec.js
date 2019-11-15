/*
String Calculator Specs
Wilfred Ratala
15 November 2019
*/

let StringCalculator = require("../src/striCal.js")
let calculator = class StringCalculator {};

// Outputs zero if string is empty
describe("String", () => {
    it("Should not be empty", () => {
            expect(calculator("")).toEqual(0);
        })
        //beforeEach(() => {  })

    //Returns the same value if string has one input
    it("Should return same value if string has one input", () => {
        expect(calculator.add("1")).toEqual(1);
    })

    //Returns the sum of two numbers
    it("Should return sum of two numbers", () => {
        expect(StringCalculator.add("2, 2")).toEqual(4);
    });

    //Returns the sum of multiple numbers
    it("Should return sum of two numbers", () => {
        expect(calculator.add("2, 2, 2")).toEqual(6);
    });

    // Returns the sum of multiple numbers
    it("Should allow new lines between numbers ", () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    // Returns the sum of multiple numbers
    it("Should not allow any negative numbers ", () => {
        expect(calculator.add("-")).toBe(null);
    });

    //Returns the sum of delimiters
    it("Should allow delimiters ", () => {
        expect(calculator.add("//[*]\n1*2%3")).toBe(6);
    });

    //Returns the sum of multiple delimiters
    it("Should allow multiple delimiters ", () => {
        expect(calculator.add("//[*]\n1*2%3")).toBe(6);
    });
});