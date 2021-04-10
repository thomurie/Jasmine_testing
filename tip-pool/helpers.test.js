describe("Helpers Test (includes setup and tear-down", function () {
  beforeEach(function () {});

  it("Verify that sumPaymentTotal is able to extract the value from an Object", function () {
    allPayments["Test"] = { testObject: 152 };

    expect(sumPaymentTotal("testObject")).toEqual(152);
  });

  it("Handle high and low tip amounts", function () {
    expect(calculateTipPercent(100, 200)).toEqual(200);
    expect(calculateTipPercent(100, 0)).toEqual(0);
  });

  it("Handle high and low bill amounts", function () {
    expect(calculateTipPercent(10000, 10)).toEqual(0);
    expect(calculateTipPercent(1, 10)).toEqual(1000);
  });

  it("Verify that apended tds have the correct values", function () {
    const newTr = document.createElement("tr");
    newTr.setAttribute("id", "Test");
    appendTd(newTr, "Test");
    serverTbody.append(newTr);
    const testElement = document.getElementById("Test").innerText;
    expect(testElement).toBe("Test");
  });

  afterEach(function () {
    serverTbody.innerHTML = "";
    allPayments = {};
  });
});
