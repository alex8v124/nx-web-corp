import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Mensaje enviado. Nos pondremos en contacto pronto.');
  }
}
