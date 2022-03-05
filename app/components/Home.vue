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
                            <!-- <StackLayout class="circle-wrapper">
                              <Image src="~/assets/images/images.jpg" height="100%" width="100%" class="thumb"/>
                            </StackLayout> -->
                            <StackLayout backgroundColor="#880ED4" height="100%" width="100%" style="border-radius: 50%; display: flex; flex-direction: column; justify-content: center; padding-top: 13px;">
                              <Label style="font-size: 25px; color: white; text-align: center;" :text="`${messages[index].first_name.charAt(0)}${messages[index].last_name.charAt(0)}`"></Label>
                            </StackLayout>
                          </StackLayout>
                        </FlexboxLayout>
                        <FlexboxLayout flexDirection="column" style="padding: 15px;">
                          <FlexboxLayout justifyContent="space-between">
                            <Label :class="messages[index].viewed === false ? 'black-text' : ''" width="70%" :text="`${messages[index].first_name} ${messages[index].last_name}`" fontWeight="bold" style="font-size: 14px;"/>
                            <Label :class="messages[index].viewed === false ? 'black-text' : ''" :text="'12:58'" style="font-size: 12px; text-align: right"/>
                          </FlexboxLayout>
                          <FlexboxLayout>
                            <Label :class="messages[index].viewed === false ? 'black-text' : ''" :text="messages[index].text" fontWeight="bold" style="font-size: 12px;"/>
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
        first_name: 'Princess',
        last_name: 'Garde',
        text: 'Message 1',
        viewed: false
      },
      {
        first_name: 'Alan',
        last_name: 'Golpeo',
        text: 'Message 2',
        viewed: true
      },
      {
        first_name: 'Raymund',
        last_name: 'Hinlog',
        text: 'Message 3',
        viewed: true
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
