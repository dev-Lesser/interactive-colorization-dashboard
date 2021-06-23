<template>
  <v-app>
    <v-app-bar
      app
      color="blue-grey darken-3"
      dark
    >
    <v-app-bar-nav-icon @click.stop="$store.state.showDrawer = !$store.state.showDrawer"></v-app-bar-nav-icon>
     
    </v-app-bar>

    <v-main>
      <home-view />
    </v-main>
  </v-app>
</template>

<script>
import HomeView from '@/components/HomeView'
export default {
  name: 'App',

  components: {
    HomeView
  },

  data: () => ({
    //
  }),
  computed:{

  }
};
</script>
