
let contCounter = 0
let store = new Object ()


module.exports = {
  getResults(req, res) {
  	console.log (store)
    res.status(200).send(store)
  },
  flushStore(req, res) {
    req.length = 0
    res.status(201).send(req.store)
  },
  addTimestamp(req, res) {
  	console.log (req.body)
    store[++contCounter] = req.body.timestamp
    console.log (store)
    res.status(200).send("Done")  
  }
}

