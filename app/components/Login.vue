<template>
  <Page class="login landing" actionBarHidden="true">
    <FlexboxLayout flexDirection="column" justifyContent="space-between" alignItems="stretch" class="login-container background">
      <StackLayout verticalAlignment="bottom" class="login-field" style="text-align: center;" height="40%">
        <Image src="res://drawable/logo" width="200" class="login-image"/>
      </StackLayout>
      <StackLayout verticalAlignment="top" class="login-field" height="60%">
        <TextField height="50" hint="Email" keyboardType="email" v-model="form.email" class="login-input"/>
        <TextField height="50" hint="Password" secure="true" v-model="form.password" class="login-input"/>
        <Button height="50" class="login-btn" text="Login" @tap="onLoginClick()"/>
        <Label text="Forgot Password?" class="forgot-text" @tap="forgot()"></Label>
        <AbsoluteLayout style="margin: 5% 10% 5% 7%; text-align: center; color: white;">
          <StackLayout class="hr-light" left="10" top="15"></StackLayout>
          <StackLayout left="10" top="5" style="width: 100%">
            <Label text="OR" width="30" backgroundColor="#880ED4"/>
          </StackLayout>
        </AbsoluteLayout>
        <Button height="50" class="login-btn" text="Create an account" @tap="$navigator.navigate('/signup')"/>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
  import { mapActions, mapMutations, mapGetters } from 'vuex'
  import Globals from '../mixins/globals'
  // const appversion = require("@nativescript/appversion")
  export default {
   mixins: [Globals],
  data: ()  => ({
     // isUpdated: true,
    form: {},
     waiting: false,
     // version: '',
  }),
   // computed: {
   //   ...mapGetters('user', ['version']),
   //   buttonText() {
   //     return this.waiting ? 'Logging in...' : 'Login'
   //   }
   // },
   methods: {
    ...mapActions('user', ['LOGIN_USER']),
    ...mapMutations('user', ['SET_USER']),
    forgot () {
      console.log('pasmo ka')
    },
    onLoginClick() {

       /*this.checkVersion()
       .then(data => {
         console.log(data)
       })*/
       // if(this.hasInternet()) {
         this.waiting = true
         this.LOGIN_USER(this.form)
         .then(response => {
           this.waiting = false
           this.SET_USER(response.user)
           this.$navigator.navigate('/home', { clearHistory: true })
         })
         .catch(error => {
           this.waiting = false
           console.log('catch: ', error.data.error)
           this.snackBar("password", "Error", "#e6494b", "Incorrect email or password")
         })
       /*}
       else {
         this.snackBar("disconnected", "No connection", "#f58a35", "Wifi and Mobile data disabled")
       }*/
    },
  },
   // created() {
   //   appversion.getVersionName()
   //   .then(version => {
   //      this.version = version
   //   })
   // }
  }
</script>