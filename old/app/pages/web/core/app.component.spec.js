"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'App Web!'", testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('App Web!');
    }));
    it('should render title in a h1 tag', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('App Web!');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXVEO0FBRXZELGlEQUErQztBQUUvQyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3JCLFVBQVUsQ0FBQyxlQUFLLENBQUM7UUFDYixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzNCLFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1NBQ0osQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxlQUFLLENBQUM7UUFDOUIsSUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsNEJBQVksQ0FBQyxDQUFDO1FBQ3RELElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsaUNBQWlDLEVBQUUsZUFBSyxDQUFDO1FBQ3hDLElBQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDRCQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsaUNBQWlDLEVBQUUsZUFBSyxDQUFDO1FBQ3hDLElBQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDRCQUFZLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDcEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGFzeW5jIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuZGVzY3JpYmUoJ0FwcENvbXBvbmVudCcsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKGFzeW5jKCgpID0+IHtcbiAgICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAgICAgICAgIEFwcENvbXBvbmVudFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuY29tcGlsZUNvbXBvbmVudHMoKTtcbiAgICB9KSk7XG4gICAgXG4gICAgaXQoJ3Nob3VsZCBjcmVhdGUgdGhlIGFwcCcsIGFzeW5jKCgpID0+IHtcbiAgICAgICAgY29uc3QgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEFwcENvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGFwcCA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmNvbXBvbmVudEluc3RhbmNlO1xuICAgICAgICBleHBlY3QoYXBwKS50b0JlVHJ1dGh5KCk7XG4gICAgfSkpO1xuICAgIFxuICAgIGl0KGBzaG91bGQgaGF2ZSBhcyB0aXRsZSAnQXBwIFdlYiEnYCwgYXN5bmMoKCkgPT4ge1xuICAgICAgICBjb25zdCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQXBwQ29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgYXBwID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICAgIGV4cGVjdChhcHAudGl0bGUpLnRvRXF1YWwoJ0FwcCBXZWIhJyk7XG4gICAgfSkpO1xuICAgIFxuICAgIGl0KCdzaG91bGQgcmVuZGVyIHRpdGxlIGluIGEgaDEgdGFnJywgYXN5bmMoKCkgPT4ge1xuICAgICAgICBjb25zdCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoQXBwQ29tcG9uZW50KTtcbiAgICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGNvbnN0IGNvbXBpbGVkID0gZml4dHVyZS5kZWJ1Z0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZXhwZWN0KGNvbXBpbGVkLnF1ZXJ5U2VsZWN0b3IoJ2gxJykudGV4dENvbnRlbnQpLnRvQ29udGFpbignQXBwIFdlYiEnKTtcbiAgICB9KSk7XG59KTtcbiJdfQ==