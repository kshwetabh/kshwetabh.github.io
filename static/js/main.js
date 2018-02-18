
var app = new Vue({
    el: '#app',
    data: {
      showcase_title: "Let's Feed Faridabad",
      showcase_desc: "",
      footer_org: "Let's Feed Faridabad",
      footer_project_by: "inspiredbits.org",
      contact_us_email: "letsfeedfaridabad@gmail.com",
      events: [
          {
              event_title: "Event 1",
              event_desc: "Winter cloth donation event at one of the underprivileged schools in Sector 45.\
               Clothes were distributed to the children. Students voluntarily said they wanted the distribution\
               to be on need basis.",
              event_img: "./static/images/event-1.jpg"
          },{
            event_title: "Event 2",
            event_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis, dolorum ab eaque \
            magnam vero error perferendis autem repellat? Et.",
            event_img: "./static/images/site-hero.jpg"
          },{
            event_title: "Event 3",
            event_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis, dolorum ab eaque \
            magnam vero error perferendis autem repellat? Et.",
            event_img: "./static/images/event-1.jpg"
          }
      ],
      get_involved: "There are multiple ways to get involved.",
      get_involved_items: [
        "Donate", 
        "Spread the word", 
        "Become a volunteer"
      ],
      images: [
        './static/images/event-1.jpg',
        './static/images/site-hero.jpg',
        './static/images/event-1.jpg',
        './static/images/site-hero.jpg',
        './static/images/event-1.jpg'
      ],
      index: null
    },
    components: {
      'gallery': VueGallery
    }
  });