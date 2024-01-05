import React from "react";

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full flex justify-center items-center bg-gradient-to-b from-sky-400 to-blue-800">
            {children}
        </div>
     );
}
 
export default AuthLayout;