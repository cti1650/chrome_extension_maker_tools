(async () => {
    const { Manifest } = require('../class');
    const { update, save } = Manifest();
    update('minor');
    save();
  })();
  