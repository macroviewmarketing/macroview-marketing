export interface DayCapacity {
  day: string;
  slotsTotal: number;
  /** Manually update as bookings come in — no backend/calendar sync. */
  slotsBooked: number;
}

// Production capacity, not a call scheduler — shows how many edit slots are
// open per weekday. Weekdays only (Mon–Fri), 2 slots/day.
export const WEEKLY_CAPACITY: DayCapacity[] = [
  { day: "Mon", slotsTotal: 2, slotsBooked: 0 },
  { day: "Tue", slotsTotal: 2, slotsBooked: 0 },
  { day: "Wed", slotsTotal: 2, slotsBooked: 0 },
  { day: "Thu", slotsTotal: 2, slotsBooked: 0 },
  { day: "Fri", slotsTotal: 2, slotsBooked: 0 },
];
