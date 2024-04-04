
const getImageUrl = (name) => new URL(`../assets/movie-covers/${name}`,import.meta.url).href;

export{getImageUrl};