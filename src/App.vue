<template>
  <v-app>
  <div id="app">
    <v-toolbar id="toolbar">
      <v-toolbar-title @click.stop="drawer = !drawer"><img src="./assets/GS.png" width="200" alt=""></v-toolbar-title>
      <!-- <router-link id="navbar-text" to="/"><v-toolbar-title>Home</v-toolbar-title></router-link>
      <router-link id="navbar-text" to="/Search"><v-toolbar-title>Search</v-toolbar-title></router-link>
      <router-link id="navbar-text" to="/login"><v-toolbar-title>Register/Login</v-toolbar-title></router-link> -->
      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view/>
  </div>

  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    dark
  >
    <img src="./assets/GS.png" width="200" alt="">
    <v-list v-if="this.$store.state.user == null">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        avatar
      >
        <v-list-tile-content>
          <router-link id="router-link" :to="item.link" >
            <v-list-tile-title class="navbar-text" v-text="item.title"></v-list-tile-title>
          </router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list v-else>
      <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
      >
        <v-list-tile-content v-if="item.link != '/login'">
          <router-link :to="item.link" >
            <v-list-tile-title class="navbar-text" v-text="item.title"></v-list-tile-title>
          </router-link>
        </v-list-tile-content>
        <v-list-tile-content v-else @click="logout">
          <router-link :to="'/'">
            <v-list-tile-title class="navbar-text" v-text="'Logout'"></v-list-tile-title>
          </router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  </v-app>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data(){
      return {
        drawer: null,
        items: [
          { title:'HOME', link:'/home'},
          { title:'SEARCH', link:'/search'},
          { title:'REGISTER / LOGIN', link:'/login'}
        ],
        mini: false,
        right: null
      }
    },
    created(){
      this.checkIsLoggedIn()
    },
    methods:{
      ...mapActions([
        'logout',
        'checkIsLoggedIn'
      ])
    }
  }
</script>

<style lang="scss">
#router-link{
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-text{
  color: #ffffff;
  font-size: 16px;
  margin-right: 30px;
  border-bottom: 3px solid rgba(255, 255, 255, 0);
  transition: 0.5;
}

.navbar-text:hover{
  color: #ff3300;
  border-bottom: 3px solid #ff3300;
}

#toolbar {
  background-color: #ff3300
}
</style>
