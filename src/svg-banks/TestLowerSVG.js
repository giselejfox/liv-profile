

export const lowerSVGData = [
    { id: 1, label: 'Some sjs'},
    { id: 2, label: 'Blob Shape'},
    { id: 3, label: 'Blob Shape'}
];

export function TestLowerSVG({ num, wrapperClasses, svgClasses }) {
    return (
        <div className={wrapperClasses}>
            {num === 1 && <TestLower1 svgClasses={svgClasses} />}
            {num === 2 && <TestLower2 svgClasses={svgClasses} />}
            {num === 3 && <TestLower3 svgClasses={svgClasses} />}
        </div>
    )
}

function TestLower1({ svgClasses }) {
    return (
        <svg className={svgClasses} viewBox="0 0 502 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M261 5C261 2.23858 258.761 0 256 0C253.239 0 251 2.23859 251 5.00001V30.6674C251 51.1984 221.361 54.1362 217.331 34.0047L213.009 12.4192C212.467 9.71149 209.833 7.95594 207.125 8.49804C204.417 9.04015 202.662 11.6746 203.204 14.3823L207.168 34.1814C211.203 54.3381 182.659 63.0163 174.793 44.0243L167.065 25.3693C166.009 22.8181 163.084 21.6066 160.533 22.6634C157.981 23.7201 156.77 26.645 157.827 29.1962L168.174 54.1779C176.019 73.117 149.836 87.1846 138.374 70.1889L122.769 47.05C121.225 44.7605 118.117 44.1563 115.828 45.7003C113.539 47.2443 112.934 50.3519 114.478 52.6413L123.761 66.4053C135.272 83.4745 112.204 102.49 97.6458 87.9314L85.9067 76.1924C83.9541 74.2398 80.7883 74.2398 78.8356 76.1924C76.883 78.145 76.883 81.3108 78.8356 83.2634L106.975 111.402C121.412 125.84 102.798 148.807 85.6833 137.673L52.9953 116.407C50.6806 114.901 47.5834 115.557 46.0775 117.872C44.5716 120.186 45.2273 123.283 47.542 124.789L75.3939 142.909C92.522 154.052 79.0327 180.394 59.9798 173.01L28.9981 161.002C26.4233 160.004 23.527 161.282 22.5291 163.857C21.5312 166.432 22.8095 169.328 25.3843 170.326L34.8792 174.006C52.2369 180.734 44.5789 206.776 26.3424 203.037L10.9975 199.891C8.2924 199.336 5.6498 201.079 5.09513 203.784C4.54047 206.49 6.28377 209.132 8.98891 209.687L19.6467 211.872C38.6204 215.762 35.4333 243.774 16.0706 243.303L5.19432 243.038C2.43372 242.971 0.141314 245.154 0.0740981 247.915C0.00688199 250.675 2.1903 252.968 4.95091 253.035L38.4802 253.851C58.963 254.35 61.233 283.965 41.0655 287.58L13.5938 292.503C10.8757 292.99 9.06715 295.589 9.5543 298.307C10.0415 301.025 12.6398 302.833 15.3579 302.346L25.4071 300.545C43.7239 297.263 50.7785 323.444 33.2921 329.808L23.6985 333.3C21.1036 334.244 19.7656 337.114 20.7101 339.709C21.6546 342.303 24.5238 343.641 27.1187 342.697L70.198 327.017C89.2899 320.068 102.283 346.407 85.1501 357.327L47.0386 381.621C44.71 383.105 44.0256 386.196 45.5099 388.525C46.9942 390.853 50.0852 391.538 52.4137 390.053L89.4178 366.466C106.555 355.542 124.946 378.452 110.576 392.822L79.5468 423.851C77.5942 425.804 77.5942 428.97 79.5468 430.923C81.4995 432.875 84.6653 432.875 86.6179 430.923L98.7973 418.743C113.352 404.189 136.417 423.191 124.917 440.262L115.294 454.547C113.751 456.837 114.357 459.945 116.647 461.487C118.938 463.03 122.045 462.424 123.588 460.134L138.042 438.678C149.498 421.672 175.694 435.738 167.847 454.682L157.947 478.583C156.89 481.134 158.101 484.059 160.653 485.116C163.204 486.172 166.129 484.961 167.186 482.41L172.698 469.102C179.927 451.65 206.163 459.805 202.224 478.28L200.03 488.574C199.454 491.274 201.177 493.93 203.878 494.506C206.578 495.082 209.234 493.359 209.81 490.658L217.374 455.178C221.627 435.223 251 438.319 251 458.722V495C251 497.761 253.239 500 256 500C258.761 500 261 497.761 261 495V474.567C261 454.036 290.639 451.098 294.669 471.229L299.398 494.847C299.94 497.555 302.574 499.311 305.282 498.769C307.99 498.226 309.745 495.592 309.203 492.884L305.239 473.085C301.204 452.928 329.748 444.25 337.614 463.242L345.341 481.897C346.398 484.448 349.323 485.66 351.874 484.603C354.426 483.546 355.637 480.622 354.58 478.07L344.689 454.19C336.844 435.25 363.027 421.183 374.489 438.178L388.456 458.888C390 461.178 393.107 461.782 395.397 460.238C397.686 458.694 398.29 455.586 396.746 453.297L387.464 439.533C375.952 422.464 399.021 403.449 413.579 418.007L425.318 429.746C427.271 431.698 430.436 431.698 432.389 429.746C434.342 427.793 434.342 424.627 432.389 422.675L411.237 401.523C396.8 387.086 415.414 364.118 432.529 375.253L458.271 392C460.586 393.506 463.683 392.85 465.189 390.535C466.695 388.221 466.039 385.124 463.724 383.618L435.873 365.498C418.745 354.355 432.234 328.013 451.287 335.397L482.268 347.405C484.843 348.403 487.739 347.125 488.737 344.55C489.735 341.975 488.457 339.079 485.882 338.081L472.48 332.886C456.598 326.731 463.605 302.902 480.291 306.323L489.002 308.109C491.708 308.664 494.35 306.921 494.905 304.216C495.46 301.51 493.716 298.868 491.011 298.313L480.353 296.128C461.38 292.238 464.567 264.226 483.929 264.697L494.806 264.962C497.566 265.029 499.859 262.846 499.926 260.085C499.993 257.325 497.81 255.032 495.049 254.965L473.439 254.439C452.956 253.94 450.686 224.325 470.853 220.711L497.673 215.904C500.391 215.417 502.2 212.818 501.712 210.1C501.225 207.382 498.627 205.574 495.909 206.061L485.859 207.862C467.543 211.145 460.488 184.963 477.974 178.599L487.568 175.107C490.163 174.163 491.501 171.293 490.556 168.698C489.612 166.104 486.743 164.766 484.148 165.71L443.865 180.372C424.773 187.321 411.78 160.983 428.913 150.062L465.608 126.671C467.937 125.187 468.621 122.096 467.137 119.767C465.653 117.439 462.562 116.754 460.233 118.238L423.229 141.826C406.092 152.749 387.701 129.84 402.071 115.47L433.1 84.4402C435.053 82.4876 435.053 79.3218 433.1 77.3691C431.148 75.4165 427.982 75.4165 426.029 77.3691L413.85 89.5484C399.296 104.103 376.23 85.1004 387.73 68.0296L397.353 53.7445C398.896 51.4543 398.29 48.347 396 46.8041C393.71 45.2613 390.602 45.8672 389.059 48.1575L374.605 69.6137C363.149 86.6198 336.953 72.5542 344.8 53.6101L354.7 29.7088C355.757 27.1576 354.546 24.2327 351.994 23.176C349.443 22.1192 346.518 23.3307 345.462 25.882L340.892 36.914C333.003 55.9586 304.374 47.0597 308.672 26.899L311.97 11.4264C312.546 8.7257 310.823 6.0696 308.123 5.49387C305.422 4.91814 302.766 6.6408 302.19 9.34154L294.626 44.8221C290.373 64.7768 261 61.6808 261 41.2777V5Z" fill="url(#paint0_linear_6_95)"/>
            <defs>
            <linearGradient id="paint0_linear_6_95" x1="441.5" y1="500" x2="-91" y2="-94.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2D962"/>
            <stop offset="1" stopColor="#468EEE"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

function TestLower2({ svgClasses }) {
    return (
        <svg className={svgClasses} viewBox="0 0 401 401" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M200 100V200H300H357.819L399.183 199.786L399.658 291.673C399.885 294.419 400 297.196 400 300C400 302.449 399.912 304.877 399.739 307.281L400.217 399.783L300.219 400.3L300.217 400C300.145 400 300.072 400 300 400C244.772 400 200 355.228 200 300V400H100H0V300C0 244.772 44.7715 200 100 200H0V100V0H100C155.228 0 200 44.7715 200 100ZM200 100V0H300H400V100C400 155.228 355.228 200 300 200C244.772 200 200 155.228 200 100Z" fill="url(#paint0_linear_5_66)"/>
            <defs>
            <linearGradient id="paint0_linear_5_66" x1="-8.99999" y1="-12.5" x2="417" y2="418" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8DB5C"/>
            <stop offset="1" stopColor="#3687FA"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

function TestLower3({ svgClasses }) {
    return (
        <svg className={svgClasses} viewBox="0 0 390 390" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M195 390C87.3045 390 0 302.696 0 195V0H195C302.696 0 390 87.3045 390 195V390H195Z" fill="url(#paint0_linear_8_87)"/>
            <defs>
            <linearGradient id="paint0_linear_8_87" x1="0" y1="0" x2="356.5" y2="402.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E44855"/>
            <stop offset="1" stopColor="#463F4C"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

