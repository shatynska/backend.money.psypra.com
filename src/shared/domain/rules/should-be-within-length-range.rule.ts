import { ShouldBeWithinLengthRangeError } from '../errors/should-be-within-length-range.error';
import { Rule } from './rule';

export class ShouldBeWithinLengthRangeRule implements Rule {
  constructor(
    private value: string,
    private minLength: number,
    private maxLength: number,
  ) {}

  public error = new ShouldBeWithinLengthRangeError(
    `Значення повинно бути довжиною від ${this.minLength} до ${this.maxLength} символів`,
  );

  public isBroken(): boolean {
    const length = this.value.length;
    return (
      typeof this.value !== 'string' ||
      (length >= this.minLength && length <= this.maxLength) === false
    );
  }
}
