exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', tbl =>{
    tbl.increments('car_id')
    tbl.string('car_vin').notNullable().unique()
    tbl.string('car_make').notNullable()
    tbl.string('car_model').notNullable()
    tbl.integer('car_mileage').notNullable()
    tbl.string('car_title')
    tbl.string('car_transmission')
  })
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};
