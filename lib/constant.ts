export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "REVAHACK 2026",
    slug: "revahack-2026",
    location: "Bangalore",
    date: "2026-07-15",
    time: "18:00",
  },
  {
    image: "/images/event2.png",
    title: "Tech Summit 2026",
    slug: "tech-summit-2026",
    location: "Mumbai",
    date: "2026-08-20",
    time: "19:30",
  },
  {
    image: "/images/event3.png",
    title: "AI Expo 2026",
    slug: "ai-expo-2026",
    location: "Delhi",
    date: "2026-09-10",
    time: "17:00",
  },
  {
    image: "/images/event4.png",
    title: "AWS re:invent 2026",
    slug: "aws-reinvent-2026",
    location: "Chennai",
    date: "2026-10-05",
    time: "20:00",
  },
  {
    image: "/images/event5.png",
    title: "StackConf 2026",
    slug: "stackconf-2026",
    location: "Kolkata",
    date: "2026-11-25",
    time: "18:30",
  },
  {
    image: "/images/event6.png",
    title: "Y Combinator Demo Day 2026",
    slug: "y-combinator-demo-day-2026",
    location: "Hyderabad",
    date: "2026-12-15",
    time: "19:00",
  },
];
