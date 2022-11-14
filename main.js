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
     rimozione_push (index) {	
        
        this.todoComplete.push(this.todoList[index]);
        this.todoList.splice(index, 1);

    //     come si cambia il valore di un booleano? (classi da invertire nella seconda lista)
    //    this.todoComplete.done = true;

     },
     rimozione (index) {
        this.todoComplete.splice(index, 1);
     },
     aggiungiRiga () {
        this.todoList.push({ text: this.nuovoText, done: false });
     }
    },

  })