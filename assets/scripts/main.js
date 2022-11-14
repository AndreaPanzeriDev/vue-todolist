
var app = new Vue({
    el: "#root",
    data: {
        toDo: [
            {text: "balamromveoivoinvoinrv", done: true},
            {text: "balamromveoivoinvoinrv", done: true},
            {text: "balamromveoivoinvoinrv", done: true},
        ],
        textInput : "",
    },
    methods: {
        addNewTask: function(){
            let obj = {text: `${this.textInput}`, done: 'true'};
            this.toDo.push(obj)
        }
    },
})