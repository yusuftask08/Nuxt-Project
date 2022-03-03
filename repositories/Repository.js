import PhotoRepository from './PhotoRepository'

export default ($axios) => ({
    photo: PhotoRepository($axios),
})