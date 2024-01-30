const fs = require('fs');
const path = require('path');

let output = '';
const ignoredDirs = ['node_modules', '.git', 'build', 'dist']; // Add any other directories you want to ignore

function displayFileTree(dir, prefix = '') {
  if (ignoredDirs.some(ignoredDir => dir.includes(ignoredDir))) {
    return;
  }

  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (!ignoredDirs.includes(file)) {
      const isLast = index === files.length - 1;
      const prefixCurrent = isLast ? '└── ' : '├── ';
      output += prefix + prefixCurrent + file + '\n';

      if (stat.isDirectory()) {
        const newPrefix = isLast ? prefix + '    ' : prefix + '│   ';
        displayFileTree(filePath, newPrefix);
      }
    }
  });
}

displayFileTree('./'); // Replace './' with your directory path if needed
fs.writeFileSync('fileTree.txt', output);
