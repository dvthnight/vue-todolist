
const app = new Vue({
    el: "#app",
    data: {

        // newLista: {
        //     newText:"",
        //     done: false,
        // },
        
        newLista:"",

       

        todo : [
            {
                text: "sono Mario Ciao",
                done: false,
            },

            {
                text: "sono Mario Ciao",
                done: true,
            },

            {
                text: "sono Mario Ciao",
                done: true,
            },


        ]

    },

    methods: {
        aggiungereListe : function(){
            // this.newObject.newText.push(this.newLista);
            console.log(this.newLista);

           const newObject =  {
                text: this.newLista,
                done: false,
            }
            
            console.log(newObject.text);

            // this.newObject.text = this.newLista;
            // console.log(this.newObject.text);

            if(this.newLista){
                this.todo.push(newObject);
            };

            this.newLista = "";
            
        },

        cancellaElLista : function(i){
            this.todo.splice(i,1);
        },

        // attivitaSvolta : function(){
        //     this.todo.done = true;
        //     console.log(this.todo.done)
        // }
    }
})