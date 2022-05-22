import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-tests-fundamentals'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-tests-fundamentals');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'unit-tests-fundamentals app is running!'
    );
  });

  it('Testando funcao de soma', () => {
    const app = fixture.componentInstance;
    expect(app.soma(2, 2)).toEqual(4);
  });

  it('Testando funcao de soma() dando valor errado', () => {
    const app = fixture.componentInstance;
    expect(app.soma(2, 2)).not.toEqual(2);
  });
});
