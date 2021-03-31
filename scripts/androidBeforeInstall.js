module.exports = function (ctx) {
  var fs = require('fs');
  var path = require('path');
  var platformRoot = path.join(ctx.opts.projectRoot,
    'platforms' + path.sep + 'android');

  // Ref #742: https://github.com/j3k0/cordova-plugin-purchase/issues/742
  // Cordova failed to remove this file when uninstalling the plugin, which in
  // turn prevents the plugin from re-installing. Work-around below:
  rmByPathSync(path.join(platformRoot, 'app', 'src', 'main', 'aidl', 'com', 'android', 'vending', 'billing', 'IInAppBillingService.aidl'));
  rmByPathSync(path.join(platformRoot, 'src', 'com', 'android', 'vending', 'billing', 'IInAppBillingService.aidl'));

  function rmByPathSync(targetFile) {
    if (fs.existsSync(targetFile))
      fs.unlinkSync(targetFile);
  }
};
