import assert from "assert";
import RegistrationForm from "../registration-form";

describe("RegistrationForm - Negative cases", () => {
  let form: RegistrationForm;

  beforeEach(() => {
    form = new RegistrationForm();
  });

  it("should throw error if username <3 characters", () => {
    assert.throws(
      () => form.setUsername("ab"),
      /Username length should be 3–20 characters, only letters and numbers allowed/i,
    );
  });

  it("should throw error if username >20 characters", () => {
    assert.throws(
      () => form.setUsername("testkatelongpassword123"),
      /Username length should be 3–20 characters, only letters and numbers allowed/i,
    );
  });

  it("should throw error if username is empty", () => {
    assert.throws(
      () => form.setUsername(" "),
      /Username length should be 3–20 characters, only letters and numbers allowed/i,
    );
  });

  it("should throw error if username has special characters", () => {
    assert.throws(
      () => form.setUsername("user!@#"),
      /Username length should be 3–20 characters, only letters and numbers allowed/i,
    );
  });

  it("username with spaces only", () => {
    assert.throws(
      () => form.setUsername("   "),
      /Username length should be 3–20 characters, only letters and numbers allowed/i,
    );
  });

  it("should throw error if email missing @", () => {
    assert.throws(() => form.setEmail("katetest.com"), /Incorrect email/i);
  });

  it("should throw error if email is empty", () => {
    assert.throws(() => form.setEmail(""), /Incorrect email/i);
  });

  it("should throw error if password <8 characters", () => {
    assert.throws(() => form.setPassword("abc12"), /Password should have at least 8 characters/i);
  });

  it("should throw error if password has special characters", () => {
    assert.throws(() => form.setPassword("abcdf123$%"), /Only letters and numbers allowed/i);
  });
  it(" should thorow error if password is empty", () => {
    assert.throws(() => form.setPassword(""), /Password should have at least 8 characters/i);
  });

  it(" should thorow error if password only with spaces", () => {
    assert.throws(() => form.setPassword("     "), /Password should have at least 8 characters/i);
  });

  it("should throw error if confirm password not matching", () => {
    form.setPassword("testkate1");
    assert.throws(() => form.setConfirmPassword("testkate2"), /Passwords aren't matching/i);
  });

  it("should throw error if phone number <10 chracters", () => {
    assert.throws(() => form.setPhoneNumber("37525"), /Phone Number should be 10–15 characters/i);
  });

  it("should throw error if phone number >15 chracters", () => {
    assert.throws(() => form.setPhoneNumber("12025550909555555"), /Phone Number should be 10–15 characters/i);
  });

  it("should throw error if phone number is empty", () => {
    assert.throws(() => form.setPhoneNumber(""), /Phone Number should be 10–15 characters/i);
  });

  it("Getting filled form throws error if data is invalid - no phone number", () => {
    form.setUsername("user123");
    form.setEmail("test@mail.com");
    form.setPassword("testtesttest");
    form.setConfirmPassword("testtesttest");
    assert.throws(() => form.getFormData(), /Form filled with invalid data/i);
  });

  it("Getting filled form throws error if data is invalid - no email", () => {
    form.setUsername("user123");
    form.setPassword("testtesttest");
    form.setPhoneNumber("11111111111");
    form.setConfirmPassword("testtesttest");
    assert.throws(() => form.getFormData(), /Form filled with invalid data/i);
  });
});
