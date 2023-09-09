import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Plus = (props) => (
  <Svg
    width={12   }
    height={10}
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.43596 3.685V5.97625H2.52596V3.685H0.299707V2.775H2.52596V0.58125H3.43596V2.775H5.69471V3.685H3.43596Z"
      fill="#FF0000"
    />
  </Svg>
);
export default Plus;
