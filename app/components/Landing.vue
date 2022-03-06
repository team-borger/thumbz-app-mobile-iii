<template>
  <Page class="landing" actionBarHidden="true">
    <FlexboxLayout flexDirection="column" justifyContent="space-between" alignItems="stretch" class="login-container background">
      <StackLayout verticalAlignment="center" class="login-field" style="text-align: center;" height="50%">
        <Image src="res://drawable/logo" width="300" class="login-image"/>
      </StackLayout>
      <StackLayout verticalAlignment="center" class="login-field" style="text-align: center;">
        <Button height="50" class="landing-btn" style="color: #4f1995;" text="Log In" @tap="$navigator.navigate('/login')"/>
        <Button height="50" class="signup-btn" text="Sign Up" @tap="$navigator.navigate('/signup')"/>
      </StackLayout>
    </FlexboxLayout>
  </Page>
</template>

<script>
  export default {
    data: ()  => ({

    }),
    methods: {
    },
  }
</script>