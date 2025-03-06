import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMusic, faArrowRight, faArrowLeft, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faSpotify, faFacebook, faInstagram, faMusic, faArrowRight, faArrowLeft, faBars, faXmark)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})