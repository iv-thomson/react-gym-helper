import { CardList } from "@/components/shared/CardList/CardList";
import "./CalendarPage.css";
import { Card } from "@/components/shared/Card/Card";
import { getDaysInMonth, format, getWeeksInMonth } from "date-fns";

class Day {
  constructor(
    public dayNumber: number,
    public dayType: Weekday,
    public date: Date
  ) {}

  public static from(date: Date | number): Day[] {
    const daysCount = getDaysInMonth(date);
    const month = format(date, "MMMM");

    return Array(daysCount)
      .fill(null)
      .map(
        (d, index) =>
          new Day(
            index + 1,
            format(
              new Date(`${index}-${month}`),
              "EEEE"
            ).toLowerCase() as Weekday,
            new Date(`${index}-${month}`)
          )
      );
  }
}

class Week {
  constructor(public days: Day[]) {}

  public static from(today: Date | number) {
    const weeksCount = getWeeksInMonth(today);
    return Array(weeksCount).fill(new Week([]));
  }
}

const constructMonth = (today: Date) => {
  const days = Day.from(today);
  const weeks = Week.from(today);
};

enum Weekday {
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
  Sunday = "sunday",
}

const weekdays = [
  Weekday.Monday,
  Weekday.Tuesday,
  Weekday.Wednesday,
  Weekday.Thursday,
  Weekday.Friday,
  Weekday.Saturday,
  Weekday.Sunday,
];

export const CalendarPage = () => {
  const today = Date.now();

  const weeksCount = getWeeksInMonth(today);
  const days = Day.from(today);

  const weeks = Array(weeksCount)
    .fill(null)
    .map((d, index) => new Week([]));

  console.log(days);
  return (
    <main className="column gap">
      {weeksCount}
      <div className="calendar">
        <div className="row gap-s">
          {weekdays.map((d) => (
            <div className="column gap-s">
              {weeks.map(() => (
                <Card>{d}</Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
