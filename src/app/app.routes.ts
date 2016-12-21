import { Routes , RouterModule} from '@angular/router'
import {  ModuleWithProviders } from '@angular/core'

import { HomeComponent } from './home/home.component'
import { MLandAIComponent} from './mland-ai/mland-ai.component'
import { WebDevComponent} from './web-dev/web-dev.component'
import { AboutComponent} from './about/about.component'

const AppRoutes : Routes = [
  {path : '', component : HomeComponent},
  {path : 'MLandAI', component : MLandAIComponent},
  {path : 'webDev', component : WebDevComponent},
  {path : 'about', component : AboutComponent},
]

export const Routing : ModuleWithProviders = RouterModule.forRoot(AppRoutes)