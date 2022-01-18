// STRETCH

exports.seed = function (knex) {
   return knex('cars').truncate()
   .then(function () {
      return knex('cars').insert([
          {
            //  car_id: 1,
             vin: '1GCDC14H5DS161081',
             make: '1983 Chevrolet',
             model: '10 series',
             mileage: 104000,
             title: 'C K',
             transmission: 'auto'
          },
          {
            //  id: 2,
             vin: 'JH4KA7556PC018027',
             make: '1993 Acura',
             model: 'Legend',
             mileage: 100900,
             title: 'C K',
             transmission: 'auto'
          },
          {
            //  id: 3,
             vin: '3G4AG54N9NS614902',
             make: '1992 Buick',
             model: 'Century',
             mileage: 210000,
             transmission: 'auto'
          },
       ]);
     });
 };