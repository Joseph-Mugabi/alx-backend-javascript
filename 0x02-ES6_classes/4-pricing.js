import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be number');
    if (!(currency instanceof Currency)) throw new TypeError('Currency must be Currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amout() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be number');
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency({ code, name }) {
    if (!(this._currency instanceof Currency)) throw new TypeError('Currency must be Currency');
    this._currency = new Currency(code, name);
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
