/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should create ', () => {
    //     expect(component).toBeTruthy();
    // });

    it('hpskillcomponent should be ""', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const home = fixture.debugElement.componentInstance;
        expect(home.skillInput).toBe(typeof String);
    });
});
