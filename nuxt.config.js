require("dotenv").config();

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/localStorage', 
      ssr: false 
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    "@nuxtjs/axios"
  ],
  env:{
    firebase:{
      apikey:process.env.FIREBASE_APIKEY,
      pid:process.env.FIREBASE_PROJECTID,
      msid:process.env.FIREBASE_MSID,
      appid:process.env.FIREBASE_APPID,
      mid:process.env.FIREBASE_MEASUREMENTID
    },
    cotoha:{
      id:process.env.COTOHA_CLIENT_ID,
      secret:process.env.COTOHA_CLIENT_SECRET
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
