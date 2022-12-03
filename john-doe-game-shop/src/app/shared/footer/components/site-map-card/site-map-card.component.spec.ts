import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMapCardComponent } from './site-map-card.component';

describe('SiteMapCardComponent', () => {
  let component: SiteMapCardComponent;
  let fixture: ComponentFixture<SiteMapCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMapCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMapCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
