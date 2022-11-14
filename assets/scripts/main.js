
var app = new Vue({
    el: "#root",
    data: {
        toDo: [],
        textInput : "",
    },
    methods: {
        addNewTask(){
            let obj = {
                text: this.textInput,
                done: false
            };
            this.toDo.push(obj)
        },
        deleteAction(index){
            this.toDo.splice(index, 1)
        },
        changeStatus(index){
            if(this.toDo[index].done == false){
                this.toDo[index].done =true;
            }else{
                this.toDo[index].done = false;
            }
        }
    },
})