// eslint-disable-next-line @typescript-eslint/no-explicit-any
// object (Object): 要检索的对象。
// path (Array|string): 要获取属性的路径。
// [defaultValue] (*): 如果解析值是 undefined ，这值会被返回。

export function get(object: any, path: string | string[], defaultValue?: any) {
  // a[0].b -> a.0.b -> ['a', '0', 'b']
  const replacePath = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)\]/g, ".$1").split(".");
  // const replacePath =  pathArray.replace(/\[(\d+)\]/g, ".$1");
  console.log(replacePath);
  const result = replacePath.reduce((acc: any, key: string) => {
    return acc && acc[key] !== undefined ? acc[key] : undefined;
  }, object);
  return result === undefined ? defaultValue : result;
}

console.log(get({ a: [{ b: { c: 3 } }] }, ["a", "0", "b", "c"], "test1"));
