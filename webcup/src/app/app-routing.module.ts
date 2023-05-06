import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: "home", loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  { 
    path: "decoder", loadChildren: () => import('./decoder/decoder.module')
      .then(m => m.DecoderModule)
  },
  { 
    path: "faq", loadChildren: () => import('./faq/faq.module')
      .then(m => m.FaqModule)
  },
  { 
    path: "support", loadChildren: () => import('./support/support.module')
      .then(m => m.SupportModule)
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
