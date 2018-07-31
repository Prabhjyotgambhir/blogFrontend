import { Router } from '@angular/router';
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
  file: File;
  postSaved: boolean;
  constructor(private postService: PostService, public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<CreatePostComponent>, private router: Router) { }
  post: Post;
  postFormGroup: FormGroup;
  ngOnInit() {
    this.post = new Post();
    this.postFormGroup = new FormGroup({
      title: new FormControl(this.post.title, Validators.required),
      body: new FormControl(this.post.body, Validators.required),
      postImage: new FormControl(this.post.postImage, Validators.required)
    });
  }

  createPost() {
    this.postSaved = true;
    this.post.author = 'Prabhjyot';
    this.postService.createPost(this.post).subscribe(
      (response) => {
        this.postSaved = false;
        this.dialogRef.close();
        this.snackBar.open('Post created successfully', '', {
          duration: 2000
        });
        this.router.navigateByUrl('');
      }
    );
  }

  handleFileInput(files) {
    this.file = files.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = (event) => {
      this.post.postImage = fileReader.result;
    };
    fileReader.readAsDataURL(this.file);
  }

  cancel() {
    this.dialogRef.close();
  }
}
