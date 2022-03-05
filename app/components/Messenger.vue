<template>
  <Page>
    <ActionBar style="background: #fff; box-shadow: none;">
      <GridLayout width="100%" columns="auto, *" rows="auto, *">
        <!-- <Label style="font-size: 30px; color: #880ED4; text-align: center;">
          <FormattedString>
            <Span class="fas" text.decode="&#xf104; "/>
          </FormattedString>
        </Label> -->
        <Label style="text-align:left; font-weight: bold; font-size: 20px;" row="0" text="Message"></Label>
      </GridLayout>
    </ActionBar>

    <GridLayout rows="*, auto" columns="auto" class="wallpaper">
      <ScrollView>
        <StackLayout orientation="vertical" style="margin: 20px 50px">
          <FlexboxLayout flexDirection="column" v-for="(item, index) in messages" :key="index">
            <GridLayout :className="item.isRight === true ? 'nsChatView-item-right' : 'nsChatView-item-left'" rows="auto" columns="auto,*,auto">
              <!-- <Image row="0"
                :col="item.isRight === true ? '2' : '0'"
                className="nsChatView-avatar"
                 verticalAlignment="top"
                 src="~/assets/images/images.jpg"
                 visibility="visible" /> -->
              <StackLayout row="0"
                :col="item.isRight === true ? '2' : '0'"
                class="nsChatView-avatar"
                backgroundColor="#eee" style="height: 64; display: flex; flex-direction: column; justify-content: center; padding-top: 35px;">
                <Label style="font-size: 25px; color: black; text-align: center;" :text="`${item.first_name.charAt(0)}${item.last_name.charAt(0)}`"></Label>
              </StackLayout>
              <StackLayout row="0" col="1" className="nsChatView-message">
                <StackLayout verticalAlignment="top" :horizontalAlignment="item.isRight ? 'right' : 'left'" className="nsChatView-content">        
                  <Label :horizontalAlignment="item.isRight ? 'right' : 'left'"
                         className="nsChatView-date"
                         :text="item.date"
                         visibility="visible" />
                  <Label :horizontalAlignment="item.isRight ? 'right' : 'left'" className="nsChatView-messageText"
                         :text="item.text" textWrap="true" />
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
            ></TextField>
            <StackLayout elevation="0" class="icon" height="35" width="35" backgroundColor="#880ED4" verticalAlignment="center" style="display: flex; flex-direction: column; justify-content: center; margin-right: 30px;">
              <Label style="font-size: 15px; color: white; text-align: center;">
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

<script >
  export default {
    data() {
      return {
        messages: [
          {
            date: 'January 10, 2022',
            text: 'Hi! How are you?',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          },
          {
            date: 'January 11, 2022',
            text: 'fasfgag',
            isRight: false,
            first_name: 'Raymund',
            last_name: 'Hinlog'
          },
          {
            date: 'January 13, 2022',
            text: 'ggggg',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          },
          {
            date: 'January 10, 2022',
            text: 'Hi! How are you?',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          },
          {
            date: 'January 11, 2022',
            text: 'fasfgag',
            isRight: false,
            first_name: 'Raymund',
            last_name: 'Hinlog'
          },
          {
            date: 'January 13, 2022',
            text: 'ggggg',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          },
          {
            date: 'January 10, 2022',
            text: 'Hi! How are you?',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          },
          {
            date: 'January 11, 2022',
            text: 'fasfgag',
            isRight: false,
            first_name: 'Raymund',
            last_name: 'Hinlog'
          },
          {
            date: 'January 13, 2022',
            text: 'ggggg',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          },
          {
            date: 'January 10, 2022',
            text: 'Hi! How are you?',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          },
          {
            date: 'January 11, 2022',
            text: 'fasfgag',
            isRight: false,
            first_name: 'Raymund',
            last_name: 'Hinlog'
          },
          {
            date: 'January 13, 2022',
            text: 'ggggg',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          },
          {
            date: 'January 10, 2022',
            text: 'Hi! How are you?',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          },
          {
            date: 'January 11, 2022',
            text: 'fasfgag',
            isRight: false,
            first_name: 'Raymund',
            last_name: 'Hinlog'
          },
          {
            date: 'January 13, 2022',
            text: 'ggggg',
            isRight: true,
            first_name: 'Princess',
            last_name: 'Garde'
          }
        ]
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>
