Package.describe({
  summary: "Meteor Reactive - Full-sized drag & drop event calendar",
  version: "2.3.1",
  git: "https://github.com/fermuch/meteor-reactive-fullcalendar-unstyled.git",
  name: 'fermuch:meteor-reactive-fullcalendar'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('mrt:moment@2.8.1', 'client');
  api.use('reactive-var', 'client');
  api.use('templating', 'client');
  api.addFiles([
      'fullcalendar.js',
      'fullcalendar.css',
      'lang-all.js',
      'gcal.js',
      'reactive-fullcalendar.js',
      'reactive-fullcalendar-template.html',
      'reactive-fullcalendar-template.js',
  ],'client');
});
