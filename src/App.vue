<template>
  <v-app>
  <div id="app">
    <v-toolbar id="toolbar">
      <v-toolbar-title><img src="./assets/GS.png" width="200" alt=""></v-toolbar-title>
      <router-link id="navbar-text" to="/"><v-toolbar-title>Home</v-toolbar-title></router-link>
      <router-link id="navbar-text" to="/Search"><v-toolbar-title>Search</v-toolbar-title></router-link>
      <router-link id="navbar-text" to="/login"><v-toolbar-title>Register/Login</v-toolbar-title></router-link>
      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view/>
  </div>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navbar-text{
  text-decoration: none;
  color: #ffffff;
  margin-right: 30px;
  border-bottom: 3px solid rgba(255, 255, 255, 0);
  transition: 0.3s;
}

#navbar-text:hover{
  border-bottom: 3px solid #ffffff;
}

#toolbar {
  background-color: #ff3300
}
</style>
