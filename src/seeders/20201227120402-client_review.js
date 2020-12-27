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
   await queryInterface.bulkInsert('client_reviews', [{
    user_account_id: 9,
    doctor_id: 8,
    is_review_anonymous: false,
    wait_time_rating: 2,
    bedside_manner_rating: 2,
    overall_rating: 1,
    review: "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    review_date: "01/08/2020",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    user_account_id: 1,
    doctor_id: 2,
    is_review_anonymous: false,
    wait_time_rating: 3,
    bedside_manner_rating: 3,
    overall_rating: 1,
    review: "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    review_date: "08/07/2020",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    user_account_id: 4,
    doctor_id: 5,
    is_review_anonymous: true,
    wait_time_rating: 3,
    bedside_manner_rating: 4,
    overall_rating: 5,
    review: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    review_date: "30/08/2020",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    user_account_id: 5,
    doctor_id: 4,
    is_review_anonymous: false,
    wait_time_rating: 2,
    bedside_manner_rating: 5,
    overall_rating: 2,
    review: "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    review_date: "01/05/2020",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    user_account_id: 3,
    doctor_id: 3,
    is_review_anonymous: true,
    wait_time_rating: 5,
    bedside_manner_rating: 4,
    overall_rating: 2,
    review: "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    review_date: "21/09/2020",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    user_account_id: 3,
    doctor_id: 10,
    is_review_anonymous: true,
    wait_time_rating: 1,
    bedside_manner_rating: 5,
    overall_rating: 4,
    review: "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    review_date: "18/07/2020",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    user_account_id: 10,
    doctor_id: 2,
    is_review_anonymous: true,
    wait_time_rating: 1,
    bedside_manner_rating: 2,
    overall_rating: 2,
    review: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    review_date: "03/02/2020",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    user_account_id: 5,
    doctor_id: 9,
    is_review_anonymous: false,
    wait_time_rating: 4,
    bedside_manner_rating: 1,
    overall_rating: 3,
    review: "In sagittis dui vel nisl. Duis ac nibh.",
    review_date: "29/12/2019",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    user_account_id: 1,
    doctor_id: 10,
    is_review_anonymous: false,
    wait_time_rating: 3,
    bedside_manner_rating: 5,
    overall_rating: 5,
    review: "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    review_date: "02/10/2020",
    createdAt : new Date(),
    updatedAt : new Date()
  }, {
    user_account_id: 9,
    doctor_id: 1,
    is_review_anonymous: false,
    wait_time_rating: 3,
    bedside_manner_rating: 3,
    overall_rating: 5,
    review: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    review_date: "28/04/2020",
    createdAt : new Date(),
    updatedAt : new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('client_reviews', null, {});
  }
};
