const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
    .select('*')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('cars')
    .where({ id })
    .first()
}

const create = async (car) => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert( car )
  return getById( id )
    // .select('*')
}


module.exports = {
  getAll,
  getById,
  create,
}