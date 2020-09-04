import { NgModule } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';




@NgModule({
    imports: [
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule,
        MatChipsModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule
    ],
    exports: [
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule,
        MatChipsModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule
    ]
})
export class MaterialModule { }