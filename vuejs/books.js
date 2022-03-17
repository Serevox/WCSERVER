const books = Vue.createApp({
    data() {
        return {
            showBooks: true,
            btitle: 'The Ledger',
            bauthor: 'Noie Manoy',
            year: 2008,
            publisher: 'ABC Publisher'
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});
books.mount('#books')