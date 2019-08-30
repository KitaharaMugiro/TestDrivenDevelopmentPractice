export class NoMoneyError implements Error {
  name: string = "NoMoneyError";
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

export class NoStockError implements Error {
  name: string = "NoStockError";
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

export class NoAvailableCoinError implements Error {
  name: string = "NoAvailableCoinError";
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
