import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    title: '',
    message: '',
    type: '' as 'success' | 'error' | ''
  }),
  actions: {
    showNotification (title: string, message: string, type: 'success' | 'error' = 'success') {
      this.title = title
      this.message = message
      this.type = type

      setTimeout(() => {
        this.clearNotification()
      }, 3000)
    },
    clearNotification () {
      this.title = ''
      this.message = ''
      this.type = ''
    }
  }
})
