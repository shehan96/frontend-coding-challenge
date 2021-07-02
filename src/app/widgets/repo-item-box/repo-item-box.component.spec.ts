import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoItemBoxComponent } from './repo-item-box.component';

describe('RepoItemBoxComponent', () => {
  let component: RepoItemBoxComponent;
  let fixture: ComponentFixture<RepoItemBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoItemBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
