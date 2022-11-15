import { atom } from "recoil";

export const tasksList = atom({
  key: "tasksList",
  default: [
             {
               "id": 1,
               "noteTitle": "Test",
               "noteValue": "noesfhasjkd shadkfhsadf",
               "noteTime": "1000",
               "repeat": "Daily",
               "category":"Eye",
               "priority": "Low",
               "done": false
             },
             {
               "id": 2,
               "noteTitle": "Test2",
               "noteValue": "noesfhasjkd shadkfhsadf",
               "noteTime": "0900",
               "repeat": "Monthly",
               "category":"Head",
               "priority": "High",
               "done": false
             },
             {
               "id": 3,
               "noteTitle": "Test5",
               "noteValue": "noesfhasjkd shadkfhsadf",
               "noteTime": "1200",
               "repeat": "Weekly",
               "category":"Head",
               "priority": "Medium",
               "done": true
             },

           ].sort((a, b) => {
                                     return a.noteTime - b.noteTime;
                                   })
});

export const tasksStatus = atom({
  key: "tasksStatus",
  default: [
     {
       "date": "2022-11-01",
       "color": "red"
     },
     {
        "date": "2022-11-02",
        "color": "orange"
      },
     {
        "date": "2022-11-03",
        "color": "red"
      },
      {
         "date": "2022-11-04",
         "color": "green"
       },
       {
          "date": "2022-11-05",
          "color": "orange"
        },
       {
          "date": "2022-11-06",
          "color": "green"
        },
        {
           "date": "2022-11-07",
           "color": "green"
         },
         {
            "date": "2022-11-08",
            "color": "orange"
          },
         {
            "date": "2022-11-09",
            "color": "red"
          },
          {
             "date": "2022-11-10",
             "color": "green"
           },
           {
              "date": "2022-11-11",
              "color": "orange"
            },
           {
              "date": "2022-11-12",
              "color": "green"
            },

   ]
});