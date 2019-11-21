/*
String Calculator js
Wilfred Ratala
15 November 2019
*/

module.exports = class StringCalculator {
    constructor() {
            this.regex = /\D/;
        }
        // Checks for negative numbers
    negative(string) {
        let str = '';

        for (let i = 0; i < string.length; i++) {
            if (string[i] == '-') {
                str += '-' + string[i + 1] + ' ';
            }
        }

        return str;
    }
    add(string) {

        let sum = 0;
        //Split chars and takes in numbers
        let numbs = string.split(this.regex);

        //Returns 0 if string is empty
        if (string == '') {
            return 0;
        }

        //takes in negative numbers
        let negativeNums = this.negative(string);

        // Checks if any negative numbers are present
        if (negativeNums != '') {
            throw new Error('Negatives not allowed: ' + negativeNums);
        }
        // returns the sum
        numbs.forEach(n => {
            let num = parseInt(n);
            if (n) {
                // checks if number is greater than 1000
                if (n > 1000) {
                    n = 0;
                }
                sum += num;
            }

        });

        return sum;
    }
}