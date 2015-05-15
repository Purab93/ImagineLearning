(function(){
    PreloadJSDemo.DemoModel = PreloadJSDemo.Preloader.extend({
        defaults: function(){
            return {
                dummy: 'dummy',
                preloader: null,
                filePaths: null
            };
        },

        initialize: function initialize(){
            this.set('filePaths', this.get('preloader').get('filePaths'));
        },

        getPath: function getPath(id){
            var filePaths = this.get('filePaths');

            for(var file in filePaths){
                if(filePaths[file].id === id){
                    return filePaths[file].filePath;
                }
            }
        }
    });
})();
