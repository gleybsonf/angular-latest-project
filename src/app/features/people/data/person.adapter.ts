//features/people/data/person.adapter.ts
import { Person } from '../domain/person.entity';

export class PersonAdapter {
  static transform(apiResponse: any): Person {
    return {
      id: apiResponse.uuid,
      name: apiResponse.first_name,
      lastName: apiResponse.last_name,
      email: apiResponse.contact_email,
      createdAt: apiResponse.reg_date,
    };
  }
}
