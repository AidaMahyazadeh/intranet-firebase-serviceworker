import { inject } from "@angular/core";
import { AuthorizationService } from "../auth/authorization.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";


export const adminAuthGuard = () => {
  const authService =inject(AuthorizationService)
  const router= inject(Router)
  const toast= inject(ToastrService)
  if(!authService.isAdmin()){
    toast.warning('You can not access to this page')
    return false
  }
  return true
};
