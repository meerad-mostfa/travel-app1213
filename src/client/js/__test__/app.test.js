import { calculateDaysDiff } from "../app.js";

test('calculateDaysDiff should return the correct number of days between the dates', () => {
    const duration = calculateDaysDiff('2024-09-26' , '2024-09-30');
    expect(duration).toBe(3);
})
