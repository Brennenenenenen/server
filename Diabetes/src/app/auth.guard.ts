import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: import("@angular/router").ActivatedRouteSnapshot, 
        state: import("@angular/router").RouterStateSnapshot
        ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
            const isAuth = this.authService.getIsAuth();
            if (!isAuth){
                this.router.navigate(['/login2']);
            }
        return isAuth;
    }
    
}