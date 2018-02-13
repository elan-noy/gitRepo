import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-misc',
    templateUrl: './misc.component.html',
    styleUrls: ['./misc.component.css'],
    providers: [PostsService]
})
export class MiscComponent {
    email: string;
    name: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: {};
    post: userType;
    res: {};
    posts1: UserResponse;
    data: {};
    more_less: boolean = false;
    number_of_posts = 2;
    moreOrLess: string = "More Posts";

    constructor(private postsService: PostsService, private http: HttpClient) {
        this.name = 'Elan';
        this.email = 'elan-noy@rcn.com';
        this.address = {
            town: 'Brookline',
            street: '100 Dale street.'
        };
        this.hobbies = ['Music', 'Play', 'Reading'];
        this.showHobbies = true;
        this.post = { title: 'New Title', body: 'This is a new post' };
    }

    getPosts() {
        this.data = [];//remove posts fro getPosts1
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
    getPost1() {
        this.postsService.getPosts1().subscribe(posts => {
            this.posts = [];//Remove posts from getPosts
            //Need to cast the response to the expected response vefore peeking into data field.
            //Used an interface to define the type
            this.posts1 = <UserResponse>posts;
            this.data = this.posts1.data;
        });
    }

    deletePost() {

    }

    postPost() {
        const req = this.http.post('http://jsonplaceholder.typicode.com/posts', this.post);
        req.subscribe(res => {
            console.log(res);
        },
            err => {
                console.log("Error occured");
            }
        );
    }

    moreorLess() {
        if (this.moreOrLess === 'Less Posts') {
            this.moreOrLess = 'More Posts';
            this.number_of_posts = 2;
        }
        else {
            this.moreOrLess = 'Less Posts';
            this.number_of_posts = 1000;
        }
    }

    togglleHobbies() {
        if (this.showHobbies) {
            this.showHobbies = false;
        } else {
            this.showHobbies = true;
        }
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    deleteHobby(ind) {
        this.hobbies.splice(ind, 1)
    }

}

interface address {
    town: string;
    street: string;
}

interface UserResponse {
    data: {
        id: number,
        first_name: string,
        last_name: string,
        avatar: string
    },
    page: number,
    per_page: number,
    total: number,
    total_pages: number
}
interface userType { title: string, body: string }

