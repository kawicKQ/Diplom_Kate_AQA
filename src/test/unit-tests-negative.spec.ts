import assert from "assert";
import RegistrationForm from "../registration-form";

describe("RegistrationForm - Negative cases", () => {
  let form: RegistrationForm;

  beforeEach(() => {
    form = new RegistrationForm();
  });

  it("should throw error if username <3 characters", () => {
    assert.throws(
      () => form.Username("ab"),
      /Username length should be 3-20 characters, only letters and numbers allowed/i,
    );
  });
  it("should throw error if username is empty", () => {
    assert.throws(
      () => form.Username(" "),
      /Username length should be 3-20 characters, only letters and numbers allowed/i,
    );
  });
  it("should throw error if username >20 characters", () => {
    assert.throws(
      () => form.Username("testkatelongpassword123"),
      /Username length should be 3-20 characters, only letters and numbers allowed/i,
    );
  });

  it("should throw error if username has special characters", () => {
    assert.throws(
      () => form.Username("user!@#"),
      /Username length should be 3-20 characters, only letters and numbers allowed/i,
    );
  });

  it("should throw error if username email missing @", () => {
    assert.throws(() => form.Email("testexample.com"), /Incorrect email/i);
  });

  it("should throw error if email is empty", () => {
    assert.throws(() => form.Email(""), /Incorrect email/i);
  });

  it("password too short", () => {
    assert.throws(() => form.Password("abc12"), /минимум 8 символов/i);
  });

  it("password with special characters", () => {
    assert.throws(() => form.Password("abc123$%"), /Only letters and numbers allowed/i);
  });

  it("confirm password not matching", () => {
    form.Password("Password1");
    assert.throws(() => form.ConfirmPassword("Password2"), /Passwords aren't matching/i);
  });

  it("phone number too short", () => {
    assert.throws(() => form.PhoneNumber("12345"), /Phone Number should be 10-15 characters/i);
  });

  it("phone number too long", () => {
    assert.throws(() => form.PhoneNumber("1234567890123456"), /Phone Number should be 10-15 characters/i);
  });

  it("phone number with no digits", () => {
    assert.throws(() => form.PhoneNumber("abcdef"), /Phone Number should be 10-15 characters/i);
  });

  it("getFormData throws if form is invalid", () => {
    form.Username("user123");
    form.Email("test@mail.com");
    form.Password("Passw0rd");
    form.ConfirmPassword("Passw0rd");
    // phone missing
    assert.throws(() => form.getFormData(), /invalid data/i);
  });

  it("isValid returns false if any field is empty", () => {
    assert.strictEqual(form.isValid(), false);
  });

  it("username with spaces only", () => {
    assert.throws(() => form.Username("   "), /Username length should be 3-20 characters/i);
  });

  it("password with spaces", () => {
    assert.throws(() => form.Password("     "), /Only letters and numbers allowed/i);
  });
});
