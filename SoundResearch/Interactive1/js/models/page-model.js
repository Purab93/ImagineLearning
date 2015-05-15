(function() {
	PageModel = Backbone.Model.extend({
		defaults : function() {
			return {
				/**
				 * Stores Image Data
				 * @property imgData
				 * @type string
				 * @default null
				 */				
				imgData:null
			};
		},
		/**
		 * Returns Image Data
		 * @method getImgData
		 * @public
		 */		
		getImgData:function getImgData(){
			return this.get('imgData');
		},
		/**
		 * Sets Image Data
		 * @method setImgData
		 * @public
		 */		
		setImgData:function setImgData(imgData){
			this.set('imgData',imgData);
		}		
	});
});