import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import MessagesList from './components/MessagesList'
import Messenger from './components/Messenger'
import Search from './components/Search'

export const routes = {
  '/landing': {
    component: Landing,
  },
  '/login': {
    component: Login,
  },
  '/signup': {
    component: Signup,
  },
  '/home': {
    component: Home,
  },
  '/messages': {
    component: MessagesList,
  },
  '/messenger': {
    component: Messenger,
  },
  '/search': {
    component: Search,
  },
}