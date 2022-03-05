<template>
    <Page class="landing">
        <ActionBar style="background: #fff; box-shadow: none;">
          <GridLayout width="100%" columns="auto, *" rows="auto, *">
            <Image style="margin-right: 50px;" row="0" col="0" top="0" src="~/assets/images/hamburger.png" height="20" width="20" @tap="$refs.drawer.nativeView.showDrawer()"/>
            <Label style="text-align:left; font-weight: bold; font-size: 20px;" row="0" col="1" text="Messages"></Label>
          </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
          <StackLayout ~drawerContent backgroundColor="#ffffff">
            <Label class="drawer-item" text="Item 1"/>
            <Label class="drawer-item" text="Item 2"/>
            <Label class="drawer-item" text="Item 3"/>
          </StackLayout>

          <GridLayout ~mainContent columns="*" rows="*">
            <FlexboxLayout flexDirection="column">
              <StackLayout verticalAlignment="center" style="margin-top: 30px; height: 350px;" v-if="messages.length > 9">
                <TextField height="50" hint="Search Message" v-model="form.first_name" class="input-search"/>
              </StackLayout>
              <StackLayout verticalAlignment="center" style="margin-top: 30px;" v-else>
                <TextField height="50" hint="Search Message" v-model="form.first_name" class="input-search"/>
              </StackLayout>

              <ScrollView>
                <StackLayout orientation="vertical" style="margin: 20px 50px">
                  <FlexboxLayout flexDirection="column" v-for="(item, index) in messages" :key="index" elevation="5" height="60" width="100%" class="logout-btn" style="margin: 5px 0;">
                    <MDCardView dock="bottom" elevation="0" width="100%" height="100%" class="logout-btn" @tap="$navigator.navigate('/messenger')">
                      <FlexboxLayout backgroundColor="#f9f9f9">
                        <FlexboxLayout width="60" style="padding: 15px;">
                          <StackLayout class="avatar">
                            <StackLayout class="circle-wrapper">
                              <Image src="~/assets/images/images.jpg" height="100%" width="100%" class="thumb"/>
                            </StackLayout>
                          </StackLayout>
                        </FlexboxLayout>
                        <FlexboxLayout flexDirection="column" style="padding: 15px;">
                          <FlexboxLayout justifyContent="space-between">
                            <Label width="70%" :text="messages[index].sender" fontWeight="bold" style="font-size: 14px; color: #880ED4;"/>
                            <Label :text="'12:58'" style="font-size: 12px; text-align: right"/>
                          </FlexboxLayout>
                          <FlexboxLayout>
                            <Label :text="messages[index].text" fontWeight="bold" style="font-size: 12px;"/>
                          </FlexboxLayout>
                        </FlexboxLayout>
                      </FlexboxLayout>
                    </MDCardView>
                  </FlexboxLayout>
                </StackLayout>
              </ScrollView>

            </FlexboxLayout>
          </GridLayout>
        </RadSideDrawer>
    </Page>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data:() => ({
    msg: 'Hello World!',
    form:{},
    messages: [
      {
        sender: 'User 1',
        text: 'Message 1'
      },
      {
        sender: 'User 2',
        text: 'Message 2'
      },
      {
        sender: 'User 3',
        text: 'Message 3'
      }
    ]
  }),
  methods: {
    ...mapActions('user', ['SEARCH_USER', 'LOAD_CONTACTS']),
    temporaryLoader() {
      this.LOAD_CONTACTS() 
      .then(response => {
        console.log(response)
      })
    },
  }
}
</script>
