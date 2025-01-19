import { Component, HostListener, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';





@Component({  
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

  
})
export class ToolbarComponent implements OnInit {
  isTransparent: boolean = true;

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  constructor(private router: Router) {}


  ngOnInit(): void {
    this.checkScroll();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isTransparent = scrollPosition < 50;
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

}
