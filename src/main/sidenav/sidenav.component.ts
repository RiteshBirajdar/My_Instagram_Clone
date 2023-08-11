import { Component, OnInit } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone:true,
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports:[HeaderComponent,BodyComponent,FooterComponent],
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}