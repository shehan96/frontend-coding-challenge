import { Repo } from './../../models/repo.model';
import { DbService } from './../../services/db.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // define variables
  datePipe = new DatePipe('en-US');
  repoList: Repo[];
  pageCount: number = 1;

  constructor(private _db: DbService) { }

  ngOnInit(): void {
    this.getRepoDetails(this.pageCount);
  }

  // method to get repos
  getRepoDetails(page: number) {
    // clear list
    this.repoList = [];
    // get today date
    var dateVal = '' + this.getDate();
    // get data
    this._db.getRepos(dateVal, page).subscribe((result: any) => {
      // get items array
      let items: any[] = result.items;
      // create repo object
      items.forEach((item: any) => {
        let repoObj: Repo = {
          name: item.name,
          avatar_url: item.owner.avatar_url,
          description: item.description,
          stars: item.watchers_count,
          issues: item.open_issues_count,
          owner_name: item.owner.login,
          created_at: item.created_at
        };
        // push to repo list
        this.repoList.push(repoObj as Repo);
      });
      console.log(this.repoList);
    });
  }

  // get date
  getDate() {
    // today
    var today = new Date();
    // prior date
    var priorDate = new Date().setDate(today.getDate() - 30);
    // formated prior date
    var formattedPriorDate = this.datePipe.transform(priorDate, 'yyyy-MM-dd');
    return formattedPriorDate;
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.pageCount++;
      this.getRepoDetailsPagination(this.pageCount);
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) > document.body.offsetHeight;
  }

  // method to get repos
  getRepoDetailsPagination(page: number) {
    // get today date
    var dateVal = '' + this.getDate();
    // get data
    this._db.getRepos(dateVal, page).subscribe((result: any) => {
      // get items array
      let items: any[] = result.items;
      // create repo object
      items.forEach((item: any) => {
        let repoObj: Repo = {
          name: item.name,
          avatar_url: item.owner.avatar_url,
          description: item.description,
          stars: item.watchers_count,
          issues: item.open_issues_count,
          owner_name: item.owner.login,
          created_at: item.created_at
        };
        // push to repo list
        this.repoList.push(repoObj as Repo);
      });
    });
  }

}
