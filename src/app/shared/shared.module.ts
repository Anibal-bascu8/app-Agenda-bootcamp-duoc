import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import {CheckboxModule} from 'primeng/checkbox';
import {TabViewModule} from 'primeng/tabview';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import { MenuModule } from 'primeng/menu';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressBarModule} from 'primeng/progressbar';
import {PanelModule} from 'primeng/panel';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {TreeSelectModule} from 'primeng/treeselect';
import {MultiSelectModule} from 'primeng/multiselect';
import {PaginatorModule} from 'primeng/paginator';
import { MenubarModule } from 'primeng/menubar';
import { ChipModule } from 'primeng/chip';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    RadioButtonModule,
    InputSwitchModule,
    InputTextModule,
    BadgeModule,
    TabMenuModule,
    TagModule,
    AvatarModule,
    TabViewModule,
    CheckboxModule,
    CalendarModule,
    MenuModule,
    InputNumberModule,
    InputTextareaModule,
    FieldsetModule,
    TableModule,
    SplitButtonModule,
    ToolbarModule,
    DropdownModule,
    DialogModule,
    ToastModule,
    FileUploadModule,
    ProgressBarModule,
    PanelModule,
    RippleModule,
    OverlayPanelModule,
    CardModule,
    DividerModule,
    TreeSelectModule,
    MultiSelectModule,
    PaginatorModule,
    MenubarModule,
    ChipModule,
    
  ]
})
export class SharedModule { }
