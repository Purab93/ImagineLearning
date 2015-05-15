$(function(){
    var preloader = new PreloadJSDemo.Preloader({
        'interactivityName': 'preloader-demo'
    }),
        interactiveModel,
        interactiveView;
    $('.load-resources').off('click').on('click', function(){
        preloader._setManifest();

    });
    $('.player').on('files-loaded', $.proxy(loadInteractive,this));


    function loadInteractive(){
        interactiveModel = new PreloadJSDemo.DemoModel({
            preloader: preloader
        });
        interactiveView = new PreloadJSDemo.DemoView({
            el: '.player',
            model: interactiveModel
        });
    }
    window.preloader = preloader;
});
