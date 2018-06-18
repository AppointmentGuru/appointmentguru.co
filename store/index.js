export const state = () => ({
  locales: ['en'],
  locale: 'en',
  showSignupDialog: 0,
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SHOW_SIGNUP(state) {
    state.showSignupDialog = Math.random().toString()
  }
}