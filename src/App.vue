<template>
  <v-app>
    <v-app-bar
      app
      color="blue-grey darken-3"
      dark
    >
     
    </v-app-bar>

    <v-main>
      <v-container fluid grid-list-md>
        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm10 md16>
              <select-file />
            </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SelectFile from '@/components/SelectFile'
export default {
  name: 'App',

  components: {
    SelectFile
  },

  data: () => ({
    //
  }),
};
</script>
