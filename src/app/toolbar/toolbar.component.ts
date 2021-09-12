import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { CreateDialogComponent } from '../cdk-overlay/create-dialog/create-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  constructor(
    private overlay: Overlay,
    private positionBuilder: OverlayPositionBuilder
  ) { }

  createDialog(): void {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.positionBuilder.global().centerHorizontally().centerVertically()
    });
    const dialogPortal = new ComponentPortal(CreateDialogComponent);

    overlayRef.attach(dialogPortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}
