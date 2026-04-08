"use client";
import { useEffect, useState } from "react";

function storageKey(prefix: string, value: string) {
  return `${prefix}-${value}`;
}

interface NotesProps {
  monthKey: string;
  monthLabel: string;
  selectedRange: { start: Date | null; end: Date | null };
  selectionLabel: string;
}

export default function Notes({ monthKey, monthLabel, selectedRange, selectionLabel }: NotesProps) {
  const [monthNote, setMonthNote] = useState("");
  const [rangeNote, setRangeNote] = useState("");
  const [monthReady, setMonthReady] = useState(false);
  const [rangeReady, setRangeReady] = useState(false);

  const activeRangeKey =
    selectedRange.start && selectedRange.end
      ? `${selectedRange.start.toISOString().slice(0, 10)}_${selectedRange.end.toISOString().slice(0, 10)}`
      : null;

  const monthStorageKey = storageKey("calendar-month-note", monthKey);
  const rangeStorageKey = activeRangeKey ? storageKey("calendar-range-note", activeRangeKey) : null;

  useEffect(() => {
    const saved = window.localStorage.getItem(monthStorageKey);
    setMonthNote(saved ?? "");
    setMonthReady(true);
  }, [monthStorageKey]);

  useEffect(() => {
    if (!rangeStorageKey) {
      setRangeNote("");
      setRangeReady(true);
      return;
    }
    const saved = window.localStorage.getItem(rangeStorageKey);
    setRangeNote(saved ?? "");
    setRangeReady(true);
  }, [rangeStorageKey]);

  useEffect(() => {
    if (!monthReady) return;
    window.localStorage.setItem(monthStorageKey, monthNote);
  }, [monthNote, monthReady, monthStorageKey]);

  useEffect(() => {
    if (!rangeReady || !rangeStorageKey) return;
    window.localStorage.setItem(rangeStorageKey, rangeNote);
  }, [rangeNote, rangeReady, rangeStorageKey]);

  return (
    <div className="calendar-sidebar">
      <div className="notes-panel">
        <div className="notes-header">
          <h3>Notes</h3>
          <span className="notes-chip">Saved locally</span>
        </div>

        <div className="notes-block">
          <label htmlFor="month-note">{monthLabel}</label>
          <p className="notes-context">Month memo</p>
          <textarea
            id="month-note"
            value={monthNote}
            onChange={(e) => setMonthNote(e.target.value)}
            placeholder="Write a note for this month…"
            rows={3}
          />
        </div>

        <div className="notes-block">
          <label htmlFor="range-note">Range note</label>
          <p className="notes-context">{selectionLabel}</p>
          <textarea
            id="range-note"
            value={rangeNote}
            onChange={(e) => setRangeNote(e.target.value)}
            placeholder={activeRangeKey ? "Add a note for this date range…" : "Select a range first"}
            disabled={!activeRangeKey}
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
