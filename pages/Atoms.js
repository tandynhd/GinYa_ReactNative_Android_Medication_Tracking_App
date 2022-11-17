import { atom } from "recoil";

const red = "#eb9393";
const yellow = "#ffde4d";
const green = "#ade29d";

export const tasksList = atom({
  key: "tasksList",
  default: [
             {
               "key": 1,
               "noteTitle": "Walk",
               "noteValue": "Walk for 5 minutes",
               "noteTime": "0800",
               "repeat": "Daily",
               "category":"Hip",
               "priority": "Low"
             },
             {
               "key": 2,
               "noteTitle": "Glaucoma",
               "noteValue": "Take 3 drops in each eye and wait for 5 minutes",
               "noteTime": "1000",
               "repeat": "Daily",
               "category":"Eye",
               "priority": "High"
             },
             {
               "key": 3,
               "noteTitle": "Headache",
               "noteValue": "Take 1 tiffy after breakfast",
               "noteTime": "0900",
               "repeat": "Daily",
               "category":"Head",
               "priority": "Medium"
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
                 "color": green,

               },
               {
                  "date": "2022-11-24",
                  "color": green
                },
               {
                  "date": "2022-11-25",
                  "color": green,

                },
                {
                   "date": "2022-11-26",
                   "color": green
                 },
                 {
               "date": "2022-11-27",
               "color": green,

             },
             {
                "date": "2022-11-28",
                "color": green
              },
              {
                "date": "2022-11-29",
                "color": green,

              },
              {
                 "date": "2022-11-30",
                 "color": green
               },
               {
                "date": "2022-11-31",
                "color": green
              },

   ]
});