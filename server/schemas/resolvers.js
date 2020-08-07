const { User, bookSchema } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, { username }) => {
        return me.findOne({ username })
        .select('-__v -password')
        },
    }
};

module.exports = resolvers;