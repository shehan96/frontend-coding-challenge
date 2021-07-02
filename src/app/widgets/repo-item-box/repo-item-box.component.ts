import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-item-box',
  templateUrl: './repo-item-box.component.html',
  styleUrls: ['./repo-item-box.component.css']
})
export class RepoItemBoxComponent implements OnInit {

  // define variables
  @Input() repoName : string;
  @Input() repoImg : string;
  @Input() repoDesc : string;
  @Input() repoStars : number;
  @Input() repoIssues : number;
  @Input() repoTimeInterval : string;

  repoStarVal : string = '';
  repoIssuesVal : string = '';

  constructor() { }

  ngOnInit(): void {
    this.generateRepoStarValue();
    this.generateRepoIssuesValue();
  }

  // method to generate repo star value
  generateRepoStarValue(){
    if(this.repoStars > 999){
      this.repoStars = this.repoStars / 1000;
      this.repoStarVal = this.repoStars + 'k';
    }
    else {
      this.repoStarVal = ''+this.repoStars;
    }
  }

  // method to generate repo issues value
  generateRepoIssuesValue(){
    if(this.repoIssues > 999){
      this.repoIssues = this.repoIssues / 1000;
      this.repoIssuesVal = this.repoIssues + 'k';
    }
    else {
      this.repoIssuesVal = ''+this.repoIssues;
    }
  }

}
