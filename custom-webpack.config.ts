import type { Configuration } from 'webpack';

// module.exports = {
//   entry: { background: 'src/background.ts' },
// } as Configuration;

module.exports = {
  entry: { background: { import: 'src/background.ts', runtime: false } },
} as Configuration;