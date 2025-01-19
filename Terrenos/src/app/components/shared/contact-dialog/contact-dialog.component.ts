import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class ContactDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ContactDialogComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  onSubmit(form: any): void {
    if (form.valid) {
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
      console.log('Formulario enviado', form.value);
      this.dialogRef.close();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}