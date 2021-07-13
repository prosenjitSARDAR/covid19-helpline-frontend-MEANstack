import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  author_NAME: String = "Prosenjit Sardar";
  author_Email: String = Config.author_GMAIL;
  author_GitHub: String = Config.author_GITHUB;
  author_LinkedIn: String = Config.author_LINKEDIN;

  constructor() { }

  ngOnInit(): void {
  }

  disclaimer() {
    window.alert("Disclaimer");
  }

}
