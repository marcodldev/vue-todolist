var app = new Vue({
    el: '#root',
    data: {
      todoList : [
        {
            text : "latte", done: false
        },
        {
            text : "uova", done: false
        },
        {
            text : "farina", done: false
        },
        {
            text : "anacardi", done: false
        },
      ],
      indice: 0,
      nuovoText: '',
      todoComplete : [],
    },
    methods: {
     rimozione (index) {	
        this.todoList.done = true;
        this.todoComplete.push(this.todoList[index]);
        this.todoList.splice(index, 1);

        

     }  
    },

  })