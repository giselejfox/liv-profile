

export default function LetterSVG({ styledLetter }) {
    return (
        <div>
            {styledLetter === 'dotted-O' && <DottedO />}
            {styledLetter === 'dotted-L' && <DottedL />}
            {styledLetter === 'dotted-I' && <DottedI />}
            {styledLetter === 'dotted-V' && <DottedV />}
            {styledLetter === 'dotted-A' && <DottedA />}
            {styledLetter === 'dotted-M' && <DottedM />}
            {styledLetter === 'dotted-E' && <DottedE />}
            {styledLetter === 'dotted-N' && <DottedN />}
        </div>
    )
}

function DottedO() {
    return (
        <svg className="main-splash-svg-letter" viewBox="0 0 259 263" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M114.279 27.6414C85.3045 27.6414 49.4927 39.2585 36.858 67.6866C28.4524 86.5992 25.0352 107.696 25.0352 128.199C25.0352 143.115 22.9112 159.845 27.4506 174.22C38.3212 208.643 62.6622 230.567 98.5149 237.021C136.678 243.89 177.912 245.291 204.667 213.883C226.241 188.556 233.73 158.439 233.27 125.784C232.984 105.431 221.708 78.9656 202.505 68.8308C187.722 61.0284 171.23 54.2524 157.248 44.9308C148.664 39.2082 131.071 25.3531 121.144 25.3531" stroke="black" stroke-width="50" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 100"/>
        </svg>
    )
}

function DottedL() {
    return (
        <svg className="main-splash-svg-letter" viewBox="0 0 254 363" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.432 25.1158C41.4621 86.2219 29.7016 146.456 26.9636 207.377C25.2034 246.541 16.3401 294.845 53.838 320.343C107.587 356.893 180.738 332.002 228.053 296.516" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
        </svg>
    )
}

function DottedI() {
    return (
        <svg className="main-splash-svg-letter" width="58" height="376" viewBox="0 0 58 376" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.984 25.6164C29.984 88.1605 32.7965 150.676 32.7965 213.268C32.7965 236.03 29.984 258.443 29.984 280.923C29.984 295.994 25.7654 310.847 25.7654 325.922C25.7654 331.869 25.8469 337.108 27.0935 342.718C27.9341 346.501 31.2298 347.319 32.7965 350.452" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
        </svg>
    )
}

function DottedV() {
    return (
        <svg className="main-splash-svg-letter" viewBox="0 0 331 396" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.385 25.5231C29.2329 42.8384 37.4227 60.23 43.0408 77.0844C54.9419 112.787 69.5386 148.032 85.2273 182.238C103.846 222.833 130.507 262.953 140.695 306.923C144.659 324.032 150.209 341.117 156.866 357.39C158.755 362.007 158.909 365.761 162.491 369.343C169.903 376.755 176.459 352.478 178.35 348.172C193.682 313.25 206.747 277.108 221.162 241.768C234.873 208.154 249.288 174.605 261.551 140.442C269.236 119.036 279.799 97.266 289.754 76.7719C293.843 68.3534 297.885 59.6717 301.004 50.835C301.837 48.4728 303.149 43.4345 305.222 42.3977" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
        </svg>
    )
}

function DottedA() {
    return (
        <svg className="main-splash-svg-letter" viewBox="0 0 326 389" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M179.996 25.7107C179.018 29.625 175.645 33.0498 173.668 36.4917C168.057 46.2586 163.446 56.7443 158.2 66.7253C145.515 90.8578 135.342 116.884 124.216 141.802C104.089 186.879 82.3577 231.199 60.4677 275.392C54.0819 288.284 47.5015 301.27 42.265 314.688C39.5338 321.687 34.3104 330.007 33.7496 337.578C33.1665 345.449 29.6844 356.644 25.3123 363.203" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
            <path d="M182.808 25.7107C192.972 48.9638 201.223 72.9594 211.636 96.0997C219.232 112.979 227.104 129.963 234.057 147.114C247.334 179.863 260.52 212.286 272.025 245.705C277.325 261.1 279.553 278.013 282.65 293.986C284.736 304.746 290.286 314.383 292.806 324.922C294.57 332.299 297.724 342.728 300.931 349.141" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
            <path d="M101.248 222.581C151.619 222.581 201.258 214.144 251.713 214.144" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
        </svg>
    )
}

function DottedM() {
    return (
        <svg className="main-splash-svg-letter" viewBox="0 0 345 401" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.7616 375.554C38.7616 343.051 25.8765 311.99 25.8765 279.058C25.8765 245.483 28.4535 211.997 28.4535 178.554C28.4535 140.757 28.4535 102.961 28.4535 65.1642C28.4535 51.323 54.0012 83.9524 57.8031 89.2165C68.8375 104.495 83.6738 115.968 100.324 124.293C111.136 129.699 123.291 134.342 131.535 143.764C132.782 145.188 146.329 164.809 149.574 157.508C169.634 112.374 202.348 79.5702 237.193 45.6932C245.543 37.5753 261.109 25.077 273.272 25.077C285.979 25.077 288.898 70.1132 291.311 79.481C297.973 105.346 301.259 129.86 301.619 156.506C302.011 185.514 311.461 215.194 315.077 244.125C319.13 276.551 319.658 374.73 319.658 342.052" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
        </svg>
    )
}

function DottedE() {
    return (
        <svg className="main-splash-svg-letter" viewBox="0 0 288 411" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.4011 41.4244C33.4011 91.9511 30.8241 142.58 30.8241 192.897C30.8241 250.38 25.67 307.415 25.67 364.842C25.67 385.773 42.5937 381.655 60.3168 383.597C92.648 387.14 125.825 383.171 158.101 381.736C178.24 380.841 197.65 384.17 217.516 384.17C232.811 384.17 247.788 381.593 262.757 381.593" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
            <path d="M51.4404 193.469C86.8388 193.469 121.758 195.117 157.099 196.047C174.293 196.499 191.513 201.201 208.64 201.201" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
            <path d="M43.7092 25.9622C67.1583 25.9622 89.9206 31.2276 113.146 33.5501C129.188 35.1543 146.112 33.6933 162.253 33.6933C175.138 33.6933 188.023 33.6933 200.908 33.6933C210.539 33.6933 230.209 26.9151 236.987 33.6933" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
        </svg>
    )
}

function DottedN() {
    return (
        <svg className="main-splash-svg-letter" viewBox="0 0 265 412" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.3823 386.131C26.3114 311.072 25.2283 236.705 25.2283 161.642C25.2283 154.73 26.1769 66.5784 30.3823 66.5784C42.4754 66.5784 59.6636 92.4707 66.4608 100.653C76.0034 112.139 83.0497 125.428 91.6585 137.59C101.56 151.578 114.224 163.267 124.158 177.248C138.45 197.363 148.621 222.14 160.666 243.821C169.834 260.323 176.367 277.989 185.004 294.646C192.634 309.36 197.585 324.606 204.332 339.601C206.07 343.463 213.17 360.366 216.502 362.365C221.823 365.557 223.899 306.805 224.233 303.093C226.722 275.433 232.067 248.085 234.111 220.485C237.184 179.001 239.122 138.203 239.122 96.3575C239.122 71.5513 236.363 50.1789 239.122 25.3459" stroke="black" stroke-width="50" stroke-linecap="round" stroke-dasharray="100 100"/>
        </svg>
    )
}