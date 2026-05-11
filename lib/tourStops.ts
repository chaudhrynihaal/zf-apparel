export type TourStop = {
  label: string;
  text: string;
  image: string;
  dept: string;
  control: string;
  status: string;
  short: string;
};

export const tourStops: TourStop[] = [
  {
    label: "Stop 1:",
    text: "Gas suppression cylinders and a wall extinguisher are positioned for immediate emergency response.",
    image: "/assets/tour/stop-1.jpeg",
    dept: "Fire Protection Systems",
    control: "Suppression Equipment Check",
    status: "Operational",
    short: "Suppression",
  },
  {
    label: "Stop 2:",
    text: "The electrical control panel is secured with nearby firefighting support for monitored power safety.",
    image: "/assets/tour/stop-2.jpeg",
    dept: "Electrical Safety",
    control: "Control Panel Inspection",
    status: "Monitored",
    short: "Panel",
  },
  {
    label: "Stop 3:",
    text: "A dedicated fire hose cabinet is installed and ready for rapid emergency deployment.",
    image: "/assets/tour/stop-3.jpeg",
    dept: "Emergency Response",
    control: "Hose Cabinet Readiness",
    status: "Ready",
    short: "Hose",
  },
  {
    label: "Stop 4:",
    text: "The emergency exit door is maintained for clear evacuation access and response.",
    image: "/assets/tour/stop-4.jpeg",
    dept: "Emergency Egress",
    control: "Exit Access Verification",
    status: "Clear",
    short: "Exit",
  },
  {
    label: "Stop 5:",
    text: "The production-side aisle remains clear while firefighting equipment stays accessible along the line.",
    image: "/assets/tour/stop-5.jpeg",
    dept: "Production Floor Safety",
    control: "Aisle Clearance Review",
    status: "Active",
    short: "Aisle",
  },
  {
    label: "Stop 6:",
    text: "The entrance corridor is kept clean and controlled to support organized staff and visitor access.",
    image: "/assets/tour/stop-6.jpeg",
    dept: "Access & Reception",
    control: "Entry Route Condition",
    status: "Maintained",
    short: "Lobby",
  },
  {
    label: "Stop 7:",
    text: "Alarm devices and the monitoring point are installed within a controlled observation area.",
    image: "/assets/tour/stop-7.jpg",
    dept: "Alarm Monitoring",
    control: "Detection Point Review",
    status: "Enabled",
    short: "Alarm",
  },
  {
    label: "Stop 8:",
    text: "Exit signage and emergency lighting are positioned for fast wayfinding during evacuation.",
    image: "/assets/tour/stop-8.jpeg",
    dept: "Emergency Signage",
    control: "Exit Sign Visibility",
    status: "Compliant",
    short: "Signage",
  },
  {
    label: "Stop 9:",
    text: "Corner camera coverage and extinguisher placement support continuous safety surveillance and response.",
    image: "/assets/tour/stop-9.jpg",
    dept: "Surveillance & Safety",
    control: "Coverage & Response Check",
    status: "Secured",
    short: "CCTV",
  },
];
