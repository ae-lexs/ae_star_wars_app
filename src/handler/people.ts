import { API } from '../api';

export interface IPeople {
  name: string;
  homeWorld: string;
}

class PeopleHandler {
  private aspiClient: API;

  constructor(aspiClient: API) {
    this.aspiClient = aspiClient;
  }

  async getPerBatch(): Promise<Array<IPeople>> {
    const people = await this.aspiClient.getPeople();

    return people.map((character: any) => ({
      name: character.name,
      homeWorld: character.homeworld,
    }));
  }
}

export default PeopleHandler;
