const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@features': path.resolve(__dirname, 'src/features'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages')
    }
  }
};
