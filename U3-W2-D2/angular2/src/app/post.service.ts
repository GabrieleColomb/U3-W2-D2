import { Injectable } from '@angular/core';
import { Post } from './Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] = []
  postAttivi:Post[] = []
  postInattivi:Post[] = []

  constructor() { }

  fetchPost(){
    fetch('../assets/db.json')
      .then(res => res.json())
      .then((data) => {
        data.forEach((element:Post) => {
          this.posts.push(element)
        })
      })
      .catch(err => console.log(err))
  }

  getAttivi(){
      this.fetchPost()
      this.postAttivi = this.posts.filter(post => post.active === true)
      this.posts = []
      return this.postAttivi
    }


  getInattivi(){
      this.fetchPost()
      this.postInattivi = this.posts.filter(post => post.active === false)
      this.posts = []
      return this.postInattivi
    }

  // empty():Post[] {
  //   this.posts = []
  //   return this.posts
  // }
}

