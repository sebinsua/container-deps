console.log('child');

async function init() {
  const { a } = await import('./a');
  const { b } = await import('./b');
  const { c } = await import('./c');

  a();
  b();
  c();
}

init();
