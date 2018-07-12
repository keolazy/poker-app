## Figure out Calendar API.
Add Events. Create Events. Update Events. Edit Events.

Calendar table should store items in events array.
  -Each item in array is an "event" object containing different columns of info

EXAMPLE)
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title",
        rsvpCount: 0,
        image1: '',
        image2: '',
        image3: '',
      }
    ]
  };
