
var app = new Vue({
    el: "#root",
    data: {
        toDo: [
            {text: "balamromveoivoinvoinrv", done: false},
            {text: "balamromveoivoinvoinrv", done: false},
            {text: "balamromveoivoinvoinrv", done: false},
        ],
        textInput : "",
    },
    methods: {
        addNewTask(){
            let obj = {
                text: this.textInput,
                done: false
            };
            this.toDo.push(obj)
        }
    },
})