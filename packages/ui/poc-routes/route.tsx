import {
  FocusContext,
  init,
  useFocusable,
  KeyPressDetails,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

init({
  debug: false,
  visualDebug: false,
});

interface PocItemProps {
  focusKey: string;
  title: string;
  // link: string;
  onEnterPress: (props: object, details: KeyPressDetails) => void;
}

export const RouteItem = ({
  focusKey: focusKeyParam,
  title,
  // link,
  onEnterPress,
}: PocItemProps) => {
  const { focused, ref } = useFocusable({
    focusKey: focusKeyParam,
    onEnterPress,
    extraProps: { title },
  });

  return (
    <button
      ref={ref}
      style={{ border: `4px solid ${focused ? "red" : "black"}` }}
    >
      {title}
    </button>
  );
};

export const Routes = ({ focusKey: focusKeyParam }: { focusKey: string }) => {
  const { ref, focusSelf, focusKey } = useFocusable({
    focusKey: focusKeyParam,
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const router = useRouter();

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="routes" ref={ref}>
        <RouteItem
          title="home"
          focusKey="menu1"
          onEnterPress={() => router.push("/")}
        />
        <RouteItem
          title="about"
          focusKey="menu2"
          onEnterPress={() => router.push("/about")}
        />
        <RouteItem
          title="movie"
          focusKey="menu3"
          onEnterPress={() => router.push("/movie")}
        />
      </div>
    </FocusContext.Provider>
  );
};
