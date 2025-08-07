export default class RegistrationForm {
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  phoneNumber: string = "";

  setUsername(username: string): void {
    const trimmed = username.trim();
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

    if (!usernameRegex.test(trimmed)) {
      throw new Error("Username length should be 3–20 characters, only letters and numbers allowed");
    }
    this.username = trimmed;
  }

  setEmail(email: string): void {
    if (!email.includes("@")) {
      throw new Error("Incorrect email");
    }
    this.email = email.trim().toLowerCase();
  }

  setPassword(password: string): void {
    if (password.length < 8) {
      throw new Error("Password should have at least 8 characters");
    }

    const onlyLettersAndDigits = /^[A-Za-z0-9]+$/;
    if (!onlyLettersAndDigits.test(password)) {
      throw new Error("Only letters and numbers allowed");
    }

    this.password = password;
  }

  setConfirmPassword(confirm: string): void {
    if (confirm !== this.password) {
      throw new Error("Passwords aren't matching");
    }
    this.confirmPassword = confirm;
  }

  setPhoneNumber(phone: string): void {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length < 10 || cleaned.length > 15) {
      throw new Error("Phone Number should be 10–15 characters");
    }
    this.phoneNumber = cleaned;
  }

  isValidData(): boolean {
    return (
      this.username !== "" &&
      this.email !== "" &&
      this.password !== "" &&
      this.confirmPassword === this.password &&
      this.phoneNumber !== ""
    );
  }

  getFormData(): object {
    if (!this.isValidData()) {
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
