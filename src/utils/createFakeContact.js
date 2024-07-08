import { faker } from "@faker-js/faker";

export const createFakeContact = () => ({
  id: faker.datatype.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});


// id: faker.datatype.uuid() для генерації унікального ідентифікатора;
// faker.person.fullName() для генерації повних імен;
// faker.phone.number() для створення телефонних номерів;
// faker.internet.email() для формування електронних адрес;
// faker.person.jobTitle() для генерації назв професій.
