/**
 * Demo-Daten für den Mock-Modus (solange kein Supabase verbunden ist).
 * Sobald das Backend steht, werden diese durch echte Queries ersetzt.
 */

export interface Talent {
  id: string;
  name: string;
  handle: string;
  platform: "TikTok" | "Instagram" | "YouTube";
  follower: number;
  status: "aktiv" | "onboarding" | "pausiert";
  manager: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO
  talent: string;
  type: "Shoot" | "Live" | "Meeting" | "Deadline";
}

export interface Contract {
  id: string;
  title: string;
  partner: string;
  talent: string;
  value: number;
  status: "entwurf" | "freigabe" | "aktiv" | "beendet";
}

export interface BookingEntry {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number; // positiv = Einnahme, negativ = Ausgabe
}

export const talents: Talent[] = [
  { id: "t1", name: "Lena Vogt", handle: "@lenavogt", platform: "TikTok", follower: 842000, status: "aktiv", manager: "Sina" },
  { id: "t2", name: "Marco Reither", handle: "@marco.r", platform: "Instagram", follower: 315000, status: "aktiv", manager: "Tim" },
  { id: "t3", name: "Aylin K.", handle: "@aylin", platform: "YouTube", follower: 128000, status: "onboarding", manager: "Sina" },
  { id: "t4", name: "David Pohl", handle: "@davidpohl", platform: "TikTok", follower: 56000, status: "pausiert", manager: "Tim" },
];

export const events: CalendarEvent[] = [
  { id: "e1", title: "Brand-Shoot Kosmetik", date: "2026-07-09", talent: "Lena Vogt", type: "Shoot" },
  { id: "e2", title: "TikTok Live Q&A", date: "2026-07-10", talent: "Marco Reither", type: "Live" },
  { id: "e3", title: "Kickoff Kampagne Sommer", date: "2026-07-11", talent: "Aylin K.", type: "Meeting" },
  { id: "e4", title: "Abgabe Videomaterial", date: "2026-07-14", talent: "Lena Vogt", type: "Deadline" },
];

export const contracts: Contract[] = [
  { id: "c1", title: "Kooperation Beauty GmbH", partner: "Beauty GmbH", talent: "Lena Vogt", value: 12500, status: "aktiv" },
  { id: "c2", title: "Sommer-Kampagne Getränke", partner: "FreshDrinks AG", talent: "Marco Reither", value: 8000, status: "freigabe" },
  { id: "c3", title: "YouTube Integration", partner: "TechShop", talent: "Aylin K.", value: 4200, status: "entwurf" },
];

export const bookings: BookingEntry[] = [
  { id: "b1", date: "2026-07-01", description: "Zahlung Beauty GmbH", category: "Einnahme", amount: 12500 },
  { id: "b2", date: "2026-07-02", description: "Equipment Kamera", category: "Ausrüstung", amount: -2300 },
  { id: "b3", date: "2026-07-03", description: "Software-Abos", category: "Betrieb", amount: -480 },
  { id: "b4", date: "2026-07-05", description: "Teil-Zahlung FreshDrinks", category: "Einnahme", amount: 4000 },
];
