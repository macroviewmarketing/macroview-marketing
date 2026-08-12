import { WEEKLY_CAPACITY } from "@/data/availability";

export const AvailabilityStrip = () => {
  const totalSlots = WEEKLY_CAPACITY.reduce((sum, d) => sum + d.slotsTotal, 0);
  const totalOpen = WEEKLY_CAPACITY.reduce(
    (sum, d) => sum + Math.max(d.slotsTotal - d.slotsBooked, 0),
    0,
  );

  return (
    <div className="availability-strip glass-panel">
      <div className="availability-strip-header">
        <span className="micro-mono">Weekly edit capacity</span>
        <span className="availability-strip-summary">
          {totalOpen} of {totalSlots} slots open this week
        </span>
      </div>
      <div className="availability-days">
        {WEEKLY_CAPACITY.map((d) => (
          <div key={d.day} className="availability-day">
            <span className="availability-day-label font-mono">{d.day}</span>
            <div className="availability-dots">
              {Array.from({ length: d.slotsTotal }).map((_, i) => (
                <span
                  key={i}
                  className={`availability-dot${i < d.slotsBooked ? " filled" : " open"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
