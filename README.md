Based on http://fullcalendar.io/ v3.0.1 -  JQuery plugin packaged for Meteor 1.0.

Amongst other improvements, version 3 of Fullcalendar includes support for list views of events and drops support for IE 8.

For the complete list of changes in version 3, visit the releases page:
https://github.com/fullcalendar/fullcalendar/releases

### Installation ###

```bash
    meteor add d3k4y:reactive-fullcalendar
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
                console.log(start.format(), end.format());
                // Get events from the CalendarEvents collection
                // return as an array with .fetch()
                var events = CalendarEvents.find({
                     "id"         : "calendar1",
                     "startValue" : { $gte: start.valueOf() },
                     "endValue"   : { $lte: end.valueOf() }
                }).fetch();
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


### History ###

- This package was originally written by gquemart and is available at:
https://github.com/gquemart/meteor-reactive-fullcalendar
- It was later forked by fermuch and is available at:
https://github.com/fermuch/meteor-reactive-fullcalendar
- And then later forked by koretech:
https://github.com/koretech/meteor-reactive-fullcalendar
- And then later forked by projik:
https://github.com/projik/reactive-fullcalendar
- And then later forked by d3k4y:
https://github.com/d3k4y/reactive-fullcalendar
