
<!-- This project was made by Marcos Pinzón as an assignment for OneWater.org.

     It was completed in around 14 hours. No external help was used apart from
     Quasar documentation or google searches for specific language features.
    
     Following the recomentation on Quasar's introductory guide of using Vue Single File 
     Components (SFC) I included HTML, CSS and JS in this file. -->
  
  <template>
    <q-header :elevated="false" class="custom-navbar">
      <q-toolbar class="nav_toolbar">

        <!-- Left Logo -->
        <q-btn flat dense to="/" exact class="onewater_logo">
          <q-img src="../assets/logo.svg" alt="OneWater Logo" style="width: 185px;" />
        </q-btn>

        <q-space/>

        <!-- Right Buttons -->
        <div class="nav_icons">

          <div class="search-container">
            <q-btn v-if="isWideScreen" flat dense to="/search" class="icon-button" @mouseenter="showSearchBox = true" @mouseleave="hideSearchBox">
              <q-icon name="search_icon" size="30px" />
            </q-btn>
            <div v-if="showSearchBox" class="search-box" @mouseenter="cancelHideSearchBox" @mouseleave="hideSearchBox">
              <q-input v-model="searchText" dense placeholder="search" />
            </div>
          </div>
          <q-btn v-if="isWideScreen" flat dense to="/about" class="text_button"> about </q-btn>
          <q-btn v-if="isWideScreen" flat dense @click="toggleEventsDrawer" class="text_button"> events </q-btn>
          <q-btn v-if="isWideScreen" flat dense to="/engage" class="text_button"> engage </q-btn>
          <q-btn v-if="isWideScreen" flat dense to="/login" exact class="icon-button">
            <q-img src="../assets/user_icon.svg" alt="User_Icon" style="width: 30px; height: 30px;"/>
          </q-btn>

          <!-- Drawer Button for non wide screens -->
          <q-btn v-if="!isWideScreen" flat dense @click="toggleMenuDrawer">
            <q-img src="../assets/menu_icon.svg" alt="Menu_Icon" style="width: 45px;"/>
          </q-btn>

        </div>
      </q-toolbar>

      <!-- Scrolling text -->
      <hr>
      <div class="marquee_container">
        <div class="marquee">
          <div class="marquee_text">
            <strong>Prize Alert:</strong> 
            The best photostories will be awarded €1500! 🏆 
            In partnership with UNESCO and the City of Burghausen, 
            we're thrilled to announce the 📸 Water for Peace and 
            Prosperity Photo Contest 🌊! 
            <strong>Deadline for Submissions:</strong> 
            January 14, 2024. For more details and to submit your entry 
            <a href="https://onewater.blue/contest/photostory-contest-leveraging-water-for-peace-and-prosperity-79eef05a21b9" style="text-decoration: underline;">[Click here]</a>.
          </div>
        </div>
      </div>
      <hr>

      <!-- Right Menu Drawer -->
      <q-drawer v-model="showMenuDrawer" side="right" :width="250" v-if="!isWideScreen">
        <q-list class="drawer_items">

          <!-- Language selector -->
          <q-item class="drawer_item language_selector">
            <q-select v-model="language" :options="languageOptions" label="Language" dense emit-value map-options options-dense style="min-width: 100px" @change="changeLanguage"/>
          </q-item>

          <!-- Menu items -->
          <q-item to="/search" class="drawer_item">
            <q-item-section avatar>
              <q-img src="../assets/search_icon.svg" alt="Search_Icon" class="menuDrawer_img"/>
            </q-item-section>
            <q-item-section> search </q-item-section>
          </q-item>
          <q-item to="/about" class="drawer_item">
            <q-item-section avatar>
              <q-img src="../assets/about_icon.svg" alt="About_Icon" class="menuDrawer_img"/>
            </q-item-section>
            <q-item-section>about</q-item-section>
          </q-item>
          <q-item to="/events" class="drawer_item">
            <q-item-section avatar>
              <q-img src="../assets/events_icon.svg" alt="Events_Icon" class="menuDrawer_img"/>
            </q-item-section>
            <q-item-section>events</q-item-section>
          </q-item>
          <q-item to="/engage" class="drawer_item">
            <q-item-section avatar>
              <q-img src="../assets/engage_icon.svg" alt="Engage_Icon" class="menuDrawer_img"/>
            </q-item-section>
            <q-item-section>engage</q-item-section>
          </q-item>
          <q-item to="/login" class="drawer_item">
            <q-item-section avatar>
              <q-img src="../assets/user_icon.svg" alt="Profile_Icon" class="menuDrawer_img"/>
            </q-item-section>
            <q-item-section>profile</q-item-section>
          </q-item>
          <q-item to="/podcasts" class="drawer_item">
            <q-item-section avatar>
              <q-img src="../assets/podcast_icon.svg" alt="Podcasts_Icon" class="menuDrawer_img"/>
            </q-item-section>
            <q-item-section>podcasts</q-item-section>
          </q-item>

          <!-- Collections -->
          <q-item class="drawer_item">
              <h5>Collections</h5>
          </q-item>
          <q-item>
            <q-list class="drawer_list">
              <q-item>Biodiversity</q-item>
              <q-item>Circular Economy</q-item>
              <q-item>Cities</q-item>
              <q-item>Climate Change</q-item>
              <q-item>Conflict</q-item>
              <q-item>...</q-item>
            </q-list>
          </q-item>

        </q-list>
      </q-drawer>

      <!-- Events Menu Drawer -->
      <q-drawer v-model="showEventsDrawer" side="right" :width="250" v-if="isWideScreen">
        <q-list class="drawer_items">
          <q-item>
            <q-item-section avatar>
              <q-img src="https://firebasestorage.googleapis.com/v0/b/onewater-website.appspot.com/o/events%2F16827a3b-b67e-4534-970d-391975ac4e8f%2Fphoto?alt=media&token=32283df5-1aa2-4a29-8a02-8204410cdef3"
                alt="Somos OceanoS image" class="eventDrawer_img" />
            </q-item-section>
            <q-item-section class="imgText">World Water Week - Somos OceanoS screening</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-img src="https://firebasestorage.googleapis.com/v0/b/onewater-website.appspot.com/o/events%2F9d0b4a7b-6e2a-4e69-b28e-4804dc178d3d%2Fphoto?alt=media&token=79249540-5b46-4fc7-a92e-77f4eee7ed68"
                alt="Pubquiz image" class="eventDrawer_img" />
            </q-item-section>
            <q-item-section class="imgText">World Water Week - Pubquiz</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

    </q-header>
  </template>

  <!-- Navbar Logic -->
  <script>
  export default {
    name: 'CustomNavBar',
    data() {
      return {
        showMenuDrawer: false,
        showEventsDrawer: false,
        showSearchBox: false,
        searchText: "",
        language: null,
        languageOptions: [
          { label: 'Arabic', value: 'ar' },
          { label: 'German', value: 'de' },
          { label: 'English', value: 'en' },
          { label: 'French', value: 'fr' },
          { label: 'Portuguese', value: 'po' },
        ],
      };
    },
    computed: {
      isWideScreen() {
        return this.$q.screen.width > 915;
      },
    },
    methods: {
      changeLanguage() {
        console.log('Selected Language:', this.locale);
      },

      toggleMenuDrawer() {
        this.showMenuDrawer = !this.showMenuDrawer;
      },
      toggleEventsDrawer() {
        this.showEventsDrawer = !this.showEventsDrawer;
      },

      hideSearchBox() {
        this.hideTimeout = setTimeout(() => {this.showSearchBox = false;}, 50);
      },
      cancelHideSearchBox() {
        clearTimeout(this.hideTimeout);
      },
    },
  };
  </script>

  <!-- Page style -->
  <style scoped>

  /* General navbar style */
  .custom-navbar {
    background-color: white;
    color: black;
  }
  .nav_toolbar{
    margin-bottom: 10px;
  }
  .onewater_logo{
    margin-left: 35px;
    margin-top: 6px;
  }
  .nav_icons{
    margin-right: 60px;
    margin-top: 15px;
  }
  .text_button{
    padding: 12px;
    font-size: 1.4rem;
    font-weight: 100;
    font-family: bely;
    text-transform: lowercase;
    transition-duration: .3s;
  }
  .text_button:hover, .icon-button:hover {
    color: rgb(160 200 255);
    background-color: none;
  }
  .icon-button, .q-icon, .material-icons, .search-container{
    display: inline-block;
    background-color: transparent;
  }

  /* Drawer styles */
  .drawer_items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }
  .drawer_item {
    margin-left: 42px;
    font-size: 22px;
    font-weight: 395;
  }
  .drawer_item h5{
    font-weight: bold;
  }
  .menuDrawer_img{
    width: 25px;
    height: 25px;
  }
  .eventDrawer_img {
    width: 220px;
    height: 220px;
    border: solid 1px
  }
  .language_selector{
    margin-left: 60px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  .imgText {
    position: absolute;
    bottom: 8px;
    width: 220px;
    background-color: #FFFFFF;
    font-size: 16px;
    text-align: center;
  }
  .drawer_list{
    list-style-type: none;
    font-size: 18px;
    font-weight: 390;
  }

  /* Marquee */
  .marquee_container {
    overflow: hidden;
  }
  .marquee {
    display: flex;
    animation: scroll-marquee 30s linear infinite;
  }
  .marquee_text {
    white-space: nowrap;
    padding-right: 2.4rem;
  }
  @keyframes scroll-marquee {
    0% {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  /* Search box */
  .search-container {
    position: relative;
  }
  .search-box {
    position: absolute;
    top: 0;
    left: -220px;
    width: 220px;
    padding: 5px;
    background-color: rgb(210, 210, 210);
    box-shadow: none;
    z-index: 1;
  }
  </style> 