import { Component } from '@angular/core';
const data = [
    {
        title: 'Forget Angular 0, Google jumps straight to Angular 4',
        content:`Last month, Google surprised everyone when it detailed plans for Angular 3 to
                 be released a short six months after Angular 2's arrival. Now it turns out there
                 will be no Angular 3 release after all. Instead, Google will go right to version
                4 of its popular JavaScript framework in March.`,
        reference: "http://www.infoworld.com/article/3150716/application-development/forget-angular-3-google-skips-straight-to-angular-4.html"
    },
    {
        title: 'Forget Angular 1, Google jumps straight to Angular 4',
        content:`Last month, Google surprised everyone when it detailed plans for Angular 3 to
                 be released a short six months after Angular 2's arrival. Now it turns out there
                 will be no Angular 3 release after all. Instead, Google will go right to version
                4 of its popular JavaScript framework in March.`,
        reference: "http://www.infoworld.com/article/3150716/application-development/forget-angular-3-google-skips-straight-to-angular-4.html"
    },
    {
        title: 'Forget Angular 2, Google jumps straight to Angular 4',
        content:`Last month, Google surprised everyone when it detailed plans for Angular 3 to
                 be released a short six months after Angular 2's arrival. Now it turns out there
                 will be no Angular 3 release after all. Instead, Google will go right to version
                4 of its popular JavaScript framework in March.`,
        reference: "http://www.infoworld.com/article/3150716/application-development/forget-angular-3-google-skips-straight-to-angular-4.html"},
    {
        title: 'Forget Angular 3, Google jumps straight to Angular 4',
        content:`Last month, Google surprised everyone when it detailed plans for Angular 3 to
                 be released a short six months after Angular 2's arrival. Now it turns out there
                 will be no Angular 3 release after all. Instead, Google will go right to version
                4 of its popular JavaScript framework in March.`,
        reference: "http://www.infoworld.com/article/3150716/application-development/forget-angular-3-google-skips-straight-to-angular-4.html"
    },
    {
        title: 'Forget Angular 4, Google jumps straight to Angular 4',
        content:`Last month, Google surprised everyone when it detailed plans for Angular 3 to
                 be released a short six months after Angular 2's arrival. Now it turns out there
                 will be no Angular 3 release after all. Instead, Google will go right to version
                4 of its popular JavaScript framework in March.`,
        reference: "http://www.infoworld.com/article/3150716/application-development/forget-angular-3-google-skips-straight-to-angular-4.html"
    },
    {
        title: 'Forget Angular 5, Google jumps straight to Angular 4',
        content:`Last month, Google surprised everyone when it detailed plans for Angular 3 to
                 be released a short six months after Angular 2's arrival. Now it turns out there
                 will be no Angular 3 release after all. Instead, Google will go right to version
                4 of its popular JavaScript framework in March.`,
        reference: "http://www.infoworld.com/article/3150716/application-development/forget-angular-3-google-skips-straight-to-angular-4.html"
    },
    {
        title: 'Forget Angular 6, Google jumps straight to Angular 4',
        content:`Last month, Google surprised everyone when it detailed plans for Angular 3 to
                 be released a short six months after Angular 2's arrival. Now it turns out there
                 will be no Angular 3 release after all. Instead, Google will go right to version
                4 of its popular JavaScript framework in March.`,
        reference: "http://www.infoworld.com/article/3150716/application-development/forget-angular-3-google-skips-straight-to-angular-4.html"
    }
];
@Component({
    moduleId: module.id,
    selector: 'content-component',
    templateUrl: 'content.component.html',
    styleUrls:['content.component.css']
})

export class ContentComponent {
    data = data;
    
    
}