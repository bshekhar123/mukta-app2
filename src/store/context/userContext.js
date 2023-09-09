import React, { useState } from "react";
import { doGET } from "../httpUtil/httpUtils";
import { ENDPOINTS, base_url } from "../../common/Constant";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [accountData, setAccountData] = useState({});
    const getCustomer = async () => {
        try {
            const res = await doGET(`${base_url}${ENDPOINTS.getCustomer}`);
            setAccountData(res?.data)
            return res;
        } catch (error) {
            showError("Server Not Working")
        }
    }
    return (
        <UserContext.Provider
            value={{
                getCustomer,
                accountData,
            }}
        >
            {props?.children}
        </UserContext.Provider>
    );
};