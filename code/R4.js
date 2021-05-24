const app = new Vue({
    el:'#app',
    data:{
        url:'https://jsonplaceholder.typicode.com/users',
        api:null
    },
    mounted(){
        fetch(this.url)
            .then(res => {
                if(res.ok)
                    return res.json();
                else
                    throw new Error(res.status)
            }).then(data => {
                this.api=data;
            })
            .catch( e => {
                console.warn(e.message)
            });
    }
});