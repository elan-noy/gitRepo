import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PostsService {

    constructor(private http: HttpClient) {

    }
    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/');

    }
    postPost(post) {
        console.log(post)
        this.http.post('https://reqres.in//api/users/api/users', post);

    }

    updatePost(post) {
        console.log(post)
        return this.http.post('http://jsonplaceholder.typicode.com/posts', post)

    }
    deletePost(post) {
        console.log(post)
        return this.http.post('http://jsonplaceholder.typicode.com/posts', post)

    }
    getPosts1() {
        return this.http.get('https://reqres.in/api/users?page=2');

    }
}

