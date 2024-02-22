import * as React from "react";

function AddIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={30}
            height={30}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M7.5 15h15M15 22.5v-15"
                stroke="#fff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default AddIcon;
