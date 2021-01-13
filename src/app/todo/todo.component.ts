import { Component, OnInit } from '@angular/core';
interface Todo {
  task: string;
  completed: boolean;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  hideCompleted: boolean = true;
  filter: string = "";
  newTodo: string;
  todo: Todo;
  public todos:  Todo[];
  constructor() { 
  this.todos = [
    {
      task: "laundry",
      completed: false,
    },
    {
      task: "grocery shop",
      completed: true,
    },
    {
      task: "food prep",
      completed: true,
    },
    {
      task: "dishes",
      completed: false,
    },
    {
      task: "study",
      completed: false,
    },
    {
      task: "send packages",
      completed: true,
    },
  ]
}

add= function(){
 this.todo= {task:this.newTodo,completed: false};
 this.todos.push(this.todo);
 
 
}
getFilteredResults= function(): Todo[] {
  return this.displayedTodos.filter((todo) => {
    // convert the todo.task to lowercase
    const taskLower = todo.task.toLowerCase();
    // convert the filter input to lowercase
    const filterLower = this.filter.toLowerCase();
    // check to set if the filter input is inside of the task
    // string
    return taskLower.includes(filterLower);
  });
// }


//  getFilteredResults() {
//  return this.todos.filter(function((todo) => {
//     return: this.todos.task.includes(this.filter),
//   });
//  }



}
hideMe() {
  this.hideCompleted=!this.hideCompleted;
}
removeMe(index: number){
  this.todos.splice(index,1);
}
  ngOnInit(): void {
  }

}
