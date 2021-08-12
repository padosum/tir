const fs = require('fs')
const path = require('path')
const md = require('./markdown')

function isDir(filename) {
  return fs.statSync(filename).isDirectory()
}

function findFiles(source) {
  let fileArr = source
    .filter(filename => {
      if (filename.startsWith('docs/img')) {
        return false
      }
      return true
    })
    .map(filename => {
      if (isDir(filename)) {
        const subFiles = fs
          .readdirSync(filename)
          .map(file => path.join(filename, file))

        return findFiles(subFiles)
      }
      return filename
    })

  return fileArr.join(',').split(',')
}

function readMdFile(filePath) {
  const fileContent = fs.readFileSync(path.join(process.cwd(), filePath))
  return md(fileContent)
}

module.exports = function generate(source) {
  source = Array.isArray(source) ? source : [source]

  const filePaths = findFiles(source)
  let data = []
  filePaths.forEach(elem => {
    if (elem.endsWith('.md')) {
      let mdfile = readMdFile(elem)
      if (!mdfile) return
      let mdfilename = path.basename(elem, '.md')
      data.push({
        ...mdfile,
        filepath: path.join(process.cwd(), elem),
        filename: mdfilename,
        category: path.dirname(elem).substr(5),
      })
    }
  })
  sortData('meta.publishDate', data)
  return data
}

const sortData = function (prop, arr) {
  prop = prop.split('.')
  var len = prop.length

  arr.sort(function (a, b) {
    var i = 0
    while (i < len) {
      a = a[prop[i]]
      b = b[prop[i]]
      i++
    }
    if (a > b) {
      return -1
    } else if (a < b) {
      return 1
    } else {
      return 0
    }
  })
  return arr
}
