'use strict';

module.exports = {
    run: function (app, next) {
        app.zService = {};
        app.utils.buildModulesInFolder(app, app.zService, app.folderPath.app.root + app.config.zService.rootDir + '/');
        next();
    }
};
