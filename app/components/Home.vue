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
            <Button height="50" class="" text="Logout" @tap="onLogoutBtnClick()"/>
            <!-- <Label class="drawer-item" text="Item 1"/>
            <Label class="drawer-item" text="Item 2"/>
            <Label class="drawer-item" text="Item 3"/> -->
          </StackLayout>

          <GridLayout ~mainContent columns="*" rows="*">
            <FlexboxLayout flexDirection="column">
              <StackLayout verticalAlignment="center" style="margin-top: 30px; height: 350px;" v-if="contacts.length > 9">
                <TextField height="50" hint="Search" v-model="form.first_name" class="input-search" @tap="$navigator.navigate('/search')"/>
              </StackLayout>
              <StackLayout verticalAlignment="center" style="margin-top: 30px;" v-else>
                <TextField height="50" hint="Search" v-model="form.first_name" class="input-search" @tap="$navigator.navigate('/search')"/>
              </StackLayout>

              <ScrollView>
                <StackLayout orientation="vertical" style="margin: 20px 50px">
                  <FlexboxLayout flexDirection="column" v-for="(item, index) in contacts" :key="index" elevation="5" height="60" width="100%" class="logout-btn" style="margin: 5px 0;">
                    <MDCardView dock="bottom" elevation="0" width="100%" height="100%" class="logout-btn" @tap="onContactClick(item)">
                      <FlexboxLayout backgroundColor="#f9f9f9">
                        <FlexboxLayout width="60" style="padding: 15px;">
                          <StackLayout class="avatar">
                            <StackLayout
                              backgroundColor="#880ED4"
                              height="100%" width="100%"
                              style="border-radius: 50%; display: flex; flex-direction: column; justify-content: center; padding-top: 13px;"
                            >
                              <Label style="font-size: 25px; color: white; text-align: center;"
                                :text="`${item.contact.first_name.charAt(0)}${item.contact.last_name.charAt(0)}`"
                              />
                            </StackLayout>
                          </StackLayout>
                        </FlexboxLayout>
                        <FlexboxLayout flexDirection="column" style="padding: 15px;">
                          <FlexboxLayout justifyContent="space-between">
                            <Label :class="item.viewed === false ? 'black-text' : ''" width="70%"
                              fontWeight="bold" style="font-size: 14px;"
                              :text="`${item.contact.first_name} ${item.contact.last_name}`"
                            />
                            <Label :class="item.viewed === false ? 'black-text' : ''"
                              style="font-size: 12px; text-align: right"
                              :text="'12:58'"
                            />
                          </FlexboxLayout>
                          <FlexboxLayout>
                            <Label :class="item.viewed === false ? 'black-text' : ''" 
                              fontWeight="bold" style="font-size: 12px;"
                              :text="item.spoiler_chat"
                            />
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
import { mapActions, mapMutations } from 'vuex'
export default {
  data:() => ({
    msg: 'Hello World!',
    form:{},
    contacts: []
  }),
  methods: {
    ...mapMutations('user', ['RESET_LOGIN_STATE', 'SET_ACTIVE_CHAT']),
    ...mapActions('user', ['SEARCH_USER', 'LOAD_CONTACTS']),
    loadContacts() {
      this.LOAD_CONTACTS()
      .then(response => {
        this.$nextTick(() => {
          this.contacts = response
          console.log('asdadas', this.contacts)
        })
      })
    },
    onContactClick(contact) {
      this.SET_ACTIVE_CHAT(contact)
      this.$navigator.navigate('/messenger')
    },
    onLogoutBtnClick() {
      confirm({
        title: "You are about to log out",
        message: "Proceed anyway?",
        okButtonText: "CONTINUE",
        cancelButtonText: "CANCEL"
      })
      .then(result => {
        if (result) {
          this.RESET_LOGIN_STATE()
          this.$navigator.navigate('/login', { clearHistory: true })
        }
      })
    },
  },
  created() {
    this.loadContacts()
  }
}
</script>
