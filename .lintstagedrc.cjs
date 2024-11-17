
module.exports = {
  '*.{js,ts,tsx,json,jsx,scss,css}': [
    "prettier --write '**/*.{js,jsx,ts,tsx,scss,css,json}'",
    "eslint",
    'vitest related --run',
  ],
};
