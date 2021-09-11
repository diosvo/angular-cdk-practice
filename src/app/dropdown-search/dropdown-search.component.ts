import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { merge, Observable, Subject } from 'rxjs';
import { filter, map, mapTo, shareReplay, startWith, takeUntil } from 'rxjs/operators';
import { State, states } from './drop-down-search.model';

@Component({
  selector: 'app-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.scss']
})
export class DropdownSearchComponent implements OnInit, OnDestroy {
  stateCtrl = new FormControl();
  filteredStates: Observable<Array<State>>;
  states: Array<State> = states;
  isCaseSensitive = false;

  showPanel$: Observable<boolean>;
  private isPanelHidden$: Observable<boolean>;
  private isPanelVisible$: Observable<boolean>;

  @ViewChild(MatInput, { read: ElementRef, static: true }) private inputEl: ElementRef<HTMLElement>;
  @ViewChild(CdkConnectedOverlay, { static: true }) private connectedOverlay: CdkConnectedOverlay;

  private destroy$ = new Subject<boolean>();

  constructor(
    private focusMonitor: FocusMonitor,
  ) { }

  ngOnInit(): void {
    this.watchForState();
    this.showDropdownPanel();
  }

  private showDropdownPanel(): void {
    this.isPanelHidden$ = this.connectedOverlay.backdropClick.pipe(
      mapTo(false),
      takeUntil(this.destroy$)
    );
    this.isPanelVisible$ = this.focusMonitor.monitor(this.inputEl).pipe(
      filter(focused => !!focused),
      mapTo(true),
      takeUntil(this.destroy$)
    );
    this.showPanel$ = merge(this.isPanelHidden$, this.isPanelVisible$);
  }

  private watchForState(): void {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice()),
        shareReplay(),
        takeUntil(this.destroy$)
      );
  }

  private filterStates(value: string): Array<State> {
    return this.states.filter(state => this.caseCheck(state.name).indexOf(this.caseCheck(value)) === 0);
  }

  private caseCheck(value: string): string {
    return this.isCaseSensitive ? value : value.toLowerCase();
  }

  setCaseSensitive({ checked }: MatSlideToggleChange): void {
    this.isCaseSensitive = checked;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
