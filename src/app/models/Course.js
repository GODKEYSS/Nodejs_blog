const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete'); // add plugin mongoose-delete // soft delete



const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, require: true },
  description: { type: String },
  image: { type: String, },
  VideoId: { type: String, require: true },
  slug: { type: String, slug: "name", unique: true },
}, {
  timestamps: true,
});

// Add pl

mongoose.plugin(slug)


Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course)    