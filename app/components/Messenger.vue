<template>
  <Page>
    <ActionBar style="background: #fff; box-shadow: none;">
      <GridLayout width="100%" columns="auto, *" rows="auto, *">
        <Image style="margin-right: 50px;" row="0" col="0" top="0" src="~/assets/images/hamburger.png" height="20" width="20" @tap="$refs.drawer.nativeView.showDrawer()"/>
        <Label style="text-align:left; font-weight: bold; font-size: 20px;" row="0" col="1" text="Message"></Label>
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-item" text="Item 1"/>
        <Label class="drawer-item" text="Item 2"/>
        <Label class="drawer-item" text="Item 3"/>
      </StackLayout>
    </RadSideDrawer>

    <GridLayout rows="*, auto" columns="auto" class="wallpaper">
      <StackLayout row="0" column="0" width="100%">
        <ScrollView class="messages-area">
          <FlexboxLayout class="messages">
            <StackLayout>
              <FlexboxLayout class="message-bubble-content">
                <Label class="message-text" text="message.text"
                  textWrap="true"></Label>
                <FlexboxLayout class="meta">
                  <Label
                    text="message.created | date: 'shortTime'"
                    class="time"></Label>
                </FlexboxLayout>
              </FlexboxLayout>
            </StackLayout>
          </FlexboxLayout>
        </ScrollView>
      </StackLayout>
      <StackLayout row="1" column="0" width="100%">
        <FlexboxLayout class="message-box">
          <FlexboxLayout class="text-area">
            <Label
              :text="'mdi-insert-emoticon' | fonticon"
              class="mdi icon emojis"
            ></Label>
            <TextView
              hint="Type a message"
              text=""
              class="text-view"
            ></TextView>
            <Label
              text="'mdi-attach-file' | fonticon"
              class="mdi icon attach"
            ></Label>
            <Label
              text="'mdi-photo-camera' | fonticon"
              class="mdi icon camera"
            ></Label>
          </FlexboxLayout>
          <Label
            text="'mdi-mic' | fonticon"
            class="mdi icon send"
          ></Label>
        </FlexboxLayout>
      </StackLayout>
    </GridLayout>

  </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello World!',
        form:{}
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
