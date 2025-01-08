import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'readifyai-dashboard',
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  currentPage = signal<'home' | 'profile' | 'settings'>('home');
  userRole = signal<'admin' | 'user'>('user'); //todo: remove
  message$ = new BehaviorSubject<string>('Welcome to the Dashboard!');

  menuItems = computed<Array<'home' | 'profile' | 'settings'>>(() => {
    const role = this.userRole();
    return role === 'admin'
      ? ['home', 'profile', 'settings']
      : ['home', 'profile', 'settings'];
  });

  navigateTo(page: 'home' | 'profile' | 'settings') {
    this.currentPage.set(page);
    this.message$.next(`You navigated to ${page.toUpperCase()}!`);
  }
}
