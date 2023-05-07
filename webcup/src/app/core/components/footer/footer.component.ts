import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateY(30px)' }),
        animate('.5s ease-out', style({ opacity: '1', transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class FooterComponent {
	partners = [
		{
		  image: '../../../../assets/images/partenaires/bocasay.jpg',
		  link: 'https://www.bocasay.com',
		  alt: 'Logo Bocasay'
		},
		{
		  image: '../../../../assets/images/partenaires/ibonia_logo_transparent.png',
		  link: 'https://www.ibonia.com',
		  alt: 'Logo Ibonia'
		},
		{
		  image: '../../../../assets/images/partenaires/Ingenosya.png',
		  link: 'https://www.ingenosya.com',
		  alt: 'Logo Ingenosya'
		},
		{
		  image: '../../../../assets/images/partenaires/Portail Nexources.png',
		  link: 'https://www.nexources.com',
		  alt: 'Logo Nexources'
		},
		{
		  image: '../../../../assets/images/partenaires/pulse.png',
		  link: 'https://www.pulse.mg',
		  alt: 'Logo Pulse'
		},
		{
		  image: '../../../../assets/images/partenaires/Inclusiv Academia.png',
		  link: 'https://www.inclusiv.mg',
		  alt: 'Logo Inclusiv Academia'
		},
		{
		  image: '../../../../assets/images/partenaires/nexta.jpg',
		  link: 'http://www.nexta.mg',
		  alt: 'Logo Nexta'
		},
		{
		  image: '../../../../assets/images/partenaires/Novity.png',
		  link: 'https://www.novity.io',
		  alt: 'Logo Novity'
		},
		{
		  image: '../../../../assets/images/partenaires/Studio Kalanoor.png',
		  link: 'https://www.studiokalanoor.com',
		  alt: 'Logo Studio Kalanoor'
		},
		{
		  image: '../../../../assets/images/partenaires/P4H.png',
		  link: 'https://www.passion4humanity.com',
		  alt: 'Logo Passion for Humanity'
		},
		{
		  image: '../../../../assets/images/partenaires/telma.jpg',
		  link: 'https://www.telma.mg',
		  alt: 'Logo Telma'
		},
		{
		  image: '../../../../assets/images/partenaires/fulldigits.png',
		  link: 'https://www.fulldigits.com',
		  alt: 'Logo Fulldigits'
		}
	  ];

	  
}
