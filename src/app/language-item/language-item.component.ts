import { Language } from 'src/typings/Language';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.css']
})
export class LanguageItemComponent implements OnInit {

  @Input() data: Language;

  constructor() { }

  ngOnInit() {
  }

}
