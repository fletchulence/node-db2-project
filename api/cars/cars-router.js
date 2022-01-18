// DO YOUR MAGIC
const router = require('express').Router()

const Car = require('./cars-model')

router.get('/', async (req, res, next)=>{
   try{
      res.json( await Car.getAll() ) 
   }catch(err){
      next(err)
   }
})


module.exports = router