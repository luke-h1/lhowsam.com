// create a hook to inject peer deps for all packages


const readPackage = (pkg, context) => {
  if (pkg.peerDependencies) {
    const peerDeps = Object.keys(pkg.peerDependencies)
    if (peerDeps.length) {
      const { dependencies = {} } = pkg
      peerDeps.forEach(dep => {
        if (!dependencies[dep]) {
          dependencies[dep] = pkg.peerDependencies[dep]
        }
      })
      pkg.dependencies = dependencies
    }
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}