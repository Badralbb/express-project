import {
  BookA,
  ChartBarIncreasing,
  House,
  HousePlus,
  ImageIcon,
  Leaf,
  LoaderPinwheel,
  Mic,
  NotebookPen,
  NotepadTextDashed,
  PictureInPicture2,
  Table,
  Tally5,
  UserPen,
  ZoomIn,
} from "lucide-react";

export const icons = [
  { name: "home", Icon: House },
  { name: "house", Icon: HousePlus },
  { name: "profile", Icon: UserPen },
  { name: "note", Icon: NotebookPen },
  { name: "stairs", Icon: ChartBarIncreasing },
  { name: "window", Icon: PictureInPicture2 },
  { name: "image", Icon: ImageIcon },
  { name: "zoom", Icon: ZoomIn },
  { name: "audio", Icon: Mic },
  { name: "tables", Icon: Table },
  { name: "notetaking", Icon: NotepadTextDashed },
  { name: "orderedlist", Icon: BookA },
  { name: "trees", Icon: Leaf },
  { name: "five", Icon: Tally5 },
  { name: "round7", Icon: LoaderPinwheel },
];
export const colors = [
  { value: `#0166FF`, name: "blue" },
  { value: `#01B3FF`, name: "sky" },
  { value: `#41CC00`, name: "green" },
  { value: `#F9D100`, name: "yellow" },
  { value: `#FF7B01`, name: "orange" },
  { value: `#AE01FF`, name: "purple" },
  { value: `#FF0101`, name: "red" },
];
export const types = [
  { name: "all", value: "all" },
  { name: "Income", value: "Income" },
  { name: "Expense", value: "Expense" },
];
