let assert = require("assert");
let ObjectId = require("mongodb").ObjectId;

let Site = function (args) {
  assert.ok(args.href, "href is required");
  assert.ok(args.name, "name is required");
  assert.ok(args.lang, "lang is required");

  let site = {};

  if (args._id) {
    site._id = new ObjectId(args._id);
  }

  site.href = args.href;
  site.name = args.name;
  site.lang = args.lang;
  site.votes = args.votes || 0;

  return site;
};

module.exports = Site;
