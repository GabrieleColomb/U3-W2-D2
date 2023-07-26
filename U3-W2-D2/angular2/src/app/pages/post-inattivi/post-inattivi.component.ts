import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent {

  post:Post[] = this.postInattivi()

  constructor(private postSvc: PostService){}

  postInattivi(){
    return this.postSvc.getInattivi()
  }
}
