const data = [
    {
      messageid: "1",
      timestamp: 1708646993318,
      message: "Reminder 1: Don't forget to buy groceries",
      email: "example@example.com",
      delay: 2,
      delayType: "Days"
    },
    {
      messageid: "2",
      timestamp: 1708646903318,
      message: "A very long message is here and I want to see the side effects of this. More long so long, lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum lorem dipsum",
      email: "example@example.com",
      delay: 3,
      delayType: "Hours"
    }
  ];

const others = [
    {
      timestamp: 1708646493318,
      messageid: 3,
      message: "Reminder 3: Finish report",
      email: "example@example.com",
      delay: 30,
      delayType: "Seconds"
    },
    {
      timestamp: 1708646990318,
      messageid: 4,
      message: "Reminder 4: Pay bills",
      email: "example@example.com",
      delay: 5,
      delayType: "Days"
    },
    {
      messageid: 5,
      timestamp: 1708642993318,
      message: "Reminder 5: Submit assignment",
      email: "example@example.com",
      delay: 1,
      delayType: "Hours"
    },
    {
      messageid: 6,
      timestamp: 1708646913318,
      message: "Reminder 6: Attend meeting",
      email: "example@example.com",
      delay: 10,
      delayType: "Seconds"
    },
    {
      messageid: 7,
      timestamp: 1708646990318,
      message: "Reminder 7: Exercise",
      email: "example@example.com",
      delay: 7,
      delayType: "Days"
    },
    {
      messageid: 8,
      timestamp: 1708646593318,
      message: "Reminder 8: Read a book",
      email: "example@example.com",
      delay: 2,
      delayType: "Hours"
    },
    {
      messageid: 9,
      timestamp: 1708646973318,
      message: "Reminder 9: Call a friend",
      email: "example@example.com",
      delay: 15,
      delayType: "Seconds"
    },
    {
      messageid: 10,
      timestamp: 1708616993318,
      message: "Reminder 10: Plan weekend activities",
      email: "example@example.com",
      delay: 3,
      delayType: "Days"
    }
]

function addDummyRecord() {
  let dummy;
  if (others.length == 0) {
    dummy =  {
      messageid: Math.floor(Math.random()*10),
      timestamp: Date.now(),
      message: "Neww",
      email: "example@example.com",
      delay: Math.floor(Math.random()*10),
      delayType: "Days"
    }
  } else {
    dummy = others.pop();
  }
  
  data.push(dummy)
}

module.exports = {data, addDummyRecord}