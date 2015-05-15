(function(){

    var Preloader = Backbone.Model.extend({
        defaults: function(){
            return {
                manifest: null,
                interactivityName: '',
                config: null,
                resources: null,
                fileCount: 0,
                fileLoadCount: 0,
                filePaths: null
            };
        },

        initialize: function initialize(){
            this.set('filePaths', []);

            this.on('change:fileLoadCount', function(){
                if(this.get('fileLoadCount') === this.get('fileCount')){
                    $('.player').trigger('files-loaded');
                }
            },this);
            //            this._setManifest();
        },

        getPaths: function getPaths(){
            return this.get('filePaths');
        },

        _setManifest: function(){
            var manifest = [],
                folderName = this.get('interactivityName'),config,
                self = this,
                JavaScriptLoader = createjs.JavaScriptLoader,
                CSSLoader = createjs.CSSLoader,
                ImageLoader = createjs.ImageLoader,
                JSONLoader = createjs.JSONLoader,
                BinaryLoader = createjs.SoundLoader,
                filePaths = this.get('filePaths'),
                fileCount = this.get('fileCount');

            $.getJSON(folderName + '/config/config.json',function(data){
                config = data.resources;

                $.each(config, function(key,value){
                    switch(key){
                        case 'media':
                            if(value.image.length > 0){
                                $.each(value.image, function(index, image){
                                    var img = new ImageLoader({
                                        id: image.id,
                                        src: folderName + '/media/image/'+image.src
                                    }, false);
                                    img.on("complete", function(e){
                                        filePaths.push({
                                            id: this.getItem().id,
                                            filePath: e.result.src,
                                            type: "image"
                                        });
                                        var fileLoadCount = self.get('fileLoadCount');
                                        fileLoadCount++;
                                        self.set('fileLoadCount', fileLoadCount);

//                                        alert('image');
                                    });
                                    img.load();
                                    fileCount++;
                                });
                            }
                            if(value.audio.length > 0){
//                                $.each(value.audio, function(index, audio){
//                                    var sound = new BinaryLoader({
//                                        id: audio.id,
//                                        src: folderName + '/media/audio/'+audio.src
//                                    }, false);
//
////                                    alert('audio to load');
//                                    sound.on('complete', function(e){
//                                        filePaths.push({
//                                            id: this.getItem().id,
//                                            filePath: this.getItem().src,
//                                            type: "audio"
//                                        });
//                                        var fileLoadCount = self.get('fileLoadCount');
//                                        fileLoadCount++;
//                                        self.set('fileLoadCount', fileLoadCount);
////                                        alert('audio');
//                                    });
//
//                                    sound.on('fileprogress', function(e){
//                                        alert(e);
//                                    });
//
//                                    sound.load();
//                                    fileCount++;
//                                });
                            }
                            break;
                        case 'js':
                            $.each(value, function (index,file){
                                var js = new JavaScriptLoader({
                                    id: file.id,
                                    src: folderName + '/' + key + '/' + file.src
                                }, false);

                                js.on('complete', function(e){
                                    filePaths.push({
                                        id: this.getItem().id,
                                        filePath: e.result.src,
                                        type: "js"
                                    });
                                    var fileLoadCount = self.get('fileLoadCount');
                                    fileLoadCount++;
                                    self.set('fileLoadCount', fileLoadCount);
//                                    alert('js');
                                });

                                js.load();
                                fileCount++;
                            });
                            break;
                        case 'css':
                            $.each(value, function (index,file){
                                var css = new CSSLoader({
                                    id: file.id,
                                    src: folderName + '/' + key + '/' + file.src
                                }, false);

                                css.on("complete", function(e){
                                    filePaths.push({
                                        id: this.getItem().id,
                                        filePath: e.result.src,
                                        type: "css"
                                    });
                                    var fileLoadCount = self.get('fileLoadCount');
                                    fileLoadCount++;
                                    self.set('fileLoadCount', fileLoadCount);
                                    alert('css');
                                    $('head').append(e.result);
                                });

                                css.load();
                                fileCount++;
                            });
                            break;
                        case 'components':
                            break;
                        case 'json':
                            $.each(value, function (index,file){
                                var json = new JSONLoader({
                                    id: file.id,
                                    src: folderName + '/' + key + '/' + file.src
                                }, false);
                                json.on("complete", function(e){
                                    filePaths.push({
                                        id: this.getItem().id,
                                        filePath: e.result.src,
                                        type: "json"
                                    });
                                    var fileLoadCount = self.get('fileLoadCount');
                                    fileLoadCount++;
                                    self.set('fileLoadCount', fileLoadCount);
//                                    alert('json');
                                });
                                json.load();
                                fileCount++;
                            });
                            break;
                    }
                });
                self.set('manifest', manifest);
                self.set('fileCount', fileCount);
            });
        },

        preload: function preload(){
            var resourceQueue = new createjs.LoadQueue(true),
                manifest = this.get('manifest'),
                item = null,
                loadItem;
            resourceQueue.on("fileload", this.handleFileLoad);
            resourceQueue.on("progress", this.handleFileProgress);
            //            resourceQueue.on("complete", loadComplete);
            //            resourceQueue.on("error", loadError);
            //            resourceQueue.loadManifest(manifest);

            for(item in manifest){
                loadItem = new createjs.LoadItem();
                loadItem.src = item.src;
            }

            this.set('resources', resourceQueue.getItems());
        },

        handleFileLoad: function handleFileLoad(event){
            //            $('.interactivity').append(event.result);
            console.log(event.item.id);
            //            $('.interactivity').find('img').remove();
        },

        handleFileProgress: function handleFileProgress(event){
            $('.progress').text(Math.round(event.progress*100) + '%');
        }
    });


    window.PreloadJSDemo.Preloader = Preloader;
})();
