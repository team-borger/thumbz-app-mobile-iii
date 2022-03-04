<template>
  <Page class="login landing" actionBarHidden="true">
    <FlexboxLayout flexDirection="column" class="login-container background">
      <StackLayout verticalAlignment="center" class="login-field" style="text-align: center;">
        <Label text="Sign Up" style="font-weight: bold; color: white; font-size: 20px;"></Label>
      </StackLayout>
      <StackLayout verticalAlignment="center" class="login-field">
        <TextField height="50" hint="First name" v-model="form.first_name" class="input-rounded"/>
        <TextField height="50" hint="Middle name" v-model="form.middle_name" class="input-rounded"/>
        <TextField height="50" hint="Last name" v-model="form.last_name" class="input-rounded"/>
        <TextField height="50" hint="Mobile number" v-model="form.phone" class="input-rounded"/>
        <TextField height="50" hint="Email" v-model="form.email" class="input-rounded"/>
        <TextField height="50" hint="Password" secure="true" v-model="form.password" class="input-rounded"/>
        <TextField height="50" hint="Confirm Password" secure="true" v-model="form.confirm_password" class="input-rounded"/>
        <Button height="50" class="login-btn" text="Register" @tap="register()"/>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>
<script>
  import { mapActions, mapMutations, mapGetters } from 'vuex'
  export default {
    data: () => ({
      form: {},
    }),
    methods: {
      ...mapActions('user', ['REGISTER_USER']),
      async register() {
        this.REGISTER_USER(this.form)
        .then(response => {
          console.log(response)
          this.$navigator.navigate('/login')
        })
        .catch(data => {
          console.log(data.response)
        })
        console.log(response)
      }
    },
  }
</script>
