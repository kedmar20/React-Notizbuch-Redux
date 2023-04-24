import { setupWorker } from "msw";
import { handlers } from "mocks/handlers";
import { db } from "mocks/db";

export const worker = setupWorker(...handlers);

const seed = () => {
   db.note.create();
   db.note.create();
};

seed();

window.mocks = {
   seed,
};
