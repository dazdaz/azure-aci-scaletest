
module.exports = {
  getResults(req, res) {
  	console.log (req.store)
    res.status(200).send(req.store)
  },
  flushStore(req, res) {
    req.store.length = 0
    res.status(201).send(req.store)
  },
  addTimestamp(req, res) {
  	console.log (req.store)
    req.store.push(req.body)
    res.status(200).send(req.store)  
  },
}