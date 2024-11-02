import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { QuestionsPageComponent } from './modules/questions-page/questions-page.component';
import { AllTagsPageComponent } from './modules/all-tags-page/all-tags-page.component';
import { AllUsersPageComponent } from './modules/all-users-page/all-users-page.component';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { PostComponent } from './modules/post/post.component';
import { PostFormComponent } from './modules/post-form/post-form.component';
import { ProfilePageComponent } from './modules/profile-page/profile-page.component';
import { TagPageComponent } from './modules/all-tags-page/tag-page/tag-page.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'CLONE Stack Overflow - Where Developers Learn, Share, & Build Careers' },
  { path: 'questions', component: QuestionsPageComponent, title: 'All Questions - CLONE Stack Overflow' },
  { path: 'tags', component: AllTagsPageComponent, title: 'Tags - CLONE Stack Overflow' },
  { path: 'users', component: AllUsersPageComponent, title: 'Users - CLONE Stack Overflow' },
  { path: 'register', component: RegisterComponent, title: 'Sign Up - CLONE Stack Overflow' },
  { path: 'login', component: LoginComponent, title: 'Log In - CLONE Stack Overflow' },
  { path: 'questions/:id', component: PostComponent, title: 'Users - CLONE Stack Overflow' },
  { path: 'users/:id', component: ProfilePageComponent, title: 'Users - CLONE Stack Overflow' },
  { path: 'tags/:tagname', component: TagPageComponent, title: 'Users - CLONE Stack Overflow' },
  { path: 'add/question', component: PostFormComponent, title: 'Ask a Question - CLONE Stack Overflow' },
  { path: '**', component: NotFoundComponent, title: 'Error 404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }