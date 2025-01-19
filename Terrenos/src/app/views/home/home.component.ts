import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import {MatButtonModule} from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/shared/footer/footer.component";
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  imports: [CommonModule, MatFormFieldModule, MatButtonModule, MatRippleModule, MatCardModule, MatChipsModule, MatProgressBarModule, MatSelectModule, MatInputModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  slides = [
    { image: 'https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg?text=Slide+1' },
    { image: 'https://www.ingeom.es/images/easyblog_articles/117/como-elegir-un-buen-terreno-para-construir.jpg?text=Slide+2' },
    { image: 'https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg?text=Slide+3' }
  ];

  ngOnInit() {
    
    this.typewriterEffect();
    
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
    });

    

  }

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  typewriterEffect() {
    const typewriter = document.getElementById('typewriter') as HTMLElement;
    if (!typewriter) return;
    const words = ['Descubrir', 'Invertir', 'Explorar'];
    let wordIndex = 0;
    let charIndex = 0;
    const speed = 100; // Velocidad del efecto
    const delayBetweenWords = 2000; // Retraso entre palabras

    function typeWriter() {
      if (charIndex < words[wordIndex].length) {
        typewriter.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(() => {
          typewriter.textContent = '';
          charIndex = 0;
          wordIndex = (wordIndex + 1) % words.length;
          typeWriter();
        }, delayBetweenWords);
      }
    }

    typeWriter();
  }
}

