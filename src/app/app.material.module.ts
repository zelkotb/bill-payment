import { NgModule } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
    imports: [
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule
    ],
    exports: [
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule
    ]
})
export class MaterialModule { }