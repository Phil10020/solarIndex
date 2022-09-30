import { createApp } from 'vue'
import App from './App.vue'

// bootstrap
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

// vue3 google map
import VueGoogleMaps from '@fawmi/vue-google-maps'

/* add icons to the library */
library.add(fas)

const app = createApp(App)
app.use(VueAxios, axios)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDY-TLsDy3imgioimj8-oFolszY4AfYDAk'
  },
  autobindAllEvents: true
})
app.use(router)
app.mount('#app')
