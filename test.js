var monitorTx = require("./src")

monitorTx.init({
  expression: "*/10 * * * * *",       //every 10 s
  mineCallback: (err, txData) => {
    console.log("_____________-callback", err, txData)
  },
  confirmCallback: (err, txData) => {
    console.log("_____________-finishCallback", err, txData)
  }
})

// setTimeout(() => {
//   console.log("___________-add tx")
//   monitorTx.addTx({
//     hash: "0xd910078d3c2630acfdf15c0f72b09d0808639fcc5323ea6fe054e9444f90525d",
//     amount: '0.7653',
//     symbol: 'KNC'
//   })
// }, 5000)



setTimeout(() => {
  console.log("___________-add tx")
  monitorTx.addTx({
    hash: "0x255b5b767f1fd753ec624613b8ca74de5a19edc69a92546db224eddb93620270",
    amount: '0.7653',
    symbol: 'KNC'
  })
}, 6000)