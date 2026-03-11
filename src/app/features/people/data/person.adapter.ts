// features/people/data/person.adapter.ts
import { Person } from '../domain/person.entity';

export class PersonAdapter {
  static transform(apiResponse: any): Person {
    return {
      id: apiResponse.uuid,
      fullName: `${apiResponse.first_name} ${apiResponse.last_name}`,
      email: apiResponse.contact_email,
      createdAt: new Date(apiResponse.reg_date),
    };
  }
}
