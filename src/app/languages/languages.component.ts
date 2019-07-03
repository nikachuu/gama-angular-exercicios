import { Component, OnInit, Input } from '@angular/core';
import { Language } from 'src/typings/Language';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Language[] = [];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.getLanguages().subscribe(value => {
      console.log(value);
      this.languages = value;
    });
  }

}
