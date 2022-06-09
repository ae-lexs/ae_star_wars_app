export interface API {
  getPeople: () => Promise<Array<object>>;
}

class SWAPI implements API {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://swapi.dev/api/people';
  }

  async getPeople(): Promise<Array<object>> {
    const response = await fetch(this.baseURL);
    const { results } = await response.json();

    return results;
  }
}

export default SWAPI;
