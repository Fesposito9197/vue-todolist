const { createApp } = Vue

createApp({
    data() {
        return {
            newTodo: "",
            todoList: [ ],
            
        }
    },
    methods: {
        
        addTodo () {
            const objtodo = {
                text : this.newTodo,
                done: false
            }
            this.todoList.push(objtodo)
            this.newTodo=''
            
        },
        removeTodo (i) {
            this.todoList.splice(i,1)
            
        },
        completedTodo (i){
            
            this.todoList[i].done = !this.todoList[i].done
            
            
        }
    }
}).mount('#app')