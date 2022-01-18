exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', tbl =>{
    tbl.increments('id')
    tbl.string('vin').notNullable().unique()
    tbl.string('make').notNullable()
    tbl.string('model').notNullable()
    tbl.integer('mileage').notNullable()
    tbl.string('title')
    tbl.string('transmission')
  })
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};
