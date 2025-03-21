"use client";
import { Exome } from "exome";
import { login, register } from "./authService";
import { roleEnum } from "./roleEnum";
class AuthStore extends Exome {
  public isAuth: boolean = false;
  public loginModal: number = 1;
  public role: roleEnum = roleEnum.NONE;
  public serverToken: string | null = null;
  public tokenStatus: number = 0;

  public async login(email: string, password: string) {
    const data = await login(email, password);
    if (data.success) {
      this.role = data.role as roleEnum;
      this.serverToken = data.token;
      this.isAuth = true;
      this.tokenStatus = 2;
      return true;
    }
    return false;
  }

  public async register(
    name: string,
    email: string,
    password: string,
    roles: roleEnum
  ) {
    const data = await register(name, email, password, roles);
    if (data.success) {
      this.role = data.role as roleEnum;
      this.serverToken = data.token;
      this.isAuth = true;
      this.tokenStatus = 2;
      return true;
    } else {
      console.log(data);
      return false;
    }
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
