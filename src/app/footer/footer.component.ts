import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isWideScreen$: Observable<boolean>;

  constructor(
    readonly platform: Platform,
    readonly breakpoint: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.isWideScreen$ = this.breakpoint
      .observe(['(min-width: 599.98px)' || Breakpoints.Web])
      .pipe(map(({ matches }) => matches));
  }
}
