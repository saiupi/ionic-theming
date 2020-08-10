import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonsRegistorPage } from './persons-registor.page';

describe('PersonsRegistorPage', () => {
  let component: PersonsRegistorPage;
  let fixture: ComponentFixture<PersonsRegistorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsRegistorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonsRegistorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
