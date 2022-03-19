<template>
  <Page>
    <ActionBar style="background: #fff; box-shadow: none;">
      <FlexboxLayout alignItems="center" style="margin-top: 30px;">
        <Label color="#4f4f4f" style="font-size: 18px; text-align: center; color: #880ED4;" width="10%" @tap="$navigator.navigate('/home')">
          <FormattedString>
            <Span class="fas" text.decode="&#xf060;"/>
          </FormattedString>
        </Label>
        <StackLayout verticalAlignment="center" width="60%">
          <Label style="text-align:left; font-weight: bold; font-size: 16px;" row="0" :text="`${active_chat.contact.first_name} ${active_chat.contact.last_name}`"></Label>
        </StackLayout>
        <Label color="#4f4f4f" style="font-size: 18px; text-align: left; color: #880ED4;" width="15%">
          <FormattedString>
            <Span class="fas" text.decode="&#xf095;"/>
          </FormattedString>
        </Label>
        <Label color="#4f4f4f" style="font-size: 18px; text-align: left; color: #880ED4;" width="15%">
          <FormattedString>
            <Span class="fas" text.decode="&#xf03d;"/>
          </FormattedString>
        </Label>
      </FlexboxLayout>
    </ActionBar>

    <GridLayout rows="*, auto" columns="auto" class="wallpaper">
      <ScrollView>
        <StackLayout orientation="vertical" style="margin: 20px 50px">
          <FlexboxLayout flexDirection="column" v-for="(item, index) in messages" :key="index">
            <GridLayout :className="item.sender_id === user.id ? 'nsChatView-item-right' : 'nsChatView-item-left'" rows="auto" columns="auto,*,auto">
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
          <FlexboxLayout alignItems="center">
            <StackLayout verticalAlignment="center" width="90%">
              <TextField height="50" hint="Search" class="input-search" style="height: 130px;"/>
            </StackLayout>
            <StackLayout @tap="createMessage()" elevation="0" class="icon" height="35" width="35" backgroundColor="#880ED4" verticalAlignment="center" style="display: flex; flex-direction: column; justify-content: center;" width="10%">
              <Label color="#4f4f4f" style="font-size: 18px; text-align: left;" width="10%">
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
