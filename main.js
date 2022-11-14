var app = new Vue({
    el: '#root',
    data: {
      todoList : [
        {
            name : "latte", done: false
        },
        {
            name : "uova", done: false
        },
        {
            name : "farina", done: false
        },
        {
            name : "anacardi", done: false
        },
      ],
      indice: 0,
      todoComplete : [],
    },
    methods: {

    },

  })