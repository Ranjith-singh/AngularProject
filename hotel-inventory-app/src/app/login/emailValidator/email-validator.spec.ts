import { EmailValidator } from './email-validator';

describe('EmailValidatoe', () => {
  it('should create an instance', () => {
    const directive = new EmailValidator();
    expect(directive).toBeTruthy();
  });
});
