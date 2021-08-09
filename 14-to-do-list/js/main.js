

const Main = {

  tasks: [],

  init: function() {
    this.checkSelectors()
    this.bindEvents()
    this.getStoraged()
    this.buildTasks()
  }, 

  checkSelectors: function() {
    this.$checkButtons = document.querySelectorAll(`.check`)
    this.$inputTask = document.querySelector(`#new-task`)
    this.$list = document.querySelector(`.list`)
    this.$deleteButtons = document.querySelectorAll(`.delete`)
  }, 

  bindEvents: function() {
    const self = this
    this.$checkButtons.forEach(function(button) {
      button.onclick = self.Events.checkButtons_click.bind(self)
    })
    this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

    this.$deleteButtons.forEach(function(button) {
      button.onclick = self.Events.deleteButtons_click.bind(self)
    })
  }, 

  getStoraged: function() {
    const tasks = localStorage.getItem(`tasks`)
    if (!tasks) {
      return localStorage.setItem(`tasks`, JSON.stringify([]))
    }
    this.tasks = JSON.parse(tasks)
  },

  setTaskHTML: function(task, isDone = false) {
    return `
      <li class="${isDone ? 'done' : ''}" data-task="${task}">
        <div class="check"></div>
        <span class="task">
          ${task}
        </span>
        <button class="delete"></button>
      </li>`
  },

  listInnerHTML: function (element, HTMLString) {
    element.innerHTML += HTMLString
    this.checkSelectors()
    this.bindEvents()
  },

  buildTasks: function() {
    let html = ``

    this.tasks.forEach(item => {
      html += this.setTaskHTML(item.task, item.done)      
    })

    this.listInnerHTML(this.$list, html)
  },

  Events: {
    checkButtons_click: function(e) {
      const li = e.target.parentElement
      const value = li.dataset[`task`]
      const isDone = li.classList.contains(`done`)

      const newTaskDone = this.tasks.map(item => {
        if (item.task === value) {
          item.done = !isDone
        }
        return item
      })

      localStorage.setItem(`tasks`, JSON.stringify(newTaskDone))
      
      if (!isDone) {
        li.classList.add(`done`)
        return
      }
        li.classList.remove(`done`)

    },
    inputTask_keypress: function(e) {
      const key = e.key
      const value = e.target.value

      if (key === `Enter` && value) {
        this.listInnerHTML(this.$list, this.setTaskHTML(value))

        e.target.value = ``

        const savedTasks = localStorage.getItem(`tasks`)
        const savedTasksObj = JSON.parse(savedTasks)

        const arrTasks = [
          ...savedTasksObj,
          {task: value, done: false},
        ]
        
        this.tasks = arrTasks
        localStorage.setItem(`tasks`, JSON.stringify(arrTasks))
      }
    },
    deleteButtons_click: function(e) {
      const li = e.target.parentElement
      const value = li.dataset[`task`]

      const arrTasks = this.tasks.filter(item => item.task !== value)

      localStorage.setItem(`tasks`, JSON.stringify(arrTasks))
      this.tasks = arrTasks
      
      li.classList.add(`hidden`)

      setTimeout (function(){
        li.classList.add(`removed`)
      }, 300)
    }
  }
}


Main.init()