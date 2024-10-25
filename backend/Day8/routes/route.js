const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  
  router.get('/about', (req, res) => {
      res.send('Hello About!')
    })
  
    router.post('/contact', (req, res) => {
      res.send('Hello Contact!')
    })  
  
    router.get('/data',(req,res) => {
      res.json({ 
          Mydata:data
      })
    })

    module.exports = router