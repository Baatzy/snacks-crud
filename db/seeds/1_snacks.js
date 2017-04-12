exports.seed = (knex) => {
  return knex('snacks').del()
    .then(() => {
      return knex('snacks').insert([
        {
          id: 1,
          name: 'Jalapeno Cheetos',
          image_url: 'http://target.scene7.com/is/image/Target/14930861?wid=520&hei=520&fmt=pjpeg',
          review_description: 'Probably the best damn chip ever invented by man. A little spicy, cheesy and garlicky. They are a force to behold.',
          rating: 10
        },
        {
          id: 2,
          name: 'Tim\'s Cascade Jalapeno Chips',
          image_url: 'http://images.costcobusinessdelivery.com/image/media/500-30639__1.jpg',
          review_description: 'Sporting a powerful crunch, zesty seaoning and a formidible spice, these chips bring the bomb feels. We dare you to try having only one!',
          rating: 9
        }
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));"
      )
    })
}
