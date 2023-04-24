import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
   note: {
      id: primaryKey(faker.datatype.uuid),
      title: () => "Beispiel aus 'faker-js'",
      content: () => "Lorem ipsum dolor sit amet",
   },
});
