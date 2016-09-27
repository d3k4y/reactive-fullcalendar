Package.describe({
    summary: "Meteor Reactive Fullcalendar - Full-sized drag & drop event calendar",
    version: '3.0.1',
    git: "https://github.com/projik/meteor-reactive-fullcalendar.git",
    name: 'supaseca:reactive-fullcalendar'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.use('momentjs:moment@2.15.1', 'client');
    api.use('templating', 'client');
    api.addFiles([
        'fullcalendar.js',
        'fullcalendar.css',
        'locale-all.js',
        'gcal.js',
        'reactive-fullcalendar.js',
        'reactive-fullcalendar-template.html',
        'reactive-fullcalendar-template.js'
    ], 'client');
});