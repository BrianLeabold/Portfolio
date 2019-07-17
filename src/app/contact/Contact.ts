export class Contact {
    constructor(
      public name: string,
      public city: string,
      public email: string,
      public phone: string,
      public topic: string,
      public comment: string,
      public timePreference: string,
      public subscribe: boolean,
    ) {}
  }
