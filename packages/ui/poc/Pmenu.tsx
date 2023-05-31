import {
  FocusContext,
  init,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

init({
  debug: false,
  visualDebug: false,
});

interface PocItemProps {
  focusKey: string;
  title: string;
}

export const MenuItem = ({ focusKey: focusKeyParam, title }: PocItemProps) => {
  const { focused, ref } = useFocusable({
    focusKey: focusKeyParam,
    extraProps: { title },
  });

  return (
    <div
      ref={ref}
      style={{ border: `4px solid ${focused ? "blue" : "green"}` }}
    >
      {title}
    </div>
  );
};

export const Pmenu = ({ focusKey: focusKeyParam }: { focusKey: string }) => {
  const { ref, focusSelf, focusKey } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: undefined,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="pmenu" ref={ref}>
        <MenuItem title="item1" focusKey="menu1" />
        <MenuItem title="item2" focusKey="menu2" />
        <MenuItem title="item3" focusKey="menu3" />
      </div>
    </FocusContext.Provider>
  );
};
