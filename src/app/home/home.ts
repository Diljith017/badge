import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post';
import { Authservice } from '../authservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  posts: any[] = [];

  private postService = inject(PostService);
  private authService = inject(Authservice);
  private router = inject(Router);

  ngOnInit(): void {

    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (error) => {
        console.log('Error fetching posts', error);
      }
    });

  }

 
}