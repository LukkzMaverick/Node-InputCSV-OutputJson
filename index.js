const fs = require ('fs')
const path = require ('path')
const csv = require('csvtojson')
var inputFile = path.basename('/input.csv');
async function csvParser(filename){
    let jsonfileName = 'output.json'
    let filePath = path.join(__dirname, filename)
    const rawData = fs.readFile(filePath, {encoding:'utf-8'}, (err,data)=>{
      if(err) return console.error(err)
    })
    const jsonArray = await csv().fromFile(filePath)
    let result = JSON.stringify(jsonArray, null, 2)
  
    fs.writeFile(jsonfileName,result, (error)=>{
      if(error) return console.error(error)
    })
  }

  csvParser(inputFile)