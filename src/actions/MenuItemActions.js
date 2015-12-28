import Reflux from 'reflux';
import $ from 'jquery';

var MenuItemActions = Reflux.createActions({
  queryAll: {children: ["completed", "failed"]}
})

MenuItemActions.queryAll.listen(function() {
	$.get('https://api.github.com/users/calbertts/repos')
		.then(this.completed)
        .fail(this.failed);
})

export default MenuItemActions;