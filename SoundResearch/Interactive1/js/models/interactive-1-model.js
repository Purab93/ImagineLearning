(function() {
	InteractiveOneModel = Backbone.Model.extend({
		defaults : function() {
			return {
				/**
				 * Stores Current Screen
				 * @property currentScreen
				 * @type number
				 * @default 0
				 */
				currentScreeen : 0,
				/**
				 * Stores Page models
				 * @property pageCollection
				 * @type collection
				 * @default null
				 */
				pageCollection : null,
				/**
				 * Stores Tool model
				 * @property toolModel
				 * @type model
				 * @default null
				 */
				sideToolbarModel : null
			};
		},
		/**
		 * Returns Current Screen
		 * @method getCurrentScreeen
		 * @public
		 */
		getCurrentScreeen : function getCurrentScreeen() {
			return this.get('currentScreeen');
		},
		/**
		 * Returns Page Collection
		 * @method getPageCollection
		 * @public
		 */
		getPageCollection : function getPageCollection() {
			return this.get('pageCollection');
		},
		/**
		 * Returns Tool Model
		 * @method getToolModel
		 * @public
		 */
		getSideToolbarModel : function getSideToolbarModel() {
			return this.get('sideToolbarModel');
		},		
		/**
		 * Sets Current Screen
		 * @method setCurrentScreeen
		 * @public
		 */
		setCurrentScreeen : function setCurrentScreeen(currentScreeen) {
			this.set('currentScreeen',currentScreeen);
		},
		/**
		 * Sets Page Collection
		 * @method setPageCollection
		 * @public
		 */
		setPageCollection : function setPageCollection(pageCollection) {
			this.set('pageCollection',pageCollection);
		},
		/**
		 * Returns Tool Model
		 * @method getToolModel
		 * @public
		 */
		setSideToolbarModel : function setSideToolbarModel() {
			this.set('sideToolbarModel');
		},	
		/**
		 * Initialize function of model.
		 * @method initialize
		 * @constructor
		 */
		'initialize' : function initialize() {
		}
	});
});
