import Vuex from 'vuex'
import axios from 'axios'

import { addresses } from '~/assets/addresses'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPages: [],
      loadedAddresses: addresses
    },
    mutations: {
      setPages(state, pages) {
        state.loadedPages = pages
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('http://usg-rafalubysz.pl/wp-json/wp/v2/pages')
          .then(res => {
            vuexContext.commit('setPages', res.data)
          })
          .catch(e => context.error(e))
      },
      setPages(vuexContext, pages) {
        vuexContext.commit('setPages', pages)
      }
    },
    getters: {
      loadedPages: state => pageSlug => {
        return state.loadedPages.find(page => page.slug === pageSlug)
      },
      loadedAddresses(state) {
        return state.loadedAddresses
      }
    }
  })
}

export default createStore
