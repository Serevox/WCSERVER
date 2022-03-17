const app = Vue.createApp({
    //CREATE FUNCTIONS, DATA
    data() {
        return {
            title: 'The Ledger',
            author: 'Noie Manoy',
            age: 20,
            address: 'Arayat'
        }
    }
});
app.mount('#app')