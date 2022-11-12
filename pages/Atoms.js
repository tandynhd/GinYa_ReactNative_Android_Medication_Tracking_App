import { atom } from "recoil";

export const tasksList = atom({
  key: "tasksList",
  default: [
             {
               "noteTitle": "Test",
               "noteValue": "noesfhasjkd shadkfhsadf",
               "noteTime": "1000"

             },
             {
               "noteTitle": "Test2",
               "noteValue": "noesfhasjkd shadkfhsadf",
               "noteTime": "0900"

             },
             {
               "noteTitle": "Test5",
               "noteValue": "noesfhasjkd shadkfhsadf",
               "noteTime": "1200"

             },

           ].sort((a, b) => {
                return a.noteTime - b.noteTime;
              })
});
