import { PostService } from './../services/post.service';
import { Post } from './../models/post';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private postService: PostService, public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<CreatePostComponent>) { }
  post: Post;
  postFormGroup: FormGroup;
  ngOnInit() {
    this.post = new Post();
    this.postFormGroup = new FormGroup({
      title: new FormControl(this.post.title, Validators.required),
      body: new FormControl(this.post.body, Validators.required),
    });
  }

  createPost() {
    this.post.author = 'Prabhjyot';
    this.postService.createPost(this.post).subscribe(
      (response) => {
        this.dialogRef.close();
        this.snackBar.open('Post created successfully', '', {
          duration: 2000
        });
      }
    );
  }

}
