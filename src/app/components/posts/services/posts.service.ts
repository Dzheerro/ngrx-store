import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { PostInterface } from '../types/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  getVacancyList(): Observable<PostInterface[]> {
    const posts = [
      {id: 1, title: 'Junior Front-end Developer', descriptions: 'We need somebody...'},
      {id: 2, title: 'Middle Front-end Developer', descriptions: 'We need somebody...'},
      {id: 3, title: 'Senior Front-end Developer', descriptions: 'We need somebody...'},
    ];
    return of(posts).pipe(delay(2000));
  }

  constructor() { }
}
