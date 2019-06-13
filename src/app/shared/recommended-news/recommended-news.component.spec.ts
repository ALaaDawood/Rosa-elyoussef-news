import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedNewsComponent } from './recommended-news.component';

describe('RecommendedNewsComponent', () => {
  let component: RecommendedNewsComponent;
  let fixture: ComponentFixture<RecommendedNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
