"use client";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CopperButton } from "@/components/ui/CopperButton";
import {
  emptyReservation,
  occasions,
  partySizes,
  reservationCode,
  seatingsFor,
  toIsoDate,
  validateReservation,
  type ReservationDraft,
} from "@/lib/reservation";
import { colors, displaySx } from "@/theme/tokens";

const fieldOrder: (keyof ReservationDraft)[] = [
  "name",
  "email",
  "phone",
  "date",
  "time",
  "party",
  "notes",
];

export function ReserveForm() {
  const [draft, setDraft] = useState<ReservationDraft>(emptyReservation);
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationDraft, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [code, setCode] = useState("");
  const seatings = seatingsFor(draft.date);

  function update<K extends keyof ReservationDraft>(key: K, value: ReservationDraft[K]) {
    setDraft((current) => {
      const next = { ...current, [key]: value };
      if (key === "date" && value && !seatingsFor(value).includes(current.time)) {
        next.time = "";
      }
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateReservation(draft, toIsoDate(new Date()));
    setErrors(nextErrors);
    const firstInvalid = fieldOrder.find((key) => nextErrors[key]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setCode(reservationCode());
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Box aria-live="polite" sx={{ border: `1px solid ${colors.line}`, p: { xs: 3, md: 4 } }}>
        <Typography sx={{ color: colors.copper, letterSpacing: "0.16em", fontSize: 12 }}>
          REQUEST {code}
        </Typography>
        <Typography sx={{ ...displaySx, fontSize: { xs: "2.2rem", md: "2.8rem" }, mt: 1.5 }}>
          The request is in, {draft.name.trim().split(" ")[0]}.
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.7, mt: 2 }}>
          This is a portfolio demonstration, so nothing was sent. On a live site this
          request would land with the restaurant, and they would confirm {draft.date} at{" "}
          {draft.time} for {draft.party === "9+" ? "a larger party" : `${draft.party} guests`}.
        </Typography>
        {draft.party === "9+" ? (
          <Typography sx={{ lineHeight: 1.7, mt: 2 }}>
            Parties larger than eight are a phone conversation. The team would call to
            arrange the alcove or a buyout.
          </Typography>
        ) : null}
        <Box sx={{ mt: 3 }}>
          <CopperButton
            onClick={() => {
              setDraft(emptyReservation);
              setErrors({});
              setSubmitted(false);
            }}
          >
            Make another request
          </CopperButton>
        </Box>
      </Box>
    );
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
      <TextField
        id="name"
        label="Full name"
        name="name"
        autoComplete="name"
        value={draft.name}
        onChange={(event) => update("name", event.target.value)}
        error={Boolean(errors.name)}
        helperText={errors.name || " "}
        fullWidth
      />
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
        <TextField
          id="email"
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={draft.email}
          onChange={(event) => update("email", event.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email || " "}
          fullWidth
        />
        <TextField
          id="phone"
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={draft.phone}
          onChange={(event) => update("phone", event.target.value)}
          error={Boolean(errors.phone)}
          helperText={errors.phone || " "}
          fullWidth
        />
      </Box>
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
        <TextField
          id="date"
          label="Date"
          name="date"
          type="date"
          value={draft.date}
          onChange={(event) => update("date", event.target.value)}
          error={Boolean(errors.date)}
          helperText={errors.date || "Closed Mondays"}
          slotProps={{
            htmlInput: {
              ref: (node: HTMLInputElement | null) => {
                if (node) node.min = toIsoDate(new Date());
              },
            },
            inputLabel: { shrink: true },
          }}
          sx={{ "& input": { colorScheme: "dark" } }}
          fullWidth
        />
        <TextField
          id="time"
          select
          label="Seating"
          name="time"
          value={draft.time}
          onChange={(event) => update("time", event.target.value)}
          error={Boolean(errors.time)}
          helperText={errors.time || (seatings.length === 0 && draft.date ? "No seatings on Monday" : " ")}
          disabled={Boolean(draft.date) && seatings.length === 0}
          fullWidth
        >
          <MenuItem value="" disabled>
            Choose a seating
          </MenuItem>
          {seatings.map((time) => (
            <MenuItem key={time} value={time}>
              {time}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
        <TextField
          id="party"
          select
          label="Party size"
          name="party"
          value={draft.party}
          onChange={(event) => update("party", event.target.value)}
          error={Boolean(errors.party)}
          helperText={errors.party || " "}
          fullWidth
        >
          <MenuItem value="" disabled>
            Choose a party size
          </MenuItem>
          {partySizes.map((size) => (
            <MenuItem key={size} value={size}>
              {size === "9+" ? "9 or more" : size}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="occasion"
          select
          label="Occasion"
          name="occasion"
          value={draft.occasion}
          onChange={(event) => update("occasion", event.target.value)}
          helperText="Optional"
          fullWidth
        >
          {occasions.map((occasion) => (
            <MenuItem key={occasion} value={occasion}>
              {occasion}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {draft.party === "9+" ? (
        <Typography sx={{ color: colors.muted }}>
          For more than eight guests, this becomes an inquiry. A real restaurant would
          call you to plan the table.
        </Typography>
      ) : null}
      <TextField
        id="notes"
        label="Note for the house"
        name="notes"
        value={draft.notes}
        onChange={(event) => update("notes", event.target.value)}
        error={Boolean(errors.notes)}
        helperText={errors.notes || `${draft.notes.length}/400`}
        multiline
        minRows={3}
        fullWidth
      />
      <CopperButton type="submit">Request this seating</CopperButton>
      <Typography sx={{ color: colors.muted, fontSize: 13 }}>
        A live booking would take a card to hold the table. This form stays on your
        screen and does not send your details anywhere.
      </Typography>
    </Box>
  );
}
