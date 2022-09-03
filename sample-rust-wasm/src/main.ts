// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  const module = await import('../pkg')
  module.hello_message();
  let result = module.test_json(JSON.stringify({bar: {test1: "test2"}}))
  console.log(result);
  console.log(JSON.parse(result));
})()

export {}
