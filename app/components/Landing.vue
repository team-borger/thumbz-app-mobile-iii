<template>
  <Page class="landing" actionBarHidden="true">
    <FlexboxLayout flexDirection="column" justifyContent="space-between" alignItems="stretch" class="login-container background">
      <StackLayout verticalAlignment="center" class="login-field" style="text-align: center;">
        <Image src="res://drawable/logo2" width="200" class="login-image"/>
        <Label text="ThumbzApp" style="font-weight: bold; color: white; font-size: 25px;"></Label>
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