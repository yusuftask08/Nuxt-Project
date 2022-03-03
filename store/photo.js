export const state = () => ({
    imageData: [],
})

export const mutations = {
    setImagesData(state, item) {
        state.imageData = item
    },
}

export const actions = {
    get(context) {
        this.$repositories.photo.all().then(res => {
            context.commit('setImagesData', res.data[0])
        })
    },

}

export const getters = {
    getImageData: (state) => {
        return state.imageData.url
    },
}
