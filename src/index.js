module.exports = function toReadable (number) {

    numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    }

    result = ""

    if (Math.floor(number / 10) == 0) {
        result += numbers[number]
    } else if (Math.floor(number / 100) == 0) {
        let dec = Math.floor(number / 10)

        if (dec == 1) {
            result += numbers[number]
        } else {
            result += numbers[dec * 10]
            result += " "
            if (number % 10 != 0) {
                result += numbers[number % 10]
            }
        }
    } else if (Math.floor(number / 1000) == 0) {
        let hun = Math.floor(number / 100)
        let dec = Math.floor((number / 10) % 10)

        result += (numbers[hun] + " " + numbers[100] + " ")

        if (dec == 0) {
            if (number % 10 != 0) {
                result += numbers[number % 10]
            }
        } else if (dec == 1) {
            result += numbers[number % 100]
        } else {
            result += (numbers[dec * 10] + " ")
            result += number % 10 != 0 ? numbers[number % 10] : ""
        }
    }

    return result.trim()
}
