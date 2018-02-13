document.addEventListener("DOMContentLoaded", function(event) { 
var taskApp = new Vue({
  el: '#taskApp',
  data: {
    tasks: [
      { name: 'gotta do this task first', done: false },
      { name: 'buy some pet food', done: false },
      { name: 'install fishtank in living room', done: false },
    ]
  },
  methods: {
    addTask: function(e) {
      e.preventDefault();
      this.tasks.push({
        name: this.tasks.name,
        done: false
      });
    },
    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
});
});