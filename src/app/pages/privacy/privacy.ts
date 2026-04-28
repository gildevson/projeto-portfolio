import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-privacy',
  imports: [RouterLink, NgClass, Navbar],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {
  activeTab = signal<'privacidade' | 'cookies'>('privacidade');
}
