import { Post } from './../models/post';
import { CreatepostService } from './createpost.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private createPostService: CreatepostService, public snackBar: MatSnackBar,
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
    this.createPostService.createPost(this.post).subscribe(
      (response) => {
        this.dialogRef.close();
        this.snackBar.open('Post created successfully', '', {
          duration: 2000
        });
      }
    );
  };

}
