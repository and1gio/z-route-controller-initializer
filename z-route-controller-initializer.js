'use strict';

module.exports = {
    run: function (app, next) {
        app.rc = {};
        app.utils.buildModulesInFolder(app, app.rc, app.folderPath.app.root + app.config.zRouteController.rootDir + '/');
        next();
    }
};
