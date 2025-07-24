import { Routes } from '@angular/router';
import { FiestasSeptiembre } from './pages/fiestas-septiembre/fiestas-septiembre';
import { FiestasMayo } from './pages/fiestas-mayo/fiestas-mayo';
import { Historial } from './pages/historial/historial';
import { Colaboradores } from './pages/colaboradores/colaboradores';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
    { path: '', redirectTo: '/fiestasSeptiembre', pathMatch: 'full' },
    { path: 'fiestasSeptiembre', component: FiestasSeptiembre },
    { path: 'fiestasMayo', component: FiestasMayo },
    { path: 'historial', component: Historial },
    { path: 'colaboradores', component: Colaboradores },
    { path: 'admin', component: Admin },
];
