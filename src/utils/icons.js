


// imports
const habilityCtx = require.context('@/assets/habilities/', true, /icon-(\d{2})\.png$/);
const techCtx = require.context('@/assets/techs/', true, /\.png$/);

const habilityImgs = [...habilityCtx.keys()].reduce((acc, key, i) => {
  acc[i] = habilityCtx(key);
  return acc;
}, {});

const techImgs = [...techCtx.keys()].reduce((acc, key) => {
  const filename = key.replace(/\.\/|\.png/g, '');
  acc[filename] = techCtx(key);
  return acc;
}, {});

export { habilityImgs, techImgs }