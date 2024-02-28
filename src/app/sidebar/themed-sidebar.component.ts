import { Component } from '@angular/core';
import { ThemedComponent } from '../shared/theme-support/themed.component';
import { SidebarComponent } from './sidebar.component';

/**
 * Themed wrapper for NavbarComponent
 */
@Component({
  selector: 'ds-themed-sidebar',
  styleUrls: [],
  templateUrl: '../shared/theme-support/themed.component.html',
})
export class ThemedSidebarComponent extends ThemedComponent<SidebarComponent> {
  protected getComponentName(): string {
    return 'SidebarComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../themes/${themeName}/app/sidebar/sidebar.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./sidebar.component`);
  }
}
