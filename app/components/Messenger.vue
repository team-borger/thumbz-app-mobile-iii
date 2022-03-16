<template>
  <Page>
    <ActionBar style="background: #fff; box-shadow: none;">
      <GridLayout width="100%" columns="auto, *" rows="auto, *">
        <!-- <Label style="font-size: 30px; color: #880ED4; text-align: center;">
          <FormattedString>
            <Span class="fas" text.decode="&#xf104; "/>
          </FormattedString>
        </Label> -->
        <Label style="text-align:left; font-weight: bold; font-size: 16px; padding-bottom: 10px; color: #880ED4;" row="0" :text="`${active_chat.contact.first_name} ${active_chat.contact.last_name}`"></Label>
      </GridLayout>
    </ActionBar>

    <GridLayout rows="*, auto" columns="auto" class="wallpaper">
      <ScrollView>
        <StackLayout orientation="vertical" style="margin: 20px 50px">
          <FlexboxLayout flexDirection="column" v-for="(item, index) in messages" :key="index">
            <GridLayout :className="item.sender_id === user.id ? 'nsChatView-item-right' : 'nsChatView-item-left'" rows="auto" columns="auto,*,auto">
              <!-- <StackLayout row="0"
                :col="item.sender_id === user.id ? '2' : '0'"
                class="nsChatView-avatar"
                backgroundColor="#eee" style="height: 64; display: flex; flex-direction: column; justify-content: center; padding-top: 35px;">
                <Label v-if="item.sender_id === user.id" style="font-size: 25px; color: black; text-align: center;" :text="`${user.first_name.charAt(0)}${user.last_name.charAt(0)}`"></Label>
                <Label v-else style="font-size: 25px; color: black; text-align: center;" :text="`${active_chat.contact.first_name.charAt(0)}${active_chat.contact.last_name.charAt(0)}`"></Label>
              </StackLayout> -->
              <StackLayout row="0" col="1" className="nsChatView-message">
                <StackLayout verticalAlignment="top" :horizontalAlignment="item.sender_id === user.id ? 'right' : 'left'" className="nsChatView-content">        
                  <Label :horizontalAlignment="item.sender_id === user.id ? 'right' : 'left'"
                         className="nsChatView-date"
                         :text="item.date_created"
                         visibility="visible" />
                  <Label :horizontalAlignment="item.sender_id === user.id ? 'right' : 'left'" className="nsChatView-messageText"
                         :text="item.message" textWrap="true" />
                </StackLayout>

              </StackLayout>

            </GridLayout>
          </FlexboxLayout>
        </StackLayout>
      </ScrollView>   
      <StackLayout row="1" column="0" width="100%">
        <FlexboxLayout class="message-box">
          <FlexboxLayout class="text-area">
            <TextField
              hint="Type a message"
              text=""
              class="text-view chat-field"
              v-model="chatfield"
            ></TextField>
            <StackLayout @tap="createMessage()"  elevation="0" class="icon" height="35" width="35" backgroundColor="#880ED4" verticalAlignment="center" style="display: flex; flex-direction: column; justify-content: center; margin-right: 30px;">
              <Label 
                style="font-size: 15px; color: white; text-align: center;"
              >
                <FormattedString>
                  <Span class="fas" text.decode="&#xf1d8; "/>
                </FormattedString>
              </Label>
            </StackLayout>
          </FlexboxLayout>
        </FlexboxLayout>
      </StackLayout>
    </GridLayout>

  </Page>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { getString } from "@nativescript/core/application-settings"
  export default {
    data() {
      return {
        messages: [],
        user: {},
        chatfield: '',
      }
    },
    methods: {
      ...mapActions('user', ['LOAD_THREAD', 'CREATE_MESSAGE']),
      loadThreads() {
        this.LOAD_THREAD(this.active_chat.contact.id)
        .then(response => {
          this.$nextTick(()=>{
            this.messages = response
            console.log(this.messages)
            console.log('aaa', this.active_chat)
            console.log('bbb', this.user)
          })
        })
      },
      createMessage() {
        console.log(123)
        const payload = {
          recepient_id: this.active_chat.contact.id,
          content: this.chatfield,
        }
        this.CREATE_MESSAGE(payload)
        .then(response => {
          this.chatfield = ''
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    computed: {
      ...mapGetters('user', ['active_chat']),
    },
    created() {
      this.user = JSON.parse(getString('user'))
      this.loadThreads()
    }
  }
</script>
