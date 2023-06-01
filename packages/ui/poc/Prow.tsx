import {
  FocusableComponentLayout,
  FocusDetails,
  KeyPressDetails,
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useCallback, useRef } from "react";
import { Pcard } from "./Pcard";

interface ContentRowProps {
  title: string;
  onAssetPress: (props: object, details: KeyPressDetails) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}

const assets = [
  {
    title: "Button 1",
  },
  {
    title: "Button 2",
  },
  {
    title: "Button 3",
  },
  {
    title: "Button 4",
  },
  {
    title: "Button 5",
  },
  {
    title: "Button 6",
  },
  {
    title: "Button 7",
  },
  {
    title: "Button 8",
  },
  {
    title: "Button 9",
  },
  {
    title: "Button 10",
  },
  {
    title: "Button 11",
  },
  {
    title: "Button 12",
  },
  {
    title: "Button 13",
  },
];

export const Prow = ({
  title: rowTitle,
  onAssetPress,
  onFocus,
}: ContentRowProps) => {
  const { ref, focusKey } = useFocusable({
    onFocus,
  });

  const scrollingRef = useRef<HTMLDivElement>(null);

  const onAssetFocus = useCallback(
    ({ x }) => {
      (scrollingRef.current as any)?.scrollTo({ left: x, behavior: "smooth" });
    },
    [scrollingRef]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="cnt__details__wrapper" ref={ref}>
        <div className="cnt__details__title">{rowTitle}</div>
        <div className="cnt__details__scrolling__wrapper" ref={scrollingRef}>
          <div className="cnt__details__scrolling__cnt">
            {assets.map(({ title }) => (
              <Pcard
                key={title}
                title={title}
                onEnterPress={onAssetPress}
                onFocus={onAssetFocus}
              />
            ))}
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
};
