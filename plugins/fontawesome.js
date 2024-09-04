// Registering FontAwesome globally for icons
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add the imported icons to the library
library.add(faUser, faEnvelope, faPhone)

// Register the FontAwesomeIcon component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
