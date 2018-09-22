'use strict';

/**
 * Contest.js controller
 *
 * @description: A set of functions called "actions" for managing `Contest`.
 */

module.exports = {

  /**
   * Retrieve contest records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.contest.search(ctx.query);
    } else {
      return strapi.services.contest.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a contest record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.contest.fetch(ctx.params);
  },

  /**
   * Count contest records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.contest.count(ctx.query);
  },

  /**
   * Create a/an contest record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.contest.add(ctx.request.body);
  },

  /**
   * Update a/an contest record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.contest.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an contest record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.contest.remove(ctx.params);
  }
};
