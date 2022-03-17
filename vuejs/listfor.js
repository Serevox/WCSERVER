const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Clean the House' },
                { text: 'Prepare Breakfast' },
                { text: 'Attend WCSERVER Class' },
                { text: 'Feed the animals' }
            ]
        }
    }
}
Vue.createApp(ListRendering).mount('#list-rendering')