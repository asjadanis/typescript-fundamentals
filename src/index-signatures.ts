const phones: {
  [k: string]:
    | {
        country: string;
        area: string;
        number: string;
      }
    | undefined;
} = {};

phones.test.area;
