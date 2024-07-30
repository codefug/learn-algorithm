function createReactiveObject(target, callback) {
  const proxy = new Proxy(target, {
    set(obj, prop, value) {
      if (value !== obj[prop]) {
        obj[prop] = value;
        callback(`${prop} changed to ${value}`);
      }
      return true;
    },
  });
  return proxy;
}
const a = { 형규: "솔로" };
const b = createReactiveObject(a, console.log);
b["형규"] = "커플";
b["형규"] = "솔로";
// 형규 changed to 커플
