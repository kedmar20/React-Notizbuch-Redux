import { rest } from "msw";
import { students } from "mocks/data/students";
import { groups } from "mocks/data/groups";

export const handlers = [
   rest.get("/groups", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ groupss: groups }));
   }),
   rest.get("/studentsListByGroup/:group", (req, res, ctx) => {
      if (req.params.group) {
         const matchingStudents = students.filter((student) => student.group === req.params.group);
         return res(ctx.status(200), ctx.json({ studentsOfGroup: matchingStudents }));
      }

      return res(ctx.status(200), ctx.json({ students: students }));
   }),
];
