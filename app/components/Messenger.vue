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
      <FlexboxLayout justifyContent="center" v-if="pageload === true">
        <Gif src="~/assets/images/loading.gif" height="50"/>
      </FlexboxLayout>
      <ScrollView scrollBarIndicatorVisible="false" v-if="pageload === false">
        <StackLayout orientation="vertical" style="margin: 20px 50px">
          <FlexboxLayout flexDirection="column" v-for="(item, index) in messages" :key="index">
            <GridLayout rows="auto" columns="auto,*,auto">
              <StackLayout row="0" col="1" className="nsChatView-message">
                <Label
                  v-if="pasmoxx === index"
                  :horizontalAlignment="item.sender_id === user.id ? 'right' : 'left'"
                  className="nsChatView-date"
                  :text="dateFormat(item.date_created)"
                  visibility="visible"
                />
                <StackLayout verticalAlignment="top" :horizontalAlignment="item.sender_id === user.id ? 'right' : 'left'" :className="item.sender_id === user.id ? 'nsChatView-item-right nsChatView-content' : 'nsChatView-item-left nsChatView-content'" @tap="wawexx(index)">        
                  <Label :horizontalAlignment="item.sender_id === user.id ? 'right' : 'left'" 
                          className="nsChatView-messageText"
                         :text="item.message" textWrap="true" />
                </StackLayout>
                <Label
                  v-if="pasmoxx === index"
                  :horizontalAlignment="item.sender_id === user.id ? 'right' : 'left'"
                  className="nsChatView-date"
                  text="Seen"
                  visibility="visible"
                />
              </StackLayout>
            </GridLayout>
          </FlexboxLayout>
        </StackLayout>
      </ScrollView>   
      <StackLayout row="1" column="0" width="100%">
        <FlexboxLayout class="message-box">
          <FlexboxLayout alignItems="center">
            <StackLayout verticalAlignment="center" width="100%" v-if="chatfield === ''">
              <TextField v-model="chatfield" text="" height="50" hint="Type a message" class="input-search" style="height: 130px;"/>
            </StackLayout>
            <StackLayout verticalAlignment="center" width="85%" v-else>
              <TextField v-model="chatfield" text="" height="50" hint="Type a message" class="input-search" style="height: 130px;"/>
            </StackLayout>
            <StackLayout verticalAlignment="center" width="15%" @tap="createMessage()" v-if="chatfield !== ''">
              <Image style="margin-right: 50px;" row="0" col="0" top="0" src="~/assets/images/sendbtn.png" height="30" width="30"/>
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
  import moment from 'moment'

  export default {
    data() {
      return {
        messages: [],
        user: {},
        chatfield: '',
        pageload: true,
        pasmoxx: null
      }
    },
    methods: {
      ...mapActions('user', ['LOAD_THREAD', 'CREATE_MESSAGE']),
      wawexx (payload) {
        if (this.pasmoxx !== payload || this.pasmoxx === null) {
          this.pasmoxx = payload
        } else {
          this.pasmoxx = null
        }
      },
      loadThreads() {
        this.LOAD_THREAD(this.active_chat.contact.id)
        .then(response => {
          this.pageload = false
          this.$nextTick(()=>{
            this.messages = response
          })
        }).catch(err => {
          console.log(err)
          this.pageload = false
        })
      },
      dateFormat(date) {
        let format = moment(date).format('hh:mm A')
        return format
      },
      createMessage() {
        const payload = {
          recepient_id: this.active_chat.contact.id,
          content: this.chatfield,
        }
        this.CREATE_MESSAGE(payload)
        .then(response => {
          this.messages.push(response)
          this.chatfield = ''
        })
        .catch(error => {
          console.log(error)
        })
      },
      skidit() {
        const skekert = WebRTC
        const webrtc = new WebRTC({
          enableAudio: true, // default true
          enableVideo: false, // default true
          iceServers: [
            // Optional defaults to google stun servers
            {
              url: 'stun:stun.l.google.com:19302'
            },
            {
              url: 'serverRequiresAuth',
              username: 'username',
              password: 'password'
            }
          ]
        })
      }
    },
    computed: {
      ...mapGetters('user', ['active_chat']),
    },
    created() {
      this.user = JSON.parse(getString('user'))
      this.loadThreads()
      // this.skidit()
    }
  }
</script>
