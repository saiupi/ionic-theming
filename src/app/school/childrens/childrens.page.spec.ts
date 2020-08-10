import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildrensPage } from './childrens.page';

describe('ChildrensPage', () => {
  let component: ChildrensPage;
  let fixture: ComponentFixture<ChildrensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildrensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
