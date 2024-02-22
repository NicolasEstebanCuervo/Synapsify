import * as React from "react";

function ExitIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            data-testid="exit-icon"
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.343 10.343l11.314 11.314M10.343 21.657l11.314-11.314"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default ExitIcon;
