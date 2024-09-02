import { colors, icons } from "@/app/datas/data";

export function CategoryIcon({ categoryIcon, IconColor }) {
    const iconObject = icons.find((item) => item.name === categoryIcon);
    const colorObject = colors.find((item) => item.name === IconColor);
    if (!iconObject) return null;
    let hexColor;
    if (!colorObject) {
      hexColor = "#000";
    } else {
      hexColor = colorObject.value;
    }
    const { Icon } = iconObject;
    return <Icon style={{ color: hexColor }} />;
  }