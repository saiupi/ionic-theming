import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiversListPage } from './divers-list.page';

describe('DiversListPage', () => {
  let component: DiversListPage;
  let fixture: ComponentFixture<DiversListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiversListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
