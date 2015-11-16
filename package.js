Package.describe({
  name: "abernix:meteor-kalendae",
  summary: "Meteor shim for Kalendae",
  version: "0.5.5",
  git: "https://github.com/abernix/meteor-kalendae.git"
});

Package.onUse(function (api) {
  api.use("momentjs:moment@2.6.0");
  api.imply("momentjs:moment");

  api.addFiles([
    "lib/kalendae/build/kalendae.js",
    "lib/kalendae/build/kalendae.css",
  ], ["client"]);
});

Package.onTest(function (api) {
  api.use([
    "momentjs:moment",
    "tinytest",
    "test-helpers"
  ], ['client', 'server']);

  api.addFiles("test-kalendae.js", ['client', 'server']);
});
