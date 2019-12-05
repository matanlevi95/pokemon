const Fs = require('fs')

function writeToJson(path, data) {
  const json = JSON.stringify(data)
  Fs.writeFile(path, json, (err) => {
    if (err) {
      console.error(err)

    }
    else {
      console.log('Saved data to file.')
    }

  })
}

module.exports = writeToJson