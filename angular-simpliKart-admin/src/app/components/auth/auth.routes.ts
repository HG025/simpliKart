import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { RegisterComponent } from "./register/register.component";
import { OtpComponent } from "./otp/otp.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";

export const auth: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "forgot-password",
        component: ForgotPasswordComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "otp",
        component: OtpComponent
    },
    {
        path: "update-password",
        component: UpdatePasswordComponent
    }

]