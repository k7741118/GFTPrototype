Ext.data.JsonP.list({"guide":"<h1>Using Lists in Sencha Touch 2</h1>\n\n<p>List is a component that renders a <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> as a list of items on the page. It's a subclass of <a href=\"#!/api/Ext.dataview.DataView\" rel=\"Ext.dataview.DataView\" class=\"docClass\">DataView</a>, which gives it most of its capabilities (<a href=\"#/guide/dataview\">see DataView guide</a>). List adds a few capabilities of its own though:</p>\n\n<ul>\n<li>Grouping of items, optional index bar, pinned headers</li>\n<li>Optional disclosure icons on each item</li>\n<li>Optional icons and labels for each item</li>\n</ul>\n\n\n<h2>Creating a simple List</h2>\n\n<p>You can render a List simply with static items like this:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.dataview.List\" rel=\"Ext.dataview.List\" class=\"docClass\">Ext.List</a>', {\n    store: {\n        fields: ['name'],\n        data: [\n            {name: 'Cowper'},\n            {name: 'Everett'},\n            {name: 'University'},\n            {name: 'Forest'}\n        ]\n    },\n\n    itemTpl: '{name}'\n});\n</code></pre>\n\n<p>This will just render one <a href=\"#!/api/Ext.dataview.component.DataItem\" rel=\"Ext.dataview.component.DataItem\" class=\"docClass\">DataItem</a> for each item in the <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>. You can also attach listeners to events on the List,</p>\n\n<pre><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.dataview.List\" rel=\"Ext.dataview.List\" class=\"docClass\">Ext.List</a>', {\n    listeners: {\n        select: function(view, record) {\n            <a href=\"#!/api/Ext.Msg-method-alert\" rel=\"Ext.Msg-method-alert\" class=\"docClass\">Ext.Msg.alert</a>('Selected!', 'You selected ' + record.get('name'));\n        }\n    },\n\n    //store and itemConfig as before\n});\n</code></pre>\n\n<h3>Preview</h3>\n\n<pre class='inline-example preview'><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.dataview.List\" rel=\"Ext.dataview.List\" class=\"docClass\">Ext.List</a>', {\n    fullscreen: true,\n\n    store: {\n        fields: ['name'],\n        data: [\n            {name: 'Cowper'},\n            {name: 'Everett'},\n            {name: 'University'},\n            {name: 'Forest'}\n        ]\n    },\n\n    itemTpl: '{name}',\n\n    listeners: {\n        select: function(view, record) {\n            <a href=\"#!/api/Ext.Msg-method-alert\" rel=\"Ext.Msg-method-alert\" class=\"docClass\">Ext.Msg.alert</a>('Selected!', 'You selected ' + record.get('name'));\n        }\n    }\n});\n</code></pre>\n","title":"Using List"});