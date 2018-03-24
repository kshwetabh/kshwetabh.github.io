<template>
  <div id="app">
    <nav class="navbar">
        <span class="open-slide">
            <a href="#" @click="slideMenu">
                <svg height="30" width="30">
                    <path d="M0,5 30,5" stroke="#fff" stroke-witdh="5"/>
                    <path d="M0,14 30,14" stroke="#fff" stroke-witdh="5"/>
                    <path d="M0,23 30,23" stroke="#fff" stroke-witdh="5"/>
                </svg>
            </a>    
        </span> 
        <ul class="navbar-nav">
            <li><a href="#showcase">Home</a></li>
            <li><a href="#section-a">Our Mission</a></li>
            <li><a href="#section-b">Events</a></li>
            <li><a href="#section-c">Get Involved</a></li>
            <li><a href="#section-d">Showcase</a></li>
            <li><a href="#section-e">Join US</a></li>
            <li><a href="#section-e">About Us</a></li>
        </ul>
    </nav>
    <div class="side-nav close" v-bind:class="{open: isSlideMenuOpen}">
        <a href="#" class="btn-close" @click="closeSideMenu">&times;</a>
        <a href="#showcase" @click="closeSideMenu">Home</a>
        <a href="#section-a" @click="closeSideMenu">Our Mission</a>
        <a href="#section-b" @click="closeSideMenu">Events</a>
        <a href="#section-c" @click="closeSideMenu">Get Involved</a>
        <a href="#section-d" @click="closeSideMenu">Showcase</a>
        <a href="#section-e" @click="closeSideMenu">Join US</a>
        <a href="#section-e" @click="closeSideMenu">About Us</a>
    </div>

    <!-- header showcase -->
    <header id="showcase" class="grid">
        <!-- <div class="bg-image"></div> -->
        <div class="bg-image" :style="{ 'background-image': 'url(' + appData.hero.img + ')' }"></div>
        <div class="content-wrap">
            <h1>{{appData.hero.title}}</h1>
            <p>
                {{appData.hero.desc}}<br/>{{appData.hero.desc1}}
            </p>
            <a href="#section-a" class="btn">Read More</a>
        </div>
    </header>

    <!-- Main Area -->
    <main id="main">
        <!-- Section A -->
        <section id="section-a" class="grid">
            <div class="content-wrap">
                <h2 class="content-title">Our Mission</h2>
                <div class="content-text">
                    <p v-html="appData.mission.statement"></p>
                    <ul>
                        <li v-for="stmt in appData.mission.statement1" style="list-style:none;">{{stmt}}</li>
                    </ul>

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
                <h2 class="content-title">Join US</h2>
                <ul>
                    <li v-for="(item, index) in appData.contactus" style="list-style:none;line-height:30px;" :key="index">
                       <icon :name="item.icon" scale="1.7" class="contactus-icons"></icon> - {{item.desc}}
                    </li>
                </ul>
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
        <div><icon name="copyright" scale="1.2" class="contactus-icons"></icon>{{appData.footer.org}}</div>
        <div>Built with <icon name="heart" scale="1.2" class="contactus-icons"></icon> by <a href="http://inspiredbits.org" target="_blank">{{appData.footer.copyright}}</a></div>
    </footer>

  </div>
</template>

<script>
import {db} from './firebase';
import VueGallery from 'vue-gallery';
import 'vue-awesome/icons/facebook-f';
import 'vue-awesome/icons/whatsapp';
import 'vue-awesome/icons/globe';
import 'vue-awesome/icons/at';
import 'vue-awesome/icons/copyright';
import 'vue-awesome/icons/heart';

export default {
  name: 'app',
  data () {
    return {
      appData: {
        hero: {
          title: "Let's Feed Faridabad",
          desc: "We Make A Living by What We Get, But We Make A Life By What We Give.",
          desc1: "An initiative to make a change.",
          img: "https://firebasestorage.googleapis.com/v0/b/smartmirror-143313.appspot.com/o/site-hero.jpg?alt=media&token=386ad45a-0e89-4164-a4f7-260684bf2c23"
        },
        events: [
            {
                eventtitle: "Winter Cloth Donation",
                summary: `Winter cloth donation event at one of the underprivileged schools in Sector 45. Clothes were distributed to the children. 
                        Students voluntarily said they wanted the distribution to be on need basis.`,
                img: "https://firebasestorage.googleapis.com/v0/b/smartmirror-143313.appspot.com/o/event-1.jpg?alt=media&token=15e6a929-c897-4c59-b0e4-3f5c1a210906"
            },{
              eventtitle: "Old Age Home",
              summary: `Old age home is the aged unfortunate and unexpected destination despite delivering all fortunes and expectation of their
                        beloved son or daughter...`,
              img: "https://firebasestorage.googleapis.com/v0/b/smartmirror-143313.appspot.com/o/visit_to_elderly.JPG?alt=media&token=7ff97d3b-a53e-42b8-b3a7-7dc82fbbede9"
            },{
              eventtitle: "Birthday with Kids",
              summary: `The Best way to earn an happiness is to give somebody food to eat & bring a smile on there face. Celebrating kids 
                        birthday served the purpose.`,
              img: "https://firebasestorage.googleapis.com/v0/b/smartmirror-143313.appspot.com/o/birthday_with_kids.JPG?alt=media&token=2e48823a-c7bb-4fdf-86ba-69d0416c2e23"
            }
        ],
        showcase: [
            "https://firebasestorage.googleapis.com/v0/b/smartmirror-143313.appspot.com/o/event-1.jpg?alt=media&token=15e6a929-c897-4c59-b0e4-3f5c1a210906",
            "https://firebasestorage.googleapis.com/v0/b/smartmirror-143313.appspot.com/o/site-hero.jpg?alt=media&token=386ad45a-0e89-4164-a4f7-260684bf2c23",
            "https://firebasestorage.googleapis.com/v0/b/smartmirror-143313.appspot.com/o/education.JPG?alt=media&token=0acd1b7f-f6a6-47a1-b14e-7bf67faec202",
            "https://firebasestorage.googleapis.com/v0/b/smartmirror-143313.appspot.com/o/birthday_with_kids.JPG?alt=media&token=2e48823a-c7bb-4fdf-86ba-69d0416c2e23",
            "https://firebasestorage.googleapis.com/v0/b/smartmirror-143313.appspot.com/o/visit_to_elderly.JPG?alt=media&token=7ff97d3b-a53e-42b8-b3a7-7dc82fbbede9"
        ],
        aboutorganization: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, tenetur consectetur nulla vero est eligendi. Quisquam facilis nihil quis explicabo ut, aspernatur sunt adipisci sequi quia ratione ipsa nobis praesentium.',
        contactus: [{
                    icon: "whatsapp",
                    desc: "9999411300 & Group: Lets Feed Faridabad"
                },{
                    icon: "facebook-f",
                    desc: "Join the Group - Lets Feed Faridabad"
                },{
                    icon: "at",
                    desc: "letsfeedfaridabad@gmail.com"
                },{
                    icon: "globe",
                    desc: "letsfeedfaridabad.org"
            }],
        mission: {
            statement: 'We have the power to advance social progress in our community and around us. <br/> "<i>Give back to the Society</i>" attitude will help to achieve the same.',
            statement1: [
                "Help the Needy",
                "Education for Underprivileged Kids",
                "Each one Teach One",
                "Support Old Age Home",
                "Donate a Bread",
                "Cleaniless in our Society",
                "Cloth Donation",
                "Awareness in the Society to make a change"
            ]
        },
        
        footer: {
          org: "Let's Feed Faridabad",
          copyright: "inspiredbits.org"
        },
        getinvolved: {
          summary: 'There are multiple ways to get involved',
          options: [
              "Educating Children", 
              "Old Age Home",
              "Donate Food",
              "Become a Volunteer",
              "Spread the word",
              "Celebrate Birthday with Underprivileged"
            ]
        }
      },
      index: null,
      isSlideMenuOpen: false  
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
        // self.appData = snapshot.val();
        // return snapshot.val();
      });
  },
  methods: {
    submitName: function() {      
      namesRef.push({name: this.name, edit: false});
    },
    slideMenu: function() {
        this.isSlideMenuOpen = true;
    },
    closeSideMenu: function() {
        this.isSlideMenuOpen = false;
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

/* Nav Menu & Side Bar */
.navbar {
    background-color: #333;/*#3b5998;*/
    overflow: hidden;
    height:63px;
    width: 100%;
    position: fixed;
    opacity: .6;
    top:0px;
}

.navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: 700;
}

.navbar ul {
    margin: 8px 0 0 0;
    list-style: none;
}

.navbar a:hover {
    background-color: #ddd;
    color: #000;
}

.side-nav {
    height:100%;
    width:0px;
    position: fixed;
    z-index:1;
    top:0;
    left:0;
    background-color: #111;
    /* opacity: 0.9; */
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.3s;
    text-align: left;
}

.side-nav a {
    padding: 10px 10px 10px 30px;
    text-decoration: none;
    font-size: 22px;
    color: #ccc;
    display: block;
    transition: 0.3s;
}
.side-nav a:hover {
    color: #fff;
}
.side-nav .btn-close {
    position: absolute;
    top: 0px;
    right:22px;
    font-size: 36px;
    margin-left: 50px;
}



.open {
    width: 250px !important;
}

.close {
    width: 0px;
}

.contactus-icons {
    padding: 0px 5px;
    vertical-align: middle;
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
  .navbar {
      position: absolute;
      background: transparent;
  }
  .navbar-nav {
        display:none;
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
        columns: 1;
        /* column-gap: 2em; */
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

     .open-slide {
        display:none;
    }
}
</style>
