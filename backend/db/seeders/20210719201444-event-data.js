'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        hostId: 1,
        venueId: 1,
        categoryId: 1,
        name: '12th Planet at Stereo Live Houston',
        date: '2021-08-07',
        start_time: '21:00:00',
        end_time: '2:00:00',
        description: '12th Planet is coming to Stereo Live in August. No cover till 10pm. 21 and up.',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/12th+planet.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 2,
        venueId: 2,
        categoryId: 2,
        name: 'Blizzcon',
        date: '2021-08-14',
        start_time: '12:00:00',
        end_time: '22:00:00',
        description: 'BlizzCon is an annual gaming convention held by Blizzard Entertainment to promote its major franchises including Warcraft, StarCraft, Diablo, Hearthstone, Heroes of the Storm, and Overwatch.',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/photodump/blizzcon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 3,
        venueId: 3,
        categoryId: 3,
        name: 'Oyster Festival',
        date: '2021-10-10',
        start_time: '12:00:00',
        end_time: '22:00:00',
        description: 'The oyster festival showcases the renowned Sydney Rock Oysters. The multi-award winning event includes entertainment for young and old, oyster tasting, cooking demonstrations, shucking competitions, bars and music. ',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/photodump/oyster-festival.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 1,
        venueId: 4,
        categoryId: 4,
        name: 'Bridgeland Community Run/Walk for Heroes',
        date: '2021-10-16',
        start_time: '13:00:00',
        end_time: '18:00:00',
        description: 'Join us for the Bridgeland Community Fun Run/Walk for Heroes on Saturday! There will be 1st, 2nd, and 3rd place trophies for the 5k & 10K race winners!',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/photodump/bridgeland+community',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 2,
        venueId: 5,
        categoryId: 5,
        name: 'Houston Super Real Estate Social',
        date: '2021-8-28',
        start_time: '17:30:00',
        end_time: '19:30:00',
        description: 'This event is your perfect opportunity to meet other agents and investors in the Houston area and grow your personal network. Join us, our sponsors, and other real estate professionals at Heights House Hotel for a couple of FREE drinks and great networking! Bring your business cards!',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/photodump/real+estate+social',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 3,
        venueId: 6,
        categoryId: 1,
        name: 'Coachella 2022',
        date: '2022-04-15',
        start_time: '9:00:00',
        end_time: '2:00:00',
        description: 'The Coachella Valley Music and Arts Festival is an annual music and arts festival held at the Empire Polo Club in Indio, California, in the Coachella Valley in the Colorado Desert.',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/photodump/coachella-music-festival.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 1,
        venueId: 7,
        categoryId: 2,
        name: 'Anime Matsuri',
        date: '2021-10-08',
        start_time: '11:00:00',
        end_time: '22:00:00',
        description: 'Anime fans rejoice as you hear about an exciting, fun anime convention in Houston, Texas. Join us for a rip-rolling heckofa good time weekend in the winter. We\'ve got three days of fun and cosplay ready to go for you!',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/photodump/anime+matursi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 2,
        venueId: 8,
        categoryId: 3,
        name: 'Uchi\'s Sushi for All',
        date: '2021-11-14',
        start_time: '10:00:00',
        end_time: '17:00:00',
        description: 'Come join Uchi Houston for its annual Sushi for All event. Enjoy our 12 course tasting menu for one low price!',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/sushi.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 3,
        venueId: 9,
        categoryId: 1,
        name: 'Ultra Music Festival 2022',
        date: '2022-03-25',
        start_time: '9:00:00',
        end_time: '2:00:00',
        description: 'Ultra Music Festival is an annual electronic music festival that takes place during March in Miami, Florida.',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/photodump/ultra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 1,
        venueId: 3,
        categoryId: 3,
        name: 'Otaku Food Festival',
        date: '2021-07-31',
        start_time: '17:00:00',
        end_time: '22:00:00',
        description: 'Join us for this exciting debut event celebrating otaku culture and street food! We will have a variety of vendors, cosplay contest, parade and itasha show! The event is free. Put on your best cosplay attire and enjoy this new experience!',
        image: 'https://photodumpeventsright.s3.us-east-2.amazonaws.com/photodump/otaku+food',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Events', null, {});
    */
    return queryInterface.bulkDelete('Events', null, {});
  }
};
