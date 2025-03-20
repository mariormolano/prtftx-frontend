"use client";
import { Exome } from "exome";
import { login } from "./authService";

class AuthStore extends Exome {
  public isAuth: boolean = false;
  public loginModal: number = 1;
  public role: string | null = null;
  public token: string | null = null;

  public async login(email: string, password: string) {
    console.log("Login: ", email, password);

    const user = await login(email, password);
    this.role = user.role;
    this.token = user.token;
    if (user.token) {
      this.isAuth = true;
    }
    return user.token;
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
}

export const authStore = new AuthStore();
