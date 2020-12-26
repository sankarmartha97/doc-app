'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('doctors', [{
    name : 'John',
    createdAt : new Date(),
    updatedAt : new Date(),
    email : 'johnDoe@test.com',
    mobile_number: '6327632763',
    gender: 'male',
    speaking_langages: 'english',
    practicing_from: '10-10-1978'
  },  {
    name: 'Filmore McMenemy',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Polish',
    email: 'fmcmenemy0@indiatimes.com',
    gender: 'Male',
    practicing_from: '24/03/2017',
    mobile_number: '+81 615 928 9795',
    professional_statement: 'In hac habitasse platea dictumst.'
  },
  {
    name: 'Ivory Ivatt',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Swahili',
    email: 'iivatt1@theglobeandmail.com',
    gender: 'Female',
    practicing_from: '14/02/2007',
    mobile_number: '+62 624 257 7842',
    professional_statement: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.'
  },
  {
    name: 'Massimiliano Rozier',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Ndebele',
    email: 'mrozier2@dagondesign.com',
    gender: 'Male',
    practicing_from: '16/03/1999',
    mobile_number: '+351 734 153 9629',
    professional_statement: 'In hac habitasse platea dictumst.'
  },
  {
    name: 'Clarette Sharvell',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Filipino',
    email: 'csharvell3@digg.com',
    gender: 'Female',
    practicing_from: '06/03/2015',
    mobile_number: '+420 864 386 6329',
    professional_statement: 'Cras in purus eu magna vulputate luctus.'
  },
  {
    name: 'Ave Lieb',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Khmer',
    email: 'alieb4@youtu.be',
    gender: 'Male',
    practicing_from: '03/08/2004',
    mobile_number: '+235 314 674 6078',
    professional_statement: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.'
  },
  {
    name: 'Lucinda Antrobus',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Irish Gaelic',
    email: 'lantrobus5@macromedia.com',
    gender: 'Female',
    practicing_from: '13/10/2002',
    mobile_number: '+27 578 949 6317',
    professional_statement: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.'
  },
  {
    name: 'George Martina',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Fijian',
    email: 'gmartina6@pcworld.com',
    gender: 'Female',
    practicing_from: '03/05/2007',
    mobile_number: '+62 316 218 5666',
    professional_statement: 'Donec semper sapien a libero.'
  },
  {
    name: 'Gradeigh Scutchings',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Amharic',
    email: 'gscutchings7@accuweather.com',
    gender: 'Male',
    practicing_from: '13/09/2007',
    mobile_number: '+86 513 766 7527',
    professional_statement: 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'
  },
  {
    name: "Henrietta O'Deegan",
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Arabic',
    email: 'hodeegan8@rakuten.co.jp',
    gender: 'Female',
    practicing_from: '22/10/2018',
    mobile_number: '+62 635 121 4598',
    professional_statement: 'Nulla tempus.'
  },
  {
    name: 'Car Loxdale',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Polish',
    email: 'cloxdale9@hud.gov',
    gender: 'Male',
    practicing_from: '14/10/2013',
    mobile_number: '+55 286 449 1510',
    professional_statement: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.'
  },
  {
    name: 'Jackqueline McHenry',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Yiddish',
    email: 'jmchenrya@slashdot.org',
    gender: 'Female',
    practicing_from: '06/11/2020',
    mobile_number: '+48 104 616 6064',
    professional_statement: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.'
  },
  {
    name: 'Tod Duffie',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Northern Sotho',
    email: 'tduffieb@cnbc.com',
    gender: 'Male',
    practicing_from: '21/03/2005',
    mobile_number: '+30 117 634 6313',
    professional_statement: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.'
  },
  {
    name:' Mada Reader',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Bosnian',
    email: 'mreaderc@wix.com',
    gender: 'Female',
    practicing_from: '12/02/1998',
    mobile_number: '+86 317 245 4167',
    professional_statement: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.'
  },
  {
    name: 'Alejoa Everall',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Oriya',
    email: 'aeveralld@marriott.com',
    gender: 'Male',
    practicing_from: '06/06/2013',
    mobile_number: '+86 844 171 4861',
    professional_statement: 'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.'
  },
  {
    name: 'Alayne MacDiarmond',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Telugu',
    email: 'amacdiarmonde@accuweather.com',
    gender: 'Female',
    practicing_from: '25/04/2013',
    mobile_number: '+84 322 886 1137',
    professional_statement: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.'
  },
  {
    name: 'Cy Skirvin',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Malayalam',
    email: 'cskirvinf@mayoclinic.com',
    gender: 'Male',
    practicing_from: '02/03/2006',
    mobile_number: '+57 171 614 4510',
    professional_statement: 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.'
  },
  {
    name: 'Forrester Nixon',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Assamese',
    email: 'fnixong@google.de',
    gender: 'Male',
    practicing_from: '30/07/2007',
    mobile_number: '+49 234 769 2074',
    professional_statement: 'Integer a nibh.'
  },
  {
    name: 'Clarinda Noke',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Amharic',
    email: 'cnokeh@miibeian.gov.cn',
    gender: 'Female',
    practicing_from: '22/09/2020',
    mobile_number: '+51 357 617 6209',
    professional_statement: 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.'
  },
  {
    name: 'Garrott Newland',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Azeri',
    email: 'gnewlandi@creativecommons.org',
    gender: 'Male',
    practicing_from: '21/09/2010',
    mobile_number: '+46 618 710 8901',
    professional_statement: 'Nullam molestie nibh in lectus.'
  },
  {
    name: 'Alika Wicher',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Papiamento',
    email: 'awicherj@mail.ru',
    gender: 'Female',
    practicing_from: '20/12/2020',
    mobile_number: '+351 391 873 5822',
    professional_statement: 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.'
  },
  {
    name: 'Ketty Trimby',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Telugu',
    email: 'ktrimbyk@pinterest.com',
    gender: 'Female',
    practicing_from: '20/09/2020',
    mobile_number: '+55 869 454 3489',
    professional_statement: 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.'
  },
  {
    name: 'Kasper Plumb',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Sotho',
    email: 'kplumbl@linkedin.com',
    gender: 'Male',
    practicing_from: '09/03/2013',
    mobile_number: '+380 922 316 4257',
    professional_statement: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
  },
  {
    name: 'Claribel Iacovini',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Hebrew',
    email: 'ciacovinim@photobucket.com',
    gender: 'Female',
    practicing_from: '26/11/2005',
    mobile_number: '+86 432 321 1899',
    professional_statement: 'Vivamus in felis eu sapien cursus vestibulum.'
  },
  {
    name: 'Boothe Mariolle',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Tswana',
    email: 'bmariollen@mit.edu',
    gender: 'Male',
    practicing_from: '24/07/2017',
    mobile_number: '+55 565 983 7540',
    professional_statement: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.'
  },
  {
    name: 'Ardelia Bickerdyke',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Afrikaans',
    email: 'abickerdykeo@github.io',
    gender: 'Female',
    practicing_from: '09/03/2016',
    mobile_number: '+30 950 452 1466',
    professional_statement: 'Vivamus vestibulum sagittis sapien.'
  },
  {
    name: 'Aluino Kleinberer',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Nepali',
    email: 'akleinbererp@time.com',
    gender: 'Male',
    practicing_from: '25/12/2012',
    mobile_number: '+31 865 656 6121',
    professional_statement: 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.'
  },
  {
    name: 'Morry De La Haye',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Bengali',
    email: 'mdeq@is.gd',
    gender: 'Male',
    practicing_from: '18/04/2008',
    mobile_number: '+48 548 969 3023',
    professional_statement: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna.'
  },
  {
    name: 'Hall Sterland',
    createdAt : new Date(),
    updatedAt : new Date(),
    speaking_langages: 'Kazakh',
    email: 'hsterlandr@qq.com',
    gender: 'Male',
    practicing_from: '29/01/2013',
    mobile_number: '+62 293 859 3398',
    professional_statement: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.'
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // return queryInterface.bulkDelete('doctors', null, {})
    await queryInterface.bulkDelete('doctors', [{
      name :'John'
    }])
  }
};
