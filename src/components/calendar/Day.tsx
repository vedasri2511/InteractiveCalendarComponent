import { isWithinInterval } from "date-fns";

interface DayProps {
  day: Date;
  selectedRange: { start: Date | null; end: Date | null };
  onSelect: (day: Date) => void;
  isSelectedStart: boolean;
  isSelectedEnd: boolean;
  isInCurrentMonth: boolean;
  isToday: boolean;
}

export default function Day({
  day,
  selectedRange,
  onSelect,
  isSelectedStart,
  isSelectedEnd,
  isInCurrentMonth,
  isToday,
}: DayProps) {
  const isInRange =
    selectedRange.start &&
    selectedRange.end &&
    isWithinInterval(day, {
      start: selectedRange.start,
      end: selectedRange.end,
    });

  const className = [
    "day-cell",
    isSelectedStart ? "is-start" : "",
    isSelectedEnd ? "is-end" : "",
    isInRange ? "is-range" : "",
    isInCurrentMonth ? "" : "is-muted",
    isToday ? "is-today" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      onClick={() => onSelect(day)}
      aria-label={day.toDateString()}
    >
      <span className="day-number">{day.getDate()}</span>
      {isToday ? <span className="day-pill">Today</span> : null}
    </button>
  );
}
