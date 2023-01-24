console.log('Vue OK', Vue);



// Prova console.log mail

axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
    const result = response.data.response;
    console.log(result);
})



const app = Vue.createApp({
    data() {
        return {
            mailList: [],
            endpoint: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },

    methods: {

        generateAddress() {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.mailList.push(response.data.response)
                console.log(this.mailList);
            });
        }

    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            this.generateAddress();
        }
    }
}).mount('#app');