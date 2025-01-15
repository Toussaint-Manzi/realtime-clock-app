'use client';

export const formatTime = (epoch: number | null, timeFormat: string): string => {
    // By default, this is the time that is displayed
    if (!epoch) return "00:00:00";
    const date = new Date(epoch);
    return date.toLocaleTimeString('en-US', { 
      hour12: timeFormat === "12" ? true : false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
};
