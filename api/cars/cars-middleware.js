const Car = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const {id} = req.params
  const dbCar = await Car.getById(id)
  try{
    if ( !dbCar ){
      next({ status: 404, message: `car with id ${id} is not found` })
    } else {
      req.car = dbCar
      next()
    }
  } catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  let missing = []
  const { make, model, vin, mileage } = req.body
  if ( !make || !model || !vin || !mileage ){
    if( !make ){
      missing.push('make')
    } if ( !model ){
      missing.push('model')
    } if ( !vin ){
      missing.push('vin')
      // req.missing = 'vin'
    } if ( !mileage ){
      missing.push( 'mileage' )
    }
    // console.log(missing)
    return next({ status: 400, message: `${missing} is missing`})
  } else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body
  const dbVin = await Car.getByVin(vin)
  try{
    if ( dbVin ){
      // console.log(`dbVin exists`, dbVin)
      next({ status: 400, message: `vin ${dbVin.vin} already exists`})
    } else{
      // console.log(`dbVin dne`, dbVin)
      // req.newVin = dbVin
      next()
    }
  }catch(err){
    next(err)
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  
}


module.exports ={
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
}