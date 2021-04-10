describe("Payments Test (includes setup and tear-down", function () {
  beforeEach(function () {
    billAmtInput.value = 1000;
    tipAmtInput.value = 10;
    const testObject = createCurPayment();
  });

  it("Verify that the correct values are assigned correctly in the object", function () {
    const testObject = createCurPayment();
    const { billAmt, tipAmt } = testObject;

    expect(billAmt).toEqual(billAmtInput.value);
    expect(tipAmt).toEqual(tipAmtInput.value);
  });

  it("Verify that $0 Bills are not processed", function () {
    billAmtInput.value = 0;
    tipAmtInput.value = 0;
    expect(Boolean(createCurPayment())).toBe(false);
  });

  it("Verify the Payment table includes the correct ID and Values", function () {
    const testObject = createCurPayment();
    paymentId = 13;
    appendPaymentTable(testObject);
    const newElement = document.getElementById("payment" + paymentId);
    expect(Boolean(newElement)).toBe(true);
    expect(newElement.innerText.includes(`$${billAmtInput.value}`)).toBe(true);
  });

  it("Expect the sumarry to have 3 places of correct information", function () {
    const testObject = createCurPayment();
    updateSummary();
    const testResults = Boolean(Object.keys(summaryTds).length >= 3);
    expect(testResults).toBe(true);
    expect(summaryTds[1].innerText).toEqual(
      `$${sumPaymentTotal("tipPercent")}`
    );
  });

  it("", function () {
    expect();
  });

  afterEach(function () {
    billAmtInput.value = 0;
    tipAmtInput.value = 0;
    paymentId = 0;
    paymentTbody.innerHTML = "";
  });
});
