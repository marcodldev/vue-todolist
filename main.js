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
        
        this.todoComplete.push(this.todoList[index]);
        this.todoList.splice(index, 1);

    //     come si cambia il valore di un booleano?
    //    this.todoComplete.done = true;

     },
     aggiungiRiga () {
        this.todoList.push({ text: this.nuovoText, done: false });
     }
    },

  })