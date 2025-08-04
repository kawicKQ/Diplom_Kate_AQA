import assert from "assert";
import RegistrationForm from "../registration-form.js";

describe("RegistrationForm - Positive cases", () => {
  let form: RegistrationForm;

  beforeEach(() => {
    form = new RegistrationForm();
  });

  it("valid username", () => {
    form.setUsername("user_123");
    assert.strictEqual(form.getUsername(), "user_123");
  });

  it("username trimmed", () => {
    form.setUsername("  userName  ");
    assert.strictEqual(form.getUsername(), "userName");
  });

  it("valid email", () => {
    form.setEmail("test@example.com");
    assert.strictEqual(form.getEmail(), "test@example.com");
  });

  it("email trimmed and lowercase", () => {
    form.setEmail("  TEST@EXAMPLE.COM ");
    assert.strictEqual(form.getEmail(), "test@example.com");
  });

  it("valid password with letters and digits", () => {
    form.setPassword("Password1");
    assert.strictEqual(form.getPassword(), "Password1");
  });

  it("confirm password matches password", () => {
    form.setPassword("Password1");
    form.setConfirmPassword("Password1");
    assert.strictEqual(form.getConfirmPassword(), "Password1");
  });

  it("valid phone number, digits only", () => {
    form.setPhoneNumber("+375 (29) 123-45-67");
    assert.strictEqual(form.getPhoneNumber(), "375291234567");
  });

  it("isValid returns true for complete valid form", () => {
    form.setUsername("user123");
    form.setEmail("test@mail.com");
    form.setPassword("Passw0rd");
    form.setConfirmPassword("Passw0rd");
    form.setPhoneNumber("1234567890");
    assert.strictEqual(form.isValid(), true);
  });

  it("getFormData returns correct data object", () => {
    form.setUsername("user123");
    form.setEmail("test@mail.com");
    form.setPassword("Passw0rd");
    form.setConfirmPassword("Passw0rd");
    form.setPhoneNumber("1234567890");
    assert.deepStrictEqual(form.getFormData(), {
      username: "user123",
      email: "test@mail.com",
      password: "Passw0rd",
      phone: "1234567890",
    });
  });

  it("username with max length 20", () => {
    form.setUsername("a".repeat(20));
    assert.strictEqual(form.getUsername(), "a".repeat(20));
  });

  it("phone number with max length 15 digits", () => {
    form.setPhoneNumber("123456789012345");
    assert.strictEqual(form.getPhoneNumber(), "123456789012345");
  });

  it("password exactly 8 characters", () => {
    form.setPassword("abc12345");
    assert.strictEqual(form.getPassword(), "abc12345");
  });

  it("username with underscores", () => {
    form.setUsername("user_name_1");
    assert.strictEqual(form.getUsername(), "user_name_1");
  });

  it("email with subdomain", () => {
    form.setEmail("user@mail.example.com");
    assert.strictEqual(form.getEmail(), "user@mail.example.com");
  });
});
