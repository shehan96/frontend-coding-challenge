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
  @Input() repoStars : string;
  @Input() repoIssues : string;
  repoTimeInterval : string = 'Submitted 30 days ago by Tensserflow';

  constructor() { }

  ngOnInit(): void {
  }

}
