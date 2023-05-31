import { useState, useCallback } from "react";
import {
  init,
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import { Prow } from "./Prow";

export interface IAsset {
  img: string;
  title: string;
}

init({
  debug: false,
  visualDebug: false,
});

const rows = [
  {
    title: "Button1",
  },
  {
    title: "Button2",
  },
  {
    title: "Button3",
  },
  {
    title: "Button4",
  },
  {
    title: "Button5",
  },
];

export const Plist = () => {
  const { ref, focusKey } = useFocusable();

  const [selectedAsset, setSelectedAsset] = useState<IAsset | null>(null);

  const onAssetPress = useCallback((asset: any) => {
    setSelectedAsset(asset);
  }, []);

  const onRowFocus = useCallback(
    ({ y }) => {
      ref.current.scrollTo({ top: y, behavior: "smooth" });
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="content__wrapper">
        <div className="selected__item__wrapper">
          <button className="selected__item__box" />
          <div className="selected__item__title">
            {selectedAsset
              ? selectedAsset.title
              : 'Press "Enter" to select an asset'}
          </div>
        </div>

        <div className="scrolling__rows" ref={ref}>
          {rows.map(({ title }) => (
            <Prow
              key={title}
              title={title}
              onAssetPress={onAssetPress}
              onFocus={onRowFocus}
            />
          ))}
        </div>
      </div>
    </FocusContext.Provider>
  );
};
