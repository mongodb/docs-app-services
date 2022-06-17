// :snippet-start: test-with-mocking
const greet = require("./helloWithValue");

// :snippet-start: mocking-context
beforeEach(() => {
  global.context = {
    values: {
      get: (val) => {
        const valsMap = {
          greeting: "magnificent morning",
        };
        return valsMap[val];
      },
    },
  };
});

afterEach(() => {
  delete global.context;
});
// :snippet-end:

test("should greet with value", () => {
  const greeting = greet();
  expect(greeting).toBe("hello magnificent morning");
});
// :snippet-end:
