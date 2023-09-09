import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Profile = (props) => (
    <Svg
        width={23}
        height={25}
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11.5 8.41463L14.5095 13.0177H8.49052L11.5 8.41463ZM23 12.5379C23 18.916 17.8482 24.0922 11.5 24.0922C5.15181 24.0922 0 18.916 0 12.5379C0 6.15968 5.15181 0.983521 11.5 0.983521C17.8482 0.983521 23 6.15968 23 12.5379ZM18.3722 16.3909L11.5 5.99195L4.62782 16.3909H6.0375L7.59556 13.9821H15.4137L16.9718 16.3909H18.3722Z"
            fill="#FF4343"
        />
    </Svg>
);
export default Profile;
