import axios from 'axios'
export const state = () => ({
    imageData: [],
    baseUrl: 'https://api.thecatapi.com/',
})

export const mutations = {
    setImagesData(state, item) {
        state.imageData = item
    },
}

export const actions = {
    fetchImage(context) {
        axios.get(`${this.state.baseUrl}v1/images/search`, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "8fd205be-4776-4309-bc03-9a6712a10bdc"
            }
        }).then(resp => {
            context.commit('setImagesData', resp.data[0].url)
        })
    },
}

export const getters = {
    getImageData: (state) => {
        return state.imageData
    },
}