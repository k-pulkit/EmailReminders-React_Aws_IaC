module.exports.definition = (serverless) => {
    const fsPromises = require('fs').promises
    return fsPromises.readFile('definition.json', 'utf-8')
}