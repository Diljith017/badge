import { CanActivateFn } from '@angular/router';
import { Authservice } from './authservice';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {


  const authService = inject(Authservice);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

 return router.createUrlTree(['/login']);
  
 
};
