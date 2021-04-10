describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should update the Servertable on updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();

    expect(Boolean(document.getElementById("server" + serverId))).toBe(true);
  });

  afterEach(function () {
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
