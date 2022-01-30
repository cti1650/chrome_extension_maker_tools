(async () => {
    const { Manifest } = require('../class');
    const { update, save } = Manifest();
    update('release');
    save();
  })();
  