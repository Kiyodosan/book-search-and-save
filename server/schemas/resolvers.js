const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
/*     users: async () => {
      //// Can I populate books, even though 
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    }, */
    self: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
/*     removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    }, */
    //// Might not use link. If removing link, also remove from bookData / bookToSave in SearchBooks.jsx
    addBook: async (parent, { authors, description, bookId, image, link, title }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: {
              savedBooks: { authors, description, bookId, image, link, title },
            },
          },
          {
            new: true,
            runValidators: true,
          },
        );
      }
      throw AuthenticationError;
    },
    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              savedBooks: {
                bookId: bookId,
              },
            },
          },
          { new: true },
        );
      }
      throw AuthenticationError;
    },
  },
}

module.exports = resolvers;