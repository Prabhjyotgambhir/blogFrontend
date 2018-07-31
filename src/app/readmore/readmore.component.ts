import { Post } from './../models/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadmoreComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
