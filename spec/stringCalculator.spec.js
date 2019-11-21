/*
String Calculator Specs
Wilfred Ratala
15 November 2019
*/

const StringCalculator = require("../src/stringCalculator.js")
const calculator = new StringCalculator();

// Outputs zero if string is empty
describe("String", () => {
    it("1 Should not be empty", () => {
        expect(calculator.add("")).toEqual(0);
    })

    //Returns the same value if string has one input
    it("2 Should return same value if string has one input", () => {
        expect(calculator.add("1")).toBe(1);

    })

    //Returns the sum of two numbers
    it("3 Should return sum of two numbers", () => {
        expect(calculator.add("2,2")).toEqual(4);
    });

    //Returns the sum of multiple numbers
    it("4 Should return sum of multiple numbers", () => {
        expect(calculator.add("2,2,2")).toEqual(6);
    });

    // Returns the sum of multiple numbers
    it("5 Should allow new lines between numbers ", () => {
        expect(calculator.add("1\n2,3")).toEqual(6);
    });

    // Returns the sum of multiple numbers
    it("6 Should not allow any negative numbers ", () => {
        expect(() => {
            calculator.add('-1, -2');
        }).toThrowError('Negatives not allowed: -1 -2 ');
    });

    //Returns the sum of delimiters
    it("7 Should allow delimiters ", () => {
        expect(calculator.add("//[***]\n1***2***3")).toEqual(6);
    });

    //Returns the sum of multiple delimiters
    it("8 Should allow multiple delimiters ", () => {
        expect(calculator.add("//[*][%]\n1*2%3")).toEqual(6);
    });
});