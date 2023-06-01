import {
  useFocusable,
  FocusableComponentLayout,
  FocusDetails,
  KeyPressDetails,
} from "@noriginmedia/norigin-spatial-navigation";

export interface AssetBoxProps {
  focused: boolean;
}

interface AssetProps {
  title: string;
  onEnterPress: (props: object, details: KeyPressDetails) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}

export const Pcard = ({ title, onEnterPress, onFocus }: AssetProps) => {
  const { ref, focused } = useFocusable({
    onEnterPress,
    onFocus,
    extraProps: {
      title,
    },
  });

  return (
    <div ref={ref}>
      <button className={`asset__box ${focused ? "asset__box active" : ""}`}>
        {title}
      </button>
    </div>
  );
};
