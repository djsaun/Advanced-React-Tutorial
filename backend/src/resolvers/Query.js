const { forwardTo } = require('prisma-binding');

// Need to set up a resolver whenever you create a new query
const Query = {
  // If the query is exactly the same on both the prisma and on the yoga query
  // You can forward that query from Yoga to Prisma
  // Prevents duplication of code
  // Forwarding to the db allows us to use the same API on the client as on the server
  items: forwardTo('db')


  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
