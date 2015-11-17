Based on http://fullcalendar.io/ v2.4.0 -  JQuery plugin packaged for Meteor 1.0.

### Installation ###

```bash
    meteor add krt:meteor-reactive-fullcalendar
```

### Usage ###
Template:

```handlebars
    <template name="myTemplate">
        {{ > ReactiveFullcalendar options=calendarOptions }}
    </template>
```
    
Client JS:

```javascript
    Template.myTemplate.helpers({
        calendarOptions: {
            // Standard fullcalendar options
            height: 700,
            hiddenDays: [ 0 ],
            slotDuration: '01:00:00',
            minTime: '08:00:00',
            maxTime: '19:00:00',
            lang: 'fr',
            // Function providing events reactive computation for fullcalendar plugin
            events: function(start, end, timezone, callback) {
                //console.log(start);
                //console.log(end);
                //console.log(timezone);
                var events = [];
                // Get only events from one document of the Calendars collection
                // events is a field of the Calendars collection document
                var calendar = Calendars.findOne(
                    { "_id":"myCalendarId" },
                    { "fields": { 'events': 1 } }
                );
                // events need to be an array of subDocuments:
                // each event field named as fullcalendar Event Object property is automatically used by fullcalendar
                if (calendar && calendar.events) {
                    calendar.events.forEach(function (event) {
                        eventDetails = {};
                        for(key in event)
                            eventDetails[key] = event[key];
                        events.push(eventDetails);
                    });
                }
                callback(events);
            },
            // Optional: id of the calendar
            id: "calendar1",
            // Optional: Additional classes to apply to the calendar
            addedClasses: "col-md-8",
            // Optional: Additional functions to apply after each reactive events computation
            autoruns: [
                function () {
                    console.log("user defined autorun function executed!");
                }
            ]
        },
    });
```

### More details ###
- Many fullcalendar can be added on the same page by using different id
- autoruns need to be an array of functions

### Demo ###

- You can see a demo of this package in action at this repository:
https://github.com/koretech/meteor-fullcalendar-demo

### History ###

- This package was originally written by gquemart and is available at:
https://github.com/gquemart/meteor-reactive-fullcalendar
- It was later forked by fermuch and is available at:
https://github.com/fermuch/meteor-reactive-fullcalendar
