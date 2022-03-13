<template>
  <Page class="login landing" actionBarHidden="true">

    <FlexboxLayout flexDirection="column" alignItems="stretch" class="login-container background">
      <StackLayout verticalAlignment="center" style="text-align: center;" height="10%">
        <Label text="Create an Account" style="font-weight: bold; color: white; font-size: 20px;"></Label>
      </StackLayout>
      <ScrollView height="80%">
        <StackLayout verticalAlignment="top" style="padding-top: 50px; padding-bottom: 50px;">
          <TextField height="50" hint="First name" v-model="form.first_name" class="login-input"/>
          <TextField height="50" hint="Middle name" v-model="form.middle_name" class="login-input"/>
          <TextField height="50" hint="Last name" v-model="form.last_name" class="login-input"/>
          <TextField height="50" hint="Mobile number" v-model="form.phone" class="login-input"/>
          <TextField height="50" hint="Email" v-model="form.email" class="login-input"/>
          <TextField height="50" hint="Password" secure="true" v-model="form.password" class="login-input"/>
          <TextField height="50" hint="Confirm Password" secure="true" v-model="form.confirm_password" class="login-input"/>
          <Button height="50" class="login-btn" text="Register" @tap="register()"/>
        </StackLayout>
      </ScrollView>
      <StackLayout verticalAlignment="center" style="text-align: center;" height="10%">
        <Label style="font-size: 15px; color: white; text-align: center;" @tap="$navigator.navigate('/login')">
          <FormattedString>
            <Span class="fas" text.decode="&#xf104;"/>
            <Span class="fas" text=" "/>
            <Span class="fas" text=" "/>
            <Span class="fas" text="Back to Login"/>
          </FormattedString>
        </Label>
      </StackLayout>
    </FlexboxLayout>

  </Page>
</template>
<script>
  import { mapActions, mapMutations, mapGetters } from 'vuex'
  import Globals from '../mixins/globals'
  export default {
    mixins: [Globals],
    data: () => ({
      form: {},
      warnings: {},
    }),
    methods: {
      ...mapActions('user', ['REGISTER_USER']),
      async register() {
        this.REGISTER_USER(this.form)
        .then(response => {
          console.log(response)
          this.$navigator.navigate('/login')
        })
        .catch(error => {
          const x = error.data.errors
          
          if( x.email[0] == 'Email already exists.' ) {
            console.log(2.1)
            this.snackBar("error", "Error", "#e6494b", x.email[0])
          }
          else if( x.confirm_password[0] == 'The confirm password and password must match.' ) {
            console.log(3.1)
            this.snackBar("error", "Error", "#e6494b", "Passwords do not match!")
          }
          else if( x.confirm_password || x.email || x.first_name || x.last_name || x.password || x.phone ) {
            console.log(1)
            this.snackBar("error", "Error", "#e6494b", "Please fill all the fields")
          }
          else {
            console.log(x)
          }
        })
        // console.log(response)
      }
    },
  }
</script>
