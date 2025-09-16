import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">404</h1>
        <p class="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a (click)="goHome()" class="text-pulse-500 hover:text-pulse-700 underline cursor-pointer">
          Return to Home
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      this.router.url
    );
  }

  goHome() {
    this.router.navigate(['/']);
  }
}