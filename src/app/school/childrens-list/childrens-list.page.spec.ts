import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildrensListPage } from './childrens-list.page';

describe('ChildrensListPage', () => {
  let component: ChildrensListPage;
  let fixture: ComponentFixture<ChildrensListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrensListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildrensListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
