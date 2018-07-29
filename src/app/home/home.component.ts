import { MediaMatcher } from '@angular/cdk/layout';
import { Post } from './../models/post';
import { PostService } from './../services/post.service';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  postList: Post[];
  mobileQuery: MediaQueryList;
  postStyles;
  constructor(private postService: PostService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  private _mobileQueryListener: () => void;

  ngOnInit() {
    this.getAllPosts();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getAllPosts(): void {
    this.postList = [];
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.postList = response;
      }
    );
  }
}
