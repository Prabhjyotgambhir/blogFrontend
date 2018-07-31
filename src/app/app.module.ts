import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Services
import { PostService } from './services/post.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material modules
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { CreatePostComponent } from './create-post/create-post.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/card/card.component';
import { MainAdvertComponent } from './main-advert/main-advert.component';
import { PostContentComponent } from './post-content/post-content.component';
import { AboutComponent } from './about/about.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { ContentComponent } from './content/content.component';
import { InstagramComponent } from './instagram/instagram.component';
import { CategoriesComponent } from './categories/categories.component';
import { PopularPostsComponent } from './popular-posts/popular-posts.component';
import { SignupComponent } from './signup/signup.component';
import { ReadmoreComponent } from './readmore/readmore.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePostComponent,
    WelcomeComponent,
    HomeComponent,
    CardComponent,
    MainAdvertComponent,
    PostContentComponent,
    AboutComponent,
    RecentPostsComponent,
    CardHomeComponent,
    ContentComponent,
    InstagramComponent,
    CategoriesComponent,
    PopularPostsComponent,
    SignupComponent,
    ReadmoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  entryComponents: [
    CreatePostComponent
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
