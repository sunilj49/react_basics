const state ={
    todos:[
        {
            id:1,
            text:'learn react.js'
        },
        {
            id:2,
            text:'go to gym'
        },
        {
            id:3,
            text:'learn redux'
        }
        
    ]
};

console.log(state.todos);
console.log(state.todos.find(todo=>todo.id===2));
console.log(state.todos.map(todo=>todo.id));