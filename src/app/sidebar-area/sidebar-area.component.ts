import { Component, OnInit } from '@angular/core';
declare const $: any;

export const HEROES = [
  { id: 11, name: 'Mr. Nice' , img: 'src/assets/img/blog/from-blog/f-blog-4.jpg'},
  { id: 12, name: 'Narco', img: 'src/assets/img/blog/from-blog/f-blog-4.jpg' },
  { id: 13, name: 'Bombasto', img: 'src/assets/img/blog/from-blog/f-blog-4.jpg'  },
  { id: 14, name: 'Celeritas' , img: 'src/assets/img/blog/from-blog/f-blog-4.jpg' },
  { id: 15, name: 'Magneta', img: 'src/assets/img/blog/from-blog/f-blog-4.jpg'  },
  { id: 16, name: 'RubberMan', img: 'src/assets/img/blog/from-blog/f-blog-4.jpg'  },
  { id: 17, name: 'Dynama', img: 'src/assets/img/blog/from-blog/f-blog-4.jpg'  },
  { id: 18, name: 'Dr IQ' , img: 'src/assets/img/blog/from-blog/f-blog-4.jpg' },
  { id: 19, name: 'Magma', img: 'src/assets/img/blog/from-blog/f-blog-4.jpg'  },
  { id: 20, name: 'Tornado', img: 'src/assets/img/blog/from-blog/f-blog-4.jpg'  }
];
@Component({
  selector: 'app-sidebar-area',
  templateUrl: './sidebar-area.component.html',
  styleUrls: ['./sidebar-area.component.css']
})
export class SidebarAreaComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    $('.owl-carousel').owlCarousel({
      loop: true
    });
  }
}
