const { createApp } = Vue;

createApp({
    data() {
        return {
           disks: []
        };
    },
    methods: {
        search() {
            axios
                .get('http://localhost/php-dischi-json/BackEnd/api.php')
                .then((res) => {
                    this.disks = res.data;
                });
        }
    }
}).mount('#app');