import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagementListPage } from './management-list.page';

describe('ManagementListPage', () => {
  let component: ManagementListPage;
  let fixture: ComponentFixture<ManagementListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagementListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
