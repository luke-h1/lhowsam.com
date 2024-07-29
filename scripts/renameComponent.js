const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components');

function updateImportPaths(searchDir, componentName) {
  const files = fs.readdirSync(searchDir);

  files.forEach(file => {
    const filePath = path.join(searchDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      updateImportPaths(filePath, componentName);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const oldImportPath = `components/${componentName}/${componentName}`;
      const newImportPath = `components/${componentName}/index`;

      if (content.includes(oldImportPath)) {
        content = content.replace(
          new RegExp(oldImportPath, 'g'),
          newImportPath,
        );
        fs.writeFileSync(filePath, content, 'utf8');
      }
    }
  });
}

function renameAndReplace() {
  const componentDirs = fs.readdirSync(baseDir);

  componentDirs.forEach(componentName => {
    const componentPath = path.join(baseDir, componentName);
    const filePath = path.join(componentPath, `${componentName}.tsx`);
    const newFilePath = path.join(componentPath, 'index.tsx');

    // Rename {ComponentName}.tsx to index.tsx
    if (fs.existsSync(filePath)) {
      fs.renameSync(filePath, newFilePath);
      // Update import paths in all files
      updateImportPaths(baseDir, componentName);
    }
  });
}

renameAndReplace();
