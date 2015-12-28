import Reflux from 'reflux';
import MenuItemActions from '../actions/MenuItemActions'

var MenuItemStore = Reflux.createStore({
	listenables: MenuItemActions,

	queryAll: function() {
		//this.trigger(data)
	},

	onQueryAllCompleted: function(repos) {
		this.trigger(repos)
	},

	onQueryAllFailed: function(error) {
		this.trigger(error)
	}
});

export default MenuItemStore;