

const TwoWayBinding = {
    data() {
        return {
            message: 'Hello Vue!',
            note: 'Today is Monday'
        }
    }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')