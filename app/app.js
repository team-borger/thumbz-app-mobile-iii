import Vue from 'nativescript-vue'
import App from './components/App'

// ==================================================================================
import store from './store'

// ==================================================================================
import CardViewPlugin from '@nativescript-community/ui-material-cardview/vue'
Vue.use(CardViewPlugin);

// Router ===========================================================================
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'
Vue.use(Navigator, { routes })

new Vue({
  store,
  render: (h) => h('frame', [h(App)]),
}).$start()
