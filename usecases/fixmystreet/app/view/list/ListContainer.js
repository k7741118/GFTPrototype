Ext.define('FixMyStreet.view.list.ListContainer', {
	extend: 'Ext.Container',
	alias: 'widget.listcontainer',
	
	config: {
		title: 'Liste',
		iconCls: 'bookmarks',
		layout: 'fit',
		items: [
			{
				xtype: 'titlebar',
				cls: 'titlebar',
				docked: 'top',
				title: 'Meine Defekte'
			},
			{
				xtype: 'problemlist'
			}
		]
	}
});