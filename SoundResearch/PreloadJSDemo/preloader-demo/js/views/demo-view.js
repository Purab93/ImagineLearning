(function(){
    PreloadJSDemo.DemoView = Backbone.View.extend({
        initialize: function initialize(){
            console.log(this.model.get('filePaths'));
            this.render();
            this._registerSound();
//            createjs.Sound.play('demo-audio');
        },

        render: function render(){
            var self = this;
            this.$el.append('<button class="play-sound">Play Sound</button>');
            this.$('.demo-image').css({ 'background-image': 'url("' + this.model.getPath('overview-bg') + '")' });
//            alert(this.model.getPath('overview-bg'));
        },

        _registerSound: function _registerSound(){
            var self = this;
//            alert('registering');
            createjs.Sound.alternateExtensions = ["mp3"];
            if (!createjs.Sound.initializeDefaultPlugins()) {
                alert('not working');
            }
            createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
            createjs.Sound.registerSound('preloader-demo/media/audio/demo-audio.ogg', 'demo-audio');

            this.$('.play-sound').off('click').on('click', function(e){
//                alert('clicked');
                self._playSound();
            });
        },

        _playSound: function _playSound(){
            createjs.Sound.play('demo-audio');
        }
    });
})();
