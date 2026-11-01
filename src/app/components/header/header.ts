import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  isDarkMode = false;

  ngOnInit() {
    // Check system preference or default to dark
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  private updateTheme() {
    const root = document.documentElement;
    if (this.isDarkMode) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }
}
