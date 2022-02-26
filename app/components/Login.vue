<template>
  <Page class="login landing" actionBarHidden="true">
    <FlexboxLayout flexDirection="column" justifyContent="space-between" alignItems="stretch" class="login-container background">
      <StackLayout verticalAlignment="center" class="login-field" style="text-align: center;">
        <Image src="res://drawable/logo2" width="100" class="login-image"/>
        <Label text="ThumbzApp" style="font-weight: bold; color: white; font-size: 15px;"></Label>
      </StackLayout>
      <StackLayout verticalAlignment="center" class="login-field">
        <TextField height="50" hint="Email" v-model="form.email" class="input-rounded"/>
        <TextField height="50" hint="Password" secure="true" v-model="form.password" class="input-rounded"/>
        <!-- <Button height="50" class="login-btn" :text="buttonText" @tap="onLoginClick" :isEnabled="!waiting"/> -->
        <Button height="50" class="login-btn" text="Login" @tap="$navigator.navigate('/home')"/>
      </StackLayout>
      <StackLayout orientation="horizontal">
      <!-- <Button width="44%" class="hyperlink-gensan" @tap="camiguinLink"/>
        <Button width="44%" class="hyperlink-infosoft" @tap="infosoftLink"/> -->
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
  // import { mapActions, mapMutations, mapGetters } from 'vuex'
  // import Globals from '../mixins/globals'
  // const appversion = require("@nativescript/appversion")
  export default {
   // mixins: [Globals],
   data: ()  => ({
     // isUpdated: true,
     form: {},
     // waiting: false,
     // version: '',
   }),
   // computed: {
   //   ...mapGetters('user', ['version']),
   //   buttonText() {
   //     return this.waiting ? 'Logging in...' : 'Login'
   //   }
   // },
   methods: {
     // ...mapActions('user', ['LOGIN_USER']),
     // ...mapMutations('user', ['SET_USER']),
     // onLoginClick() {
     //   this.checkVersion()
     //   .then(data => {
     //     console.log(data)
     //   })
     //   if(this.hasInternet()) {
     //     this.waiting = true
     //     this.LOGIN_USER(this.form)
     //     .then(response => {
     //       this.waiting = false
     //       this.SET_USER(response)
     //       console.log('success', response)
     //       this.$navigator.navigate('/home', { clearHistory: true })
     //     })
     //     .catch(error => {
     //       this.waiting = false
     //       console.log('catch', error.data)
     //       this.snackBar("password", "Error", "#e6494b", error.data)
     //     })
     //   }
     //   else {
     //     this.snackBar("disconnected", "No connection", "#f58a35", "Wifi and Mobile data disabled")
     //   }
     // },
   },
   // created() {
   //   appversion.getVersionName()
   //   .then(version => {
   //      this.version = version
   //   })
   // }
  }
</script>