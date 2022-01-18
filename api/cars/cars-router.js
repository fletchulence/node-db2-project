// DO YOUR MAGIC
const router = require('express').Router()

const Car = require('./cars-model')

const {
   checkCarId,
   checkCarPayload,
   checkVinNumberValid,
   checkVinNumberUnique,
} = require('./cars-middleware')

router.get('/', async (req, res, next)=>{
   try{
      res.json( await Car.getAll() ) 
   }catch(err){
      next(err)
   }
})

router.get('/:id', checkCarId, (req, res, next)=>{
   try{
      res.json( req.car ) 
   }catch(err){
      next(err)
   }
});

router.post('/', checkCarPayload, async (req, res, next)=>{
   const newCar = await Car.create( req.body )
   try{
      res.json( newCar )
   } catch(err){
      next(err)
   }
})

module.exports = router