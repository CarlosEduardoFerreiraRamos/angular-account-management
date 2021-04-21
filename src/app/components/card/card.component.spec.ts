import { Component } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from './card.component';
import { CardModule } from './card.module';


@Component({template: `
  <app-card title="Test">
    <div class="target">INNER_TEXT</div>
  </app-card>
`})
export class TestCardComponent {}



describe('CardComponent', () => {
  let fixture: ComponentFixture<TestCardComponent>;
  let cardComponent: CardComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[
        BrowserAnimationsModule,
        CardModule
      ],
      declarations: [  TestCardComponent ]
    })
    .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCardComponent);
    fixture.detectChanges();
    cardComponent = fixture.debugElement.query(By.directive(CardComponent)).componentInstance;
  });

  it('should create', () => {
    expect(cardComponent).toBeTruthy();
  });

  it('should display title', () => {
    expect(cardComponent.title).toEqual(cardComponent.title);
  })

  it('should display content', () => {
    const element: HTMLElement = fixture.debugElement.query(By.directive(CardComponent)).nativeElement
    const content = element.querySelector<HTMLElement>('.target').innerText
    expect(content).toEqual('INNER_TEXT');
  })
});
