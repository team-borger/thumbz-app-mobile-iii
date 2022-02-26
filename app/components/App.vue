<template>
  <page actionBarHidden="true">
    <!-- <Navigator :defaultRoute="isLoggedIn ? '/home' : '/login'"/> -->
    <Navigator :defaultRoute="'/landing'"/>
  </page>
</template>
<script>
  // import {getString, setString} from "@nativescript/core/application-settings"
  // export default {
  //   computed: {
  //     isLoggedIn() {
  //       return getString('user') ? true : false
  //     }
  //   }
  // }
</script>