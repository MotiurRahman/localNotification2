function doClick(e) {
	alert($.label.text);
}

var intent = Ti.Android.createServiceIntent({
	url : 'ExampleService.js'
});

intent.putExtra('message', 'Now is the winter of our discontent...');
//intent.putExtra('timestamp', new Date(new Date().getTime() + 30 * 1000));
intent.putExtra('interval', 3000);
Ti.Android.startService(intent);

$.index.open();
