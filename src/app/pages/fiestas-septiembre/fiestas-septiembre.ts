import { Component } from '@angular/core';
import { Saludos } from '../../components/saludos/saludos';
import { EventosSeptiembre } from '../../components/eventos-septiembre/eventos-septiembre';

@Component({
  selector: 'app-fiestas-septiembre',
  imports: [ Saludos, EventosSeptiembre ],
  templateUrl: './fiestas-septiembre.html',
  styleUrl: './fiestas-septiembre.css'
})
export class FiestasSeptiembre {

}
