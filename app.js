const app= Vue.createApp({
    data() {
        return {
            title: 'title',
            count: 0,
            text: '',
        }
    },
    methods: {
        countFunc(){
            this.count++
        },
        onInput(e){
            this.text = e.target.value;
        }
    },
})
app.mount('#tutorial');