import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PencilIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m2.818 10.136 6.685-6.684-.932-.932-6.685 6.684v.932h.932Zm.547 1.318H.568V8.658L8.105 1.12a.66.66 0 0 1 .932 0L10.9 2.986a.659.659 0 0 1 0 .932l-7.536 7.536ZM.568 12.773h11.864v1.318H.568v-1.318Z"
    />
  </Svg>
)
export default PencilIcon
