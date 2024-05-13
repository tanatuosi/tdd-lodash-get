import { get } from ".";

it("基础测试", () => {
  const demo = { a: 1 };
  expect(get(demo, "a")).toBe(1);
});

it("基础测试2", () => {
  const demo = { a: 2 };
  expect(get(demo, "a")).toBe(2);
});

it("基础测试3", () => {
  const demo = { a: 2 };
  expect(get(demo, "c")).toBe(undefined);
});

it("基础测试4", () => {
  const demo = { a: { c: 3 } };
  expect(get(demo, "a.c")).toBe(3);
});

it("基础测试5", () => {
  const demo = { a: [{ b: { c: 3 } }] };
  expect(get(demo, "a[0].b.c")).toBe(3);
});

it("基础测试6", () => {
  const demo = { a: [{ b: { c: 3 } }] };
  expect(get(demo, "a[0].e.d")).toBe(undefined);
});

it("default测试1", () => {
  const demo = { a: [{ b: { c: 3 } }] };
  expect(get(demo, "a[0].e.d", "test1")).toBe("test1");
});

it("数组测试1", () => {
  const demo = { a: [{ b: { c: 3 } }] };
  expect(get(demo, ["a", "0", "b", "c"], "test1")).toBe(3);
});

it("数组测试3", () => {
  const demo = { a: [{ b: { c: 3 } }] };
  expect(get(demo, ["a", "0", "b", "c"], "test1")).toBe(3);
});

it("数组测试2", () => {
  const demo = { a: [{ b: { c: 3 } }] };
  expect(get(demo, "['aff', '0sdf', '//b', 'c']", "test1")).toBe("test1");
});
