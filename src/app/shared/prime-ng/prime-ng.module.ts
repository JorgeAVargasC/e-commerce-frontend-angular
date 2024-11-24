import { NgModule } from '@angular/core'

import { TableModule } from 'primeng/table'
import { InputTextModule } from 'primeng/inputtext'
import { DialogModule } from 'primeng/dialog'
import { ToolbarModule } from 'primeng/toolbar'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { RatingModule } from 'primeng/rating'
import { InputNumberModule } from 'primeng/inputnumber'
import { RadioButtonModule } from 'primeng/radiobutton'
import { SelectModule } from 'primeng/select'
import { ButtonModule } from 'primeng/button'
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon'
import { TagModule } from 'primeng/tag'
import { CardModule } from 'primeng/card'
import { MenubarModule } from 'primeng/menubar'
import { ScrollTopModule } from 'primeng/scrolltop'
import { DrawerModule } from 'primeng/drawer'
import { ChipModule } from 'primeng/chip'
import { FloatLabelModule } from 'primeng/floatlabel'
import { MessageService } from 'primeng/api'
import { Toast } from 'primeng/toast'

@NgModule({
  imports: [
    TableModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    RadioButtonModule,
    SelectModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    CardModule,
    MenubarModule,
    ScrollTopModule,
    DrawerModule,
    DialogModule,
    ChipModule,
    FloatLabelModule,
    Toast
  ],
  exports: [
    TableModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    RadioButtonModule,
    SelectModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    CardModule,
    MenubarModule,
    ScrollTopModule,
    DrawerModule,
    DialogModule,
    ChipModule,
    FloatLabelModule,
    Toast
  ],
  providers: [MessageService]
})
export class PrimeNgModule {}
