import {defineStore} from 'pinia'

export const useAppStore = defineStore('data', {
    state: () => ({
        userInput : ''
    })
})

