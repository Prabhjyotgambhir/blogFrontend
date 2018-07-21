import { baseUrl, endPoints } from './../constants';
import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreatepostService {

  constructor(private http: Http) { }

  createPost(post: Post): Observable <Post> {
    return this.http.post(baseUrl + endPoints.postUrl, post)
      .map((response) => {
        return response.json();
      });
  }
}
