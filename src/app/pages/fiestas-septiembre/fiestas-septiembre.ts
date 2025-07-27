import { Component } from '@angular/core';
import { Saludos } from '../../components/saludos/saludos';
import { EventosSeptiembre } from '../../components/eventos-septiembre/eventos-septiembre';
import { ReligiososSeptiembre } from '../../components/religiosos-septiembre/religiosos-septiembre';
import { NoticiasMonlora } from '../../components/noticias-monlora/noticias-monlora';

@Component({
  selector: 'app-fiestas-septiembre',
  imports: [ Saludos, EventosSeptiembre, ReligiososSeptiembre, NoticiasMonlora ],
  templateUrl: './fiestas-septiembre.html',
  styleUrl: './fiestas-septiembre.css'
})
export class FiestasSeptiembre {

}
