import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs'
import {Task} from '../Task';
import { TASKS } from '../mock-tacks';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  deleteTasks(task: Task) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:5000/tasks'
  constructor( private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
      return this.http.delete<Task>(url);
  }
  updapteTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
