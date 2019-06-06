module.exports = {
  up(db) {
    return db.collection('banner').updateMany({}, {$rename: {'colour': 'color'}});
  },

  down(db) {
    return db.collection('banner').updateMany({}, {$rename: {'color': 'colour'}});
  }
};
