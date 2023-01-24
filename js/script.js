console.log('JS OK');



const app = Vue.createApp({
    data() {
        return {
            mailList: [],
        }
    },

    methods: {

        generateAddress() {

            for (let i = 0; i < 10; i++) {
                this.generateAddress();

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    this.mailList.push(response.data.response)
                    console.log(this.mailList);
                })

            }
        }

    }
}).mount('#app');