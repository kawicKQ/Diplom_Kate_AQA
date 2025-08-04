import assert from "assert";
import RegistrationForm from "../registration-form";

describe("RegistrationForm - Positive cases", () => {
  let form: RegistrationForm;

  beforeEach(() => {
    form = new RegistrationForm();
  });

  it("should save valid username", () => {
    form.setUsername("katetest123");
    assert.strictEqual(form.username, "katetest123");
  });

  it("should remove spaces from username", () => {
    form.setUsername("  userName  ");
    assert.strictEqual(form.username, "userName");
  });

  it("should save username with max length - 20", () => {
    form.setUsername("aaaaaaaaaaaaaaaaaaaa");
    assert.strictEqual(form.username, "aaaaaaaaaaaaaaaaaaaa");
  });

  it("should save username with minimum length - 3", () => {
    form.setUsername("aaa");
    assert.strictEqual(form.username, "aaa");
  });

  it("should save valid email", () => {
    form.setEmail("katetest@gmail.com");
    assert.strictEqual(form.email, "katetest@gmail.com");
  });

  it("email save email with subdomain", () => {
    form.setEmail("user@mail.example.com");
    assert.strictEqual(form.email, "user@mail.example.com");
  });

  it("should remove spaces from email", () => {
    form.setEmail("  katetest@gmail.com ");
    assert.strictEqual(form.email, "katetest@gmail.com");
  });

  it("should change email letters to lowercase", () => {
    form.setEmail("KATETEST@gmail.com");
    assert.strictEqual(form.email, "katetest@gmail.com");
  });

  it("should save valid password", () => {
    form.setPassword("testKH123");
    assert.strictEqual(form.password, "testKH123");
  });

  it("should save password with minimum characters - 8", () => {
    form.setPassword("abc12345");
    assert.strictEqual(form.password, "abc12345");
  });

  it("should save confirm password matches password", () => {
    form.setPassword("testKH123");
    form.setConfirmPassword("testKH123");
    assert.strictEqual(form.confirmPassword, "testKH123");
  });

  it("should remove not numbers characters", () => {
    form.setPhoneNumber("+375 (25) 0000000");
    assert.strictEqual(form.phoneNumber, "375250000000");
  });

  it("should save phone number with max length 15 digits", () => {
    form.setPhoneNumber("120255567676789");
    assert.strictEqual(form.phoneNumber, "120255567676789");
  });

  it("should return true for valid data in form", () => {
    form.setUsername("user123");
    form.setEmail("test@mail.com");
    form.setPassword("Passw0rd");
    form.setConfirmPassword("Passw0rd");
    form.setPhoneNumber("1234567890");
    assert.strictEqual(form.isValid(), true);
  });

  it("should return filled valid data", () => {
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
});
