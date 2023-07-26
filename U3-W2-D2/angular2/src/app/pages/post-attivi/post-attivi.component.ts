import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { Post } from 'src/app/Models/post';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent {

  constructor(private postSvc: PostService){}
  post: Post[] = this.postAttivi();

  postAttivi(){
    return this.postSvc.getAttivi()
  }
}


