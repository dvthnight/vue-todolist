
const app = new Vue({
    el: "#app",
    data: {

        // newLista: {
        //     newText:"",
        //     done: false,
        // },
        
        newLista:"",

        newObject: {
            text: "",
            done: false,
        },

        todo : [
            {
                text: "sono Mario Ciao",
                done: false,
            },

            {
                text: "sono Mario Ciao",
                done: false,
            },

            {
                text: "sono Mario Ciao",
                done: false,
            },


        ]

    },

    methods: {
        aggiungereListe : function(){
            // this.newObject.newText.push(this.newLista);
            console.log(this.newLista);
            console.log(this.todo[1].text);
            console.log(this.newObject.text);

            this.newObject.text = this.newLista;
            console.log(this.newObject.text);

            this.todo.push(this.newObject);
        }
    }
})