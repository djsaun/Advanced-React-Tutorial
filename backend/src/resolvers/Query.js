// Need to set up a resolver whenever you create a new query
const Query = {
  // Each request contains four variables
  // parent - parent schema in graphql
  // args - arguments that have been passed to the query
  // ctx - the context - surface the database and provides the rest of the request (headers, cookies, etc.)
  // info - provides information on the graphql query that's coming in
  // dogs(parent, args, ctx, info) {
  //   global.dogs = global.dogs || [];
  //   return global.dogs;
  // }
};

module.exports = Query;
