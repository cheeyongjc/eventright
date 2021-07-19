'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Events',[
    {
      hostId: 1,
      venueId: 1,
      categoryId: 1,
      name: 'DIPLO at RISE',
      date: '2021-08-07',
      start_time: '21:00:00',
      end_time: '2:00:00',
      description: 'Come dance the night away with Diplo!',
      image: 'https://pbs.twimg.com/profile_images/1387862551082373120/iB8QMG48.jpg',
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
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/BlizzCon_logo.svg/1200px-BlizzCon_logo.svg.png',
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
      image: 'https://www.beaufortinn.com/wp-content/uploads/2020/12/oyster-festival.jpg',
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
      image: 'https://www.bridgeland.com/wp-content/uploads/2021/06/BL-Event-VeteransFunRun-2019-1024x683.jpg',
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
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F140541391%2F501599173709%2F1%2Foriginal.20210702-155527?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=54796dc05daa4d3f6639ac0cd1c3dee7',
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
      description: 'The Coachella Valley Music and Arts Festival is an annual music and arts festival held at the Empire Polo Club in Indio, California, in the Coachella Valley in the Colorado Desert. It was co-founded by Paul Tollett and Rick Van Santen in 1999, and is organized by Goldenvoice, a subsidiary of AEG Presents.',
      image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
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
      image: 'https://2020.animematsuri.com/wp-content/uploads/2020/07/2021.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      hostId: 2,
      venueId: 8,
      categoryId: 3,
      name: 'Sushi for All',
      date: '2021-11-14',
      start_time: '10:00:00',
      end_time: '17:00:00',
      description: 'Come join Uchi Houston for its annual Sushi for All event. Enjoy our 12 course tasting menu for one low price!',
      image: 'https://resizer.otstatic.com/v2/photos/xlarge/1/25083791.jpg',
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
      image: 'https://ultramusicfestival.com/wp-content/uploads/2021/02/miami-banner-rescheduled-2022.jpg',
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
      image: 'https://cdn-az.allevents.in/events9/banners/e8192a4f179523fbe9de9efc9b0b2c4db85abee659d4a7ac25974b64e1364d25-rimg-w525-h350-gmir.jpg?v=1626635796',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ],{});
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
