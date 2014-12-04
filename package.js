Package.describe({
  name: 'bell:cordova-image-picker',
  summary: ' Cordova Image Picker meteor package',
  version: '1.0.4',
  git: 'https://github.com/MichaelFBA/bell-cordova-image-picker'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('bell:cordova-image-picker.js');
  api.add_files([
		// Core
		"cordova-imagePicker/www/imagepicker.js",
	]);
});

Cordova.depends({
  "com.synconset.imagepicker": "1.0.4"
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bell:cordova-image-picker');
  api.addFiles('bell:cordova-image-picker-tests.js');
});
