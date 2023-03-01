function numberToRoman(number) {
  const placeValues = [1000, 500, 100, 50, 10, 5, 1];
  const romanNumerals = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };
  let current = number;
  let fullRomanNumeral = "";

  while (current > 0) {
    const foundPlaceValueIndex = placeValues.findIndex(
      (placeValue) => placeValue <= current
    );
    // I pulled some of the values we were working with into variables so the condition below doesn't get so lost in all the brackets.
    const foundPlaceValue = placeValues[foundPlaceValueIndex];
    const previousPlaceValue = placeValues[foundPlaceValueIndex - 1];
    const foundRomanNumeral = romanNumerals[foundPlaceValue];
    const previousRomanNumeral = romanNumerals[previousPlaceValue];

    // This condition is where we didn't quite finish. All that was missing was the "1" check and using >= for the comparison instead of ===.
    if (previousPlaceValue && foundPlaceValue.toString()[0] === "1" && current >= previousPlaceValue - foundPlaceValue) {
      current -= previousPlaceValue - foundPlaceValue;
      fullRomanNumeral += foundRomanNumeral + previousRomanNumeral;
    } else {
      current -= foundPlaceValue;
      fullRomanNumeral += foundRomanNumeral;
    }
  }
  return fullRomanNumeral;
}

test("should calculates the correct output", () => {
  expect(numberToRoman(8)).toBe("VIII");
  expect(numberToRoman(2021)).toBe("MMXXI");
  expect(numberToRoman(1666)).toBe("MDCLXVI");
  expect(numberToRoman(300)).toBe("CCC");
  expect(numberToRoman(4)).toBe("IV");
  expect(numberToRoman(40)).toBe("XL");
  expect(numberToRoman(43)).toBe("XLIII");
  expect(numberToRoman(1444)).toBe("MCDXLIV");
});
