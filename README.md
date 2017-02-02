# z-service-initializer

attaches **zService** to **app**

```javascript
'use strict';

module.exports = function (app) {
    var router = require('express').Router();

    router.post(
        '/hello',
        function (req, res, next) {
            app.zService.api.example.hello(req, function(errors, data){
                res.json({
                    errors: errors,
                    result: data
                })
            });
        });

    return router;
};
```
