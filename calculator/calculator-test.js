it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 15000,
    years: 8,
    rate: 5.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual("195.66");
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 123454,
    years: 8,
    rate: 5.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual("1610.37");
});

it("should handle insanely high interest rates", function () {
  const values = {
    amount: 123000,
    years: 8,
    rate: 99,
  };
  expect(calculateMonthlyPayment(values)).toEqual("10152.53");
});

it("should handle low interest rates", function () {
  const values = {
    amount: 123000,
    years: 8,
    rate: 0.0001,
  };
  expect(calculateMonthlyPayment(values)).toEqual("1281.26");
});
/// etc
