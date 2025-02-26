import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faSpotify, faFacebook, faInstagram, faYoutube, faMusic)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})