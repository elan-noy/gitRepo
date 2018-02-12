import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiscComponent } from './components/misc/misc.component';
import { AboutComponent } from './components/about/about.component';
import { AnimationComponent } from './components/animation/animation.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'misc',
        component: MiscComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'animation',
        component: AnimationComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);