export default ($axios) => ({
    all() {
        return $axios.get('/api/v1/images/search', {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": `${process.env.apiKey}`
            }
        })
    }
})
