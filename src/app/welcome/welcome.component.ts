import { Router } from '@angular/router';
import { CreatePostComponent } from './../create-post/create-post.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  createPost() {
    const dialogRef = this.dialog.open(CreatePostComponent, {
      width: '400px',
    });
  }

  home() {
    this.router.navigateByUrl('');
  }
}
