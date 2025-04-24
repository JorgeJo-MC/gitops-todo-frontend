import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  newTodo = '';
  todos: string[] = [];

  addTodo() {
    if (!this.newTodo.trim()) return;
    this.todos.push(this.newTodo.trim());
    this.newTodo = '';
  }

  removeTodo(todo: string) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
