import { Plist } from "./Plist";
import { Pmenu } from "./Pmenu";

export const Poc = () => {
  return (
    <div className="pocs_container">
      <Pmenu focusKey={"MENU"} />
      <Plist />
    </div>
  );
};
