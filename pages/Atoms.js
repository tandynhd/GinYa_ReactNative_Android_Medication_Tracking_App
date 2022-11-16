import { atom } from "recoil";

const red = "#eb9393";
const yellow = "#ffde4d";
const green = "#ade29d";

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

export const authenticateState = atom({
    key: "authenticateState",
    default: true
});

export const authenticatePage = atom({
    key: "authenticatePage",
    default: true
});

export const tasksStatus = atom({
  key: "tasksStatus",
  default: [
     {
       "date": "2022-11-01",
       "color": red,
       "hip": true,
       "head": true,
       "ankle": true,
     },
     {
        "date": "2022-11-02",
        "color": yellow,
        "eye": true,
       "ankle": true,
      },
     {
        "date": "2022-11-03",
        "color": red,
      "ear": true,
      "hip": true,
      "head": true,
      "ankle": true,
      },
      {
         "date": "2022-11-04",
         "color": green,
       },
       {
          "date": "2022-11-05",
          "color": yellow,
          "eye": true,
         "ear": true,
         "hip": true,
        },
       {
          "date": "2022-11-06",
          "color": green,

        },
        {
           "date": "2022-11-07",
           "color": green
         },
         {
            "date": "2022-11-08",
            "color": yellow,
            "eye": true,
           "head": true,
           "ankle": true,
          },
         {
            "date": "2022-11-09",
            "color": red,
            "eye": true,
           "ear": true,
           "hip": true,
           "head": true,
           "ankle": true,
          },
          {
             "date": "2022-11-10",
             "color": green
           },
           {
              "date": "2022-11-11",
              "color": yellow,
              "eye": true,
            },
           {
              "date": "2022-11-12",
              "color": green
            },
            {
           "date": "2022-11-13",
           "color": red,
           "hip": true,
           "head": true,
           "ankle": true,
         },
         {
            "date": "2022-11-14",
            "color": yellow,
            "eye": true,
           "ankle": true,
          },
         {
            "date": "2022-11-15",
            "color": red,
          "ear": true,
          "hip": true,
          "head": true,
          "ankle": true,
          },
          {
             "date": "2022-11-16",
             "color": green,
           },
           {
              "date": "2022-11-17",
              "color":yellow,
              "eye": true,
             "ear": true,
             "hip": true,
            },
           {
              "date": "2022-11-18",
              "color": green,

            },
            {
               "date": "2022-11-19",
               "color": green
             },
             {
                "date": "2022-11-20",
                "color": yellow,
                "eye": true,
               "head": true,
               "ankle": true,
              },
             {
                "date": "2022-11-21",
                "color": red,
                "eye": true,
               "ear": true,
               "hip": true,
               "head": true,
               "ankle": true,
              },
              {
                 "date": "2022-11-22",
                 "color": green
               },
               {
                  "date": "2022-11-23",
                  "color": yellow,
                  "eye": true,
                },
               {
                  "date": "2022-11-24",
                  "color": green
                },

   ]
});