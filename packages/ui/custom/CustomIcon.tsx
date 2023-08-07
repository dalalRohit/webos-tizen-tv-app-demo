import { Icon } from "./Icon";

interface IconProp {
  color: string;
  icon: string;
  size?: number | string;
  //   className?: string;
  style?: object;
}
export const CustomIcon = (props: IconProp) => {
  const { color, icon, size, ...rest } = props;
  return <Icon color={color} icon={icon} size={size} {...rest} />;
};
