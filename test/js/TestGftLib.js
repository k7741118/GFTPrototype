module("GftLib", {
    setup: function() {
		this.gft = new GftLib();
		this.testGftTableId = '1R9FMod3LN7UO3R6jp7gJeSQ9hbEVOwLqF0AZFQg';
	},
	teardown: function(){}
});

test("Construtor", function() {
	ok(this.gft instanceof GftLib, 'Object should be of GftLib or one of it\'s childs');
});

test("Constants", function() {
	equal(this.gft.GFT_URL,'http://www.google.com/fusiontables/api/query?');
	equal(this.gft.jsonUrlTail, '&jsonCallback=?');
});

asyncTest("doGet", 1, function() {
	var testCb = function(data, status) {
		equal(status, "success", "Status 'success' expected");
		start();
	}
	this.gft.doGet('index.html', '', testCb);
});

asyncTest("doPost", 1, function() {
	var testCb = function(data, status) {
		equal(status, "success", "Status 'success' expected");
		start();  
	}
	this.gft.doPost('index.html', '', testCb);//
});

asyncTest("doGetJSONP", 1, function() {
	var testCb = function(data, status) {
		equal(status, "success", "Status 'success' expected");
		start();
	}
	this.gft.doGetJSONP('http://api.twitter.com/trends/1.json', '', testCb);
});

asyncTest("doPostJSONP", 1, function() {
	var testCb = function(data, status) {
		equal(status, "success", "Status 'success' expected");
		start();
	}
	this.gft.doPostJSONP('http://api.twitter.com/trends/1.json', '', testCb);
});

asyncTest("Exec SQL", 7, function() {
	var testCb = function(data,status) {
		equal(data.columns[0],"Text");
		equal(data.columns[1],"Number");
		equal(data.columns[2],"Location");
		equal(data.columns[3],"Date");
		equal(data.rows[0][0],"Some record");
		equal(data.rows[0][2],"Zurich");
		equal(status, 'success', "Status 'success' expected");
		start();
	}
	this.gft.execSql(testCb, 'select * from ' + this.testGftTableId + ' limit 1');
});

asyncTest("ConvertToObject for single object", 4, function() {
	var gft = this.gft;
	var testCb = function(data,status) {
		var gftObjs = gft.convertToObject(data);
		equal(gftObjs[0].text, 'Some record');
		equal(gftObjs[0].number, 3);
		equal(gftObjs[0].location, 'Zurich');
		equal(gftObjs[0].date, '03.03.2012');
		start();
	}
	this.gft.execSql(testCb, 'select * from ' + this.testGftTableId + ' limit 1');
});

asyncTest("ConvertToObject for multiple objects", 4, function() {
	var gft = this.gft;
	var testCb = function(data,status) {
		var gftObjs = gft.convertToObject(data);
		equal(gftObjs[0].text, 'Some record');
		equal(gftObjs[1].text, 'Another record');
		equal(gftObjs[2].text, 'And another record');
		equal(gftObjs[3].text, 'Yet another record');
		start();
	}
	this.gft.execSql(testCb, 'select * from ' + this.testGftTableId + ' limit 4');
});

asyncTest("ExecSelect: Condition", 8, function() {
	var testCb = function(data,status) {
		equal(data.rows.length,1);
		equal(data.columns[0],"Text");
		equal(data.columns[1],"Number");
		equal(data.columns[2],"Location");
		equal(data.columns[3],"Date");
		equal(data.rows[0][0],"Some record");
		equal(data.rows[0][2],"Zurich");
		equal(status, "success", "Status 'success' expected");
		start();
	}
	this.gft.execSelect(testCb, {table:this.testGftTableId, condition:"Text = 'Some record'"});
});

asyncTest("ExecSelect: Projection", 6, function() {
	var testCb = function(data,status) {
		equal(data.rows.length,1);
		equal(data.rows[0].length,1);
		equal(data.columns.length,1);
		equal(data.columns[0],"mytext");
		equal(data.rows[0][0],"Some record");
		equal(status, "success", "Status 'success' expected");
		start();
	}
	this.gft.execSelect(testCb, {table:this.testGftTableId, fields:"Text as mytext",  limit:1});
});

asyncTest("ExecSelect: Order by", 3, function() {
	var testCb = function(data,status) {
		equal(data.rows[0][0],"Yet another record");
		equal(data.rows[1][0],"Some record");
		equal(status, "success", "Status 'success' expected");
		start();
	}
	this.gft.execSelect(testCb, {table:this.testGftTableId, fields:"Text", orderby:"Text desc", limit:2});
});

asyncTest("ExecSelect: Group by", 4, function() {
	var testCb = function(data,status) {
		console.log(data);
		equal(data.rows.length,1);
		equal(data.rows[0][0],2);
		equal(data.rows[0][1],3);
		equal(status, "success", "Status 'success' expected");
		start();
	}
	this.gft.execSelect(testCb, {table:this.testGftTableId, fields:"count(),Number", condition:"Number = 3", groupby:"Number"});
});
