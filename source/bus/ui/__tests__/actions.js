import { uiActions } from "./../actions";

describe("ui actions: ", () => {
  test("fillProfile", () => {
    expect(uiActions.startFetching()).toMatchInlineSnapshot(`
Object {
  "type": "START_FETCHING",
}
`);
  });
  test("stopFetching", () => {
    expect(uiActions.stopFetching()).toMatchInlineSnapshot(`
Object {
  "type": "STOP_FETCHING",
}
`);
  });
  test("setOnlineState", () => {
    expect(uiActions.setOnlineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_ONLINE_STATE",
}
`);
  });
  test("setOfflineState", () => {
    expect(uiActions.setOfflineState()).toMatchInlineSnapshot(`
Object {
  "type": "SET_OFFLINE_STATE",
}
`);
  });
  test("emitError", () => {
    expect(uiActions.emitError()).toMatchInlineSnapshot(`
Object {
  "error": true,
  "meta": null,
  "payload": undefined,
  "type": "EMIT_ERROR",
}
`);
  });
});
