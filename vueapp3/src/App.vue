<template>
  <v-app>
    <v-navigation-drawer app>
      <p>Menu</p>
      <v-btn depressed small color="primary">Enter</v-btn>
      <v-btn depressed small color="error">Back</v-btn>
      
       
    </v-navigation-drawer>
    

    <v-app-bar app>
      <p>ประชาธิปไตย</p>
      
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <p>footer</p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      message: "RMUTL",
    };
  },
};
</script>

<style>
</style>