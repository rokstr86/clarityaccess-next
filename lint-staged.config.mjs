﻿export default {
  "**/*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
  "**/*.{md,css,json}": ["prettier --write"],
  "package.json": ["prettier --write"]
}
