import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { merge, Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.scss']
})
export class DropdownSearchComponent implements OnInit {
  showPanel$: Observable<boolean>;
  private isPanelHidden$: Observable<boolean>;
  private isPanelVisible$: Observable<boolean>;

  @ViewChild(MatInput, { read: ElementRef, static: true }) private inputEl: ElementRef<HTMLElement>;
  @ViewChild(CdkConnectedOverlay, { static: true }) private connectedOverlay: CdkConnectedOverlay;

  constructor(
    private focusMonitor: FocusMonitor,
  ) { }

  ngOnInit(): void {
    this.showDropdownPanel();
  }

  private showDropdownPanel(): void {
    this.isPanelHidden$ = this.connectedOverlay.backdropClick.pipe(mapTo(false));
    this.isPanelVisible$ = this.focusMonitor.monitor(this.inputEl).pipe(
      filter(focused => !!focused),
      mapTo(true)
    );
    this.showPanel$ = merge(this.isPanelHidden$, this.isPanelVisible$);
  }
}
