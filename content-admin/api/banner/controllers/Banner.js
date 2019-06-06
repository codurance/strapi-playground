'use strict'

function add_aliases (response) {
  return response
    .map(object => object._doc)
    .map(banner => Object.assign({color: banner.colour}, banner))
}

module.exports = {
  find (ctx) {
    if (ctx.query._q) {
      return strapi.services.banner
        .search(ctx.query)
        .map(add_aliases)
    }
    return strapi.services.banner
      .find(ctx.query)
      .map(add_aliases)
  }
}
