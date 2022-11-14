var app = new Vue({
    el: '#root',
    data: {
      todoList : [
        {
            text : "latte", done: false
        },
        {
            text : "uova", done: true
        },
        {
            text : "farina", done: false
        },
        {
            text : "anacardi", done: false
        },
      ],
      indice: 0,
      todoComplete : [],
    },
    methods: {

    },

  })