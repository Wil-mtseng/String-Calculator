/*
String Calculator js
Wilfred Ratala
15 November 2019
*/
module.export = class StringCalculator {
    constructor() {
        this.regex = /\d{1,}/gm;
        this.negative = (string) => {
                let stri = "";
            }
            // 
        for (let r = 0; r < string.length; r++) {
            if (string[r] === '-' && !isNaN(str[r + 1])) {
                str += string[r + 1] + ";"
            }
            return str;
        };
    }

    add(string) {
        //Returns 0 if string is empty
        let sum = 0;
        let numbs = string.match(regex);
        if (numbs === "") {
            return 0;
        }
        //Converts string to numbers
        for (let w = 0; w < numbs.length; w++) {
            let numbs = parseInt(numbs[w]);

            //ignores numbers greater than 100
            if (numbs > 1000) {
                continue;
            } else {
                return sum += numbs;
            }
        };
        //throws error if string contains a negative value
        try {
            if (str.includes("-")) {
                throw ("No negative " + negative + " permitted");
            };
        } catch (err)

        {}
    }
};