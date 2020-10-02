var conventionalCommitTypes = require('./types');

module.exports = {
  types: conventionalCommitTypes,
  phabricatorMode: true,
  skipScope: true,
  maxHeaderWidth: 72,
  minHeaderWidth: 2,
  maxLineWidth: 100,
  phabricatorPrefix: 'T'
};
