export type ReservationDraft = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  party: string;
  occasion: string;
  notes: string;
};

export const emptyReservation: ReservationDraft = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  party: "",
  occasion: "Just dinner",
  notes: "",
};

const weeknight = [
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

const weekend = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const sunday = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
];

export const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9+"];

export const occasions = [
  "Just dinner",
  "Birthday",
  "Anniversary",
  "Business",
  "Other",
];

export function toIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function weekdayIndex(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).getDay();
}

export function seatingsFor(iso: string) {
  if (!iso) return weekend;
  const day = weekdayIndex(iso);
  if (day === 1) return [];
  if (day === 0) return sunday;
  if (day === 5 || day === 6) return weekend;
  return weeknight;
}

export function reservationCode() {
  const value = Math.floor(1000 + Math.random() * 9000);
  return `SLN-${value}`;
}

export function validateReservation(draft: ReservationDraft, todayIso: string) {
  const errors: Partial<Record<keyof ReservationDraft, string>> = {};

  if (draft.name.trim().length < 2) {
    errors.name = "Enter the name the table should be held under.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) {
    errors.email = "Enter an email so the confirmation has somewhere to go.";
  }

  if (draft.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a phone number we can reach that evening.";
  }

  if (!draft.date) {
    errors.date = "Choose a date.";
  } else if (draft.date < todayIso) {
    errors.date = "That date has already passed.";
  } else if (weekdayIndex(draft.date) === 1) {
    errors.date = "The dining room is closed on Mondays.";
  }

  if (!draft.time) {
    errors.time = "Choose a seating.";
  } else if (draft.date && !seatingsFor(draft.date).includes(draft.time)) {
    errors.time = "That seating is not offered on this day.";
  }

  if (!draft.party) {
    errors.party = "Tell us how many guests are coming.";
  }

  if (draft.notes.length > 400) {
    errors.notes = "Keep the note under 400 characters.";
  }

  return errors;
}
