import { Color } from "@nativescript/core/color"
import { Connectivity } from '@nativescript/core'
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback"
// import { mapActions } from 'vuex'
const appversion = require("@nativescript/appversion")
export default {
	methods: {
    // ...mapActions('user', ['LATEST_VERSION']),
		snackBar (icon, title, background, message) {
      this.feedback = new Feedback()

      this.feedback.show({
        title: title,
        titleColor: new Color("white"),
        position: FeedbackPosition.Top,
        type: FeedbackType.Custom, // this is the default type, by the way
        message: message,
        messageColor: new Color("white"),
        duration: 3000,
        backgroundColor: new Color(background),
        icon: icon, // in App_Resources/platform folders
        android: {
            iconColor: new Color("white") // optional, leave out if you don't need it
        },
        onTap: () => console.log("showCustomIcon tapped"),
        onShow: animating => console.log(animating ? "showCustomIcon animating" : "showCustomIcon shown"),
        onHide: () => console.log("showCustomIcon hidden")
      })
    },
    monitorConnectivity() {
      Connectivity.startMonitoring(type => {
        switch (type) {
          case Connectivity.connectionType.none:
            this.snackBar("disconnected", "Connectivity updated", "#f58a35", "Wifi and Mobile data disabled")
            break
          /*case Connectivity.connectionType.wifi:
            this.snackBar("error", "Connectivity updated", "#f58a35", "Connected using Wifi")
            break
          case Connectivity.connectionType.mobile:
            this.snackBar("error", "Connectivity updated", "#f58a35", "Connected using Mobile Data")
            break*/
          default:
            break
        }
      })
    },
    hasInternet() {
      const type = Connectivity.getConnectionType()
      switch (type) {
        case Connectivity.connectionType.none:
          return false
          break
        default:
          return true
          break
      }
    },
    /*async checkVersion() {
      if (this.hasInternet()) {
        const dbLatestVersion = await this.LATEST_VERSION()
        const version = await appversion.getVersionName()

        // console.log('1: ', parseFloat( dbLatestVersion.name ) )
        // console.log('2: ', parseFloat( version ) )

        if ( parseFloat(version) >= parseFloat(dbLatestVersion.name) ) {
          return true
        }
        else if ( dbLatestVersion.forced ) {
          this.$navigator.navigate('/update-prompt', { clearHistory: true, props: {'version':dbLatestVersion} })
        }
        else return false
      }
    },*/
	}, 
  created() {
    this.monitorConnectivity()
    // this.checkVersion()
  }
}