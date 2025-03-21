"use client";
import { Exome } from "exome";
import { login, register } from "./authService";
import { roleEnum } from "./roleEnum";

class AuthStore extends Exome {
  public isAuth: boolean = false;
  public loginModal: number = 1;
  public role: roleEnum = roleEnum.NONE;
  public token: string | null = null;
  public tokenStatus: number = 0;

  public async login(email: string, password: string) {
    console.log("Login: ", email, password);

    const user = await login(email, password);
    this.role = user.role as roleEnum;
    this.token = user.token;
    if (user.token) {
      this.isAuth = true;
      this.tokenStatus = 2;
    }
    return user.token;
  }

  public async register(
    name: string,
    email: string,
    password: string,
    roles: roleEnum
  ) {
    const user = await register(name, email, password, roles);
    console.log("User: ", user);
    return user;
  }

  public isValidate() {
    this.isAuth = true;
  }

  public logout() {
    this.isAuth = false;
  }

  public showLoginModal() {
    this.loginModal = 1;
  }

  public showRegisterModal() {
    this.loginModal = 2;
  }

  public setTokenStatus(status: number) {
    this.tokenStatus = status;
  }
}

export const authStore = new AuthStore();
