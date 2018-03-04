<template>
  <div id="app">
    <!-- header showcase -->
    <header id="showcase" class="grid">
        <!-- <div class="bg-image"></div> -->
        <div class="bg-image" :style="{ 'background-image': 'url(' + appData.hero.img + ')' }"></div>
        <div class="content-wrap">
            <h1>{{appData.hero.title}}</h1>
            <p>
                {{appData.hero.desc}}
            </p>
            <a href="#section-a" class="btn">Read More</a>
        </div>
    </header>

    <!-- Main Area -->
    <main id="main">
        <!-- Section A -->
        <section id="section-a" class="grid">
            <div class="content-wrap">
                <h2 class="content-title">Our Vision</h2>
                <div class="content-text">
                    <p>{{appData.vision}}</p>
                </div>
            </div>
        </section>

        <!-- Section B -->
        <section id="section-b" class="grid">
            <div class="content-wrap">
                <h2 class="content-title">Events</h2>
            </div>
            <ul>
                <li v-for="(event, index) in appData.events" :key="index">
                    <div class="card">
                        <img :src="event.img" alt="">
                        <div class="card-content">
                            <h3 class="card-title">{{event.eventtitle}}</h3>
                            <p>{{event.summary}}</p>
                            <a href="#" class="card-action">Details</a>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

            <!-- Section C -->
        <section id="section-c" class="grid">
            <div class="content-wrap">
                <h2 class="content-title">Get Involved</h2>
                <p>{{appData.getinvolved.summary}}</p>
                <ul class="getting-involved">
                    <li v-for="(gi, index) in appData.getinvolved.options" :key="index">{{gi}}</li>
                </ul>
            </div>
        </section>

        <!-- Section D -->
            <section id="section-d" class="grid">
            <div class="content-wrap image-gallery">
                <h2 class="content-title">ShowCase</h2>
                <gallery :images="showcaseImages" :index="index" @close="index = null"></gallery>
                <ul>
                    <li
                        class="image"
                        v-for="(image, imageIndex) in showcaseImages"
                        :key="imageIndex"
                        @click="index = imageIndex"
                        :style="{ backgroundImage: 'url(' + image + ')'}"
                    ></li>
                </ul>
            </div>
        </section>


        <!-- Section E -->
        <section id="section-e" class="grid">
            <div class="box">
                <h2 class="content-title">Contact Us</h2>
                <p>{{appData.contactus.desc}}</p>
                <p>{{appData.contactus.email}}</p>
            </div>
            <div class="box">
                <h2 class="content-title">About Our Organization</h2>
                <p>{{appData.aboutorganization}}</p>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer id="main-footer" class="grid">
        <div>{{appData.footer.org}}</div>
        <div>Project By <a href="http://inspiredbits.org" target="_blank">{{appData.footer.copyright}}</a></div>
    </footer>
  </div>
</template>

<script>
import {db} from './firebase';
import VueGallery from 'vue-gallery';

export default {
  name: 'app',
  data () {
    return {
      appData: {
        hero: {
          title: "Let's Feed Faridabad",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam distinctio impedit deleniti esse quis nobis, omnis incidunt adipisci repudiandae, libero laudantium veritatis vitae laboriosam.?"
        },
        events: [
            {
                event_title: "Event 1",
                event_desc: "Winter cloth donation event at one of the underprivileged schools in Sector 45.\
                Clothes were distributed to the children. Students voluntarily said they wanted the distribution\
                to be on need basis.",
                event_img: "./assets/images/event-1.jpg"
            },{
              event_title: "Event 2",
              event_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis, dolorum ab eaque \
              magnam vero error perferendis autem repellat? Et.",
              event_img: "./assets/images/site-hero.jpg"
            },{
              event_title: "Event 3",
              event_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis, dolorum ab eaque \
              magnam vero error perferendis autem repellat? Et.",
              event_img: "./assets/images/event-1.jpg"
            }
        ],
        aboutorganization: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, tenetur consectetur nulla vero est eligendi. Quisquam facilis nihil quis explicabo ut, aspernatur sunt adipisci sequi quia ratione ipsa nobis praesentium.',
        contactus: {
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit aspernatur hic. Tenetur dignissimos quas incidunt debitis omnis. Voluptatem, fuga!" ,
          email: 'letsfeedfaridabad@gmail.com'
        },
        vision: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dignissimos recusandae vero consectetur? Vero ab quaerat magni officiis totam quo, iusto alias ea incidunt animi repudiandae, assumenda atque, dolorem distinctio possimus! Accusamus dignissimos, tenetur, veniam obcaecati quae nesciunt facilis autem assumenda reprehenderit a accusantium modi blanditiis expedita praesentium debitis sint totam asperiores porro suscipit? Explicabo aperiam, facere ullam aspernatur architecto reprehenderit esse dolore velit debitis nobis itaque corporis, sit eligendi?',
        footer: {
          org: "Let's Feed Faridabad",
          copyright: "inspiredbits.org"
        },
        getinvolved: {
          summary: 'There are multiple ways to get involved',
          options: []
        }
      },
      index: null      
    }
  },
  components: {
    'gallery': VueGallery
  },
  // firebase: function() {
  //   return {
  //     heroDesc: db.ref('/letsfeedfaridabad/herodesc'), //.child('value'),
  //     letsfeedfaridabad: db.ref('/letsfeedfaridabad'),
  //     events: db.ref('events').limitToLast(3)
  //   }
  // },
  mounted: function() {
     let self = this;
      db.ref('/letsfeedfaridabad').once('value').then(function(snapshot) {
        console.log("letsfeedfaridabad --->", snapshot.val());
        self.appData = snapshot.val();
        return snapshot.val();
      });
  },
  methods: {
    submitName() {
      debugger
      namesRef.push({name: this.name, edit: false});
    }
  },
  computed: {
    showcaseImages: function() {
      if (this.appData.showcase)
        return Object.values(this.appData.showcase);
    }
  }
}
</script>

<style>
/* Core Style */
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #333;
    color: #fff;
    font-size: 1.1em;
    line-height: 1.5;
    text-align: center;
}

img {
    display: block;
    width: 100%;
    height: auto;
}

h1, h2, h3 {
    margin: 0;
    padding: 1em 0;
}

p {
    margin: 0;
    padding: 1em 0;
}

.btn {
    display: inline-block;
    background: #333;
    color: #fff;
    text-decoration: none;
    padding: 1em 2em;
    border: 1px solid #666;
    margin: .5em 0;
}

.btn:hover {
    background: #eaeaea;
    color: #333;
}

/* Header Showcase */

#showcase {
    min-height: 450px;
    color: #fff;
    text-align: center;
}

#showcase .bg-image {
    position: absolute;
    /* background: #333 url('./assets/images/site-hero.jpg'); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height:450px;
    z-index: -1;
    opacity: .3;
}

#showcase h1 {
    padding-top: 100px;
    padding-bottom: 0;
}

#showcase .content-wrap,
#section-a .content-wrap
{
    padding: 0 1.5em;
}

/* Section A */
#section-a {
    background: #eaeaea;
    color: #333;
    padding-bottom: 2em;
}

/* Section B */
#section-b,
#section-d {
    padding: 2em 1em 1em;
}

#section-b ul,
#section-d ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#section-b li {
    margin-bottom: 1em;
    background: #fff;
    color: #333;
}

.card-content {
    padding: 1.5em;
}

.card-content p {
    height: 200px;
    /* max-height: 200px; */
}

.card-action {
    display: inline-block;
    background: rgb(89, 88, 88);
    color: #fff;
    text-decoration: none;
    padding: .2em 1em;
    border: 1px solid #666;
    margin: .5em 0;
}

.card-action:hover {
    background: #eaeaea;
    color: #333;
}

/* Section C */
#section-c {
    background: #fff;
    color: #333;
    padding: 2em;
}

#section-c .getting-involved {
    padding-left: 0;
}
#section-c .getting-involved li{
    list-style: none;
    text-align: center;
}

/* Section D */
#section-d li {
    position: relative;
    margin-bottom: 1em;
    background: #333;
    width:100%;
    height:130px;
    margin: 3px 3px !important;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

#section-d li:hover {
    /* pop-over effect */
    top: -5px;
}

/* Section E */
#section-e .box {
    padding: 2em;
    color: #fff;
    background: #fff;
}

#section-e .box:first-child {
    background: #2690d4;
}

#section-e .box:nth-child(2) {
    color: #333;
}

/* Footer */
#main-footer {
    padding: 2em;
    background: #000;
    color: #fff;
    text-align: center;
}

#main-footer a {
    color: #2690d4;
    text-decoration: none;
}

/* Media Queries */
/* Small devices */
@media (max-width: 700px) {
  #section-d li {
    position: relative;
    margin-bottom: 1em;
    background: #333;
    width:100%;
    height:130px;
    margin: 5px 0px 0px 0px!important;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .image-gallery ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
  }
}

/* Desktop */
@media(min-width: 700px) {
    .grid {
        display: grid;
        grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
        border: 1px solid black;
    }

    #showcase .bg-image {
        background-position-y: -450px;
        background-attachment: fixed;
    }

    #section-a .content-text {
        columns: 2;
        column-gap: 2em;
    }

    #section-a .content-text p {
        padding-top: 0;
    }

    .content-wrap,
    #section-b ul,
    #section-d ul { 
        grid-column: 2/4;
    }

    .box, #main-footer div {
        grid-column: span 2;
    }

    #section-b ul,
    #section-d ul {
        display: flex;
        justify-content: space-around;
    }

    #section-b li {
        width: 31%;
    }
}
</style>
