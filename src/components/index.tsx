/* app imports */
import "./css/style.scss";
import SimpleFiveColumnLayout from "./simple-five-column-layout";
import FixedWidthColumnLayout from "./fixed-width-column-layout";
import AutoWidthFractionalLayout from "./auto-width-fractional-layout";
import MultiFractionalResponsiveLayout from "./multi-fractional-responsive-layout";
import DynamicAutoFillLayout from "./dynamic-auto-fill-layout";
import FractionalRepeatPattern from "./fractional-repeat-pattern";

/* component */
function AppOutlet(): JSX.Element {
  return (
    <>
      <SimpleFiveColumnLayout />
      <FixedWidthColumnLayout />
      <AutoWidthFractionalLayout />
      <MultiFractionalResponsiveLayout />
      <DynamicAutoFillLayout />
      <FractionalRepeatPattern />
    </>
  );
}

/* exports */
export default AppOutlet;
