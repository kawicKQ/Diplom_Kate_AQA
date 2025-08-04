import assert from "assert";
import RegistrationForm from "../registration-form";

describe("RegistrationForm - Positive cases", () => {
  let form: RegistrationForm;

  beforeEach(() => {
    form = new RegistrationForm();
  });

  it("valid username", () => {
    form.Username("user_123");
    assert.strictEqual(form.username, "user_123");
  });

  it("username trimmed", () => {
    form.Username("  userName  ");
    assert.strictEqual(form.username, "userName");
  });

  it("valid email", () => {
    form.Email("test@example.com");
    assert.strictEqual(form.email, "test@example.com");
  });

  it("email trimmed and lowercase", () => {
    form.Email("  TEST@EXAMPLE.COM ");
    assert.strictEqual(form.email, "test@example.com");
  });

  it("valid password with letters and digits", () => {
    form.Password("Password1");
    assert.strictEqual(form.password, "Password1");
  });

  it("confirm password matches password", () => {
    form.Password("Password1");
    form.ConfirmPassword("Password1");
    assert.strictEqual(form.confirmPassword, "Password1");
  });

  it("valid phone number, digits only", () => {
    form.PhoneNumber("+375 (29) 123-45-67");
    assert.strictEqual(form.phoneNumber, "375291234567");
  });

  it("isValid returns true for complete valid form", () => {
    form.Username("user123");
    form.Email("test@mail.com");
    form.Password("Passw0rd");
    form.ConfirmPassword("Passw0rd");
    form.PhoneNumber("1234567890");
    assert.strictEqual(form.isValid(), true);
  });

  it("getFormData returns correct data object", () => {
    form.Username("user123");
    form.Email("test@mail.com");
    form.Password("Passw0rd");
    form.ConfirmPassword("Passw0rd");
    form.PhoneNumber("1234567890");
    assert.deepStrictEqual(form.getFormData(), {
      username: "user123",
      email: "test@mail.com",
      password: "Passw0rd",
      phone: "1234567890",
    });
  });

  it("username with max length 20", () => {
    form.Username("a".repeat(20));
    assert.strictEqual(form.username, "a".repeat(20));
  });

  it("phone number with max length 15 digits", () => {
    form.PhoneNumber("123456789012345");
    assert.strictEqual(form.phoneNumber, "123456789012345");
  });

  it("password exactly 8 characters", () => {
    form.Password("abc12345");
    assert.strictEqual(form.password, "abc12345");
  });

  it("username with underscores", () => {
    form.Username("user_name_1");
    assert.strictEqual(form.username, "user_name_1");
  });

  it("email with subdomain", () => {
    form.Email("user@mail.example.com");
    assert.strictEqual(form.email, "user@mail.example.com");
  });
});
