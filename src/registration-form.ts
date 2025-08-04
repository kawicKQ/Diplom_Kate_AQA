export default class RegistrationForm {
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  phoneNumber: string = "";

  Username(username: string): void {
    const trimmed = username.trim();
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

    if (!usernameRegex.test(trimmed)) {
      throw new Error("Username length should be 3-20 characters, only letters and numbers allowed");
    }
    this.username = trimmed;
  }

  Email(email: string): void {
    if (!email.includes("@")) {
      throw new Error("Incorrect email");
    }
    this.email = email.trim().toLowerCase();
  }

  Password(password: string): void {
    if (password.length < 8) {
      throw new Error("Пароль должен содержать минимум 8 символов");
    }

    const onlyLettersAndDigits = /^[A-Za-z0-9]+$/;
    if (!onlyLettersAndDigits.test(password)) {
      throw new Error("Only letters and numbers allowed");
    }
    this.password = password;
  }

  ConfirmPassword(confirm: string): void {
    if (confirm !== this.password) {
      throw new Error("Passwords aren't matching");
    }
    this.confirmPassword = confirm;
  }

  PhoneNumber(phone: string): void {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length < 10 || cleaned.length > 15) {
      throw new Error("Phone Number should be 10-15 characters");
    }
    this.phoneNumber = cleaned;
  }

  isValid(): boolean {
    return (
      this.username !== "" &&
      this.email !== "" &&
      this.password !== "" &&
      this.confirmPassword === this.password &&
      this.phoneNumber !== ""
    );
  }

  getFormData(): object {
    if (!this.isValid()) {
      throw new Error("Form filled with invalid data");
    }
    return {
      username: this.username,
      email: this.email,
      password: this.password,
      phone: this.phoneNumber,
    };
  }
}
