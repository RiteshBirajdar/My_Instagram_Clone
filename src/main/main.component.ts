import { Component, OnInit } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [SidenavComponent,BodyComponent],
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}