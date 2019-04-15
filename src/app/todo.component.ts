import { Component } from '@angular/core';
import { TaskData } from '@angular/core/src/testability/testability';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

interface Todo {
  task: string;
  completed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = 'TODO List';
  taskInput: string;
  index: number;
  filterTask: string;



  toDoList: Todo[] = [
    { task: "Walk the dog.", completed: false },
    { task: "Go to the store.", completed: true },
    { task: "Get gas.", completed: false },
    { task: "Wash the car.", completed: false }];

    filteredTodos = [...this.toDoList];

  taskMatch = () => {
    this.filteredTodos = this.toDoList.filter(Todo => 
      Todo.task.toLowerCase().includes(this.filterTask.toLowerCase()));
    console.log(this.toDoList);
  }

  addTask = () => {
    const newitem = {
      task: this.taskInput,
      completed: false,
    };
    this.toDoList.push(newitem);
    this.taskInput = null;
    this.filteredTodos = [...this.toDoList];
  };


  trackByTask = (index: number, item: any) => {
    return index;
  }


  completeTask = (index) => {
    this.toDoList[index].completed = true;
  };

  removeTask = indexOfItem => {
    const index = this.toDoList.indexOf(indexOfItem);
    this.toDoList.splice(index, 1);
    this.taskMatch();
    this.filteredTodos = [...this.toDoList];
  }

}
