require.config({

    shim: {
        'jq': {
            exports: 'jQuery'
        }
    },

    paths: {
        jq: 'libs/jquery/dist/jquery'
    }

});

require(['app'], function(app) {
    app.init();
});
