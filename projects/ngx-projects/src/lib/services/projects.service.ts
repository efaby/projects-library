import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppKeys, ProjectKeys} from './../shared/app.keys';
import {Project, User} from './../shared/app.type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = AppKeys.API_URL;
  }
  
   /**
   *
   * get Todos Project List
   * param {page}
   * return {Observable} Project[]
   */
  public getTodos(page: number, userId: number): Observable<Project[]> {
    const projectsUrl = this.baseUrl + `/todos`;
    const start = (page - 1) * ProjectKeys.SCROLL_LIMIT;
    let options = `?_start=${start}&_limit=${ProjectKeys.SCROLL_LIMIT}`;
    options = userId ? `${options}&userId=${userId}` : options;
    return this.http.get<Project[]>(`${projectsUrl}${options}`);
  }

  /**
   *
   * get Users List
   * return {Observable} Users[]
   */
  public getUsers(): Observable<User[]> {
    const usersUrl = this.baseUrl + `/users`;
    return this.http.get<User[]>(`${usersUrl}`);
  }
  
  /**
   *
   * update Project List
   * param {userId}
   * return {Observable} Project
   */
  public updateProject(id: number, project: Project) {
    const projectsUrl = this.baseUrl + `/todos/` + id;
    return this.http.put<any>(`${projectsUrl}`, project);
  }
}
