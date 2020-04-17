const ps = require("ps-node")
const exec = require("child_process").exec
const orekiDir = process.argv[2]

if (process.argv.length < 3 || orekiDir === "") {
  console.log("折木さん、どこですか？")
  process.exit(0)
}

setInterval(function() {
  ps.lookup({
    command: "node"
  }, function(err, list) {
    const orekiList = list.filter(function(p) {
      for (let i in p.arguments) {
        if (p.arguments[i].indexOf("oreki") != -1) {
          return true
        }
      }
      return false
    })
    if (orekiList.length === 0) {
      console.log("私、気になります！")
      exec(`cd ${orekiDir} && oreki`, function(err, stdout, stderr) {})
    }
  })
}, 2000)
