const Mutations = {
  // Each request contains four variables
  // parent - parent schema in graphql
  // args - arguments that have been passed to the query
  // ctx - the context - surface the database and provides the rest of the request (headers, cookies, etc.)
  // info - provides information on the graphql query that's coming in
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem({
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },
  // createDog(parent, args, ctx, info) {
  //   global.dogs = global.dogs || [];
  //   // create a dog
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // },
};

module.exports = Mutations;
