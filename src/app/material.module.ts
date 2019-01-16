import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports : [
        MatCardModule,MatTooltipModule,MatIconModule,MatButtonModule,MatFormFieldModule, MatInputModule,FormsModule, ReactiveFormsModule
    ],
    exports : [
        MatCardModule,MatTooltipModule,MatIconModule,MatButtonModule,MatFormFieldModule, MatInputModule,FormsModule, ReactiveFormsModule
    ]
})

export class MaterialModule {}