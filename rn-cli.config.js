// This blacklist circumvents a naming collision error in jest-haste-map
// caused by amplify/#current-cloud-backend and amplify/backend
const blacklist = require('metro').createBlacklist;

module.exports = {
  resolver: {
    blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
  },
};