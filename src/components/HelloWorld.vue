<template>
    <div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            message: ''
        };
    },
    mounted() {
        axios.get('http://91.107.239.206:8000')
            .then(response => {
                this.message = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>