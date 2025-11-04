
export type WheelItem = { id: string; label: string; svgString?: string };

type FortuneWheelProps = {
  items: WheelItem[];
  activeId?: string | null;
  rotation?: number;
  spinning?: boolean;
  onTransitionEnd?: () => void;
};

export default function FortuneWheel({
  items,
  activeId = null,
  rotation = 0,
  spinning = false,
  onTransitionEnd,
}: FortuneWheelProps) {

return (
  <svg
      
      viewBox="27.943 98.041 335.5 337"
      className="absolute inset-0 h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
        transformBox: "fill-box",
        transition: spinning
          ? "transform 3.2s cubic-bezier(0.2,0.8,0.2,1)"
          : "none",
      }}
      onTransitionEnd={onTransitionEnd}
    >

<g filter="url(#filter0_f_404_31499)">
<circle cx="196.443" cy="266.541" r="166.5" transform="rotate(165.5 196.443 266.541)" fill="url(#paint0_linear_404_31499)" fill-opacity="0.63"/>
</g>
<g filter="url(#filter1_i_404_31499)">
<mask id="path-2-outside-1_404_31499" maskUnits="userSpaceOnUse" x="28.9434" y="100.041" width="335" height="335" fill="black">
<rect fill="white" x="28.9434" y="100.041" width="335" height="335"/>
<path d="M362.943 267.541C362.943 359.497 288.399 434.041 196.443 434.041C104.488 434.041 29.9434 359.497 29.9434 267.541C29.9434 175.586 104.488 101.041 196.443 101.041C288.399 101.041 362.943 175.586 362.943 267.541ZM113.193 267.541C113.193 313.519 150.466 350.791 196.443 350.791C242.421 350.791 279.693 313.519 279.693 267.541C279.693 221.563 242.421 184.291 196.443 184.291C150.466 184.291 113.193 221.563 113.193 267.541Z"/>
</mask>
<path d="M362.943 267.541C362.943 359.497 288.399 434.041 196.443 434.041C104.488 434.041 29.9434 359.497 29.9434 267.541C29.9434 175.586 104.488 101.041 196.443 101.041C288.399 101.041 362.943 175.586 362.943 267.541ZM113.193 267.541C113.193 313.519 150.466 350.791 196.443 350.791C242.421 350.791 279.693 313.519 279.693 267.541C279.693 221.563 242.421 184.291 196.443 184.291C150.466 184.291 113.193 221.563 113.193 267.541Z" stroke="white" stroke-opacity="0.01" stroke-width="2" mask="url(#path-2-outside-1_404_31499)"/>
</g>
<g filter="url(#filter2_i_404_31499)">
<mask id="path-3-outside-2_404_31499" maskUnits="userSpaceOnUse" x="28.9434" y="100.041" width="335" height="335" fill="black">
<rect fill="white" x="28.9434" y="100.041" width="335" height="335"/>
<path d="M29.9434 267.541C29.9434 175.586 104.488 101.041 196.443 101.041C288.399 101.041 362.943 175.586 362.943 267.541C362.943 359.497 288.399 434.041 196.443 434.041C104.488 434.041 29.9434 359.497 29.9434 267.541ZM279.693 267.541C279.693 221.563 242.421 184.291 196.443 184.291C150.466 184.291 113.193 221.563 113.193 267.541C113.193 313.519 150.466 350.791 196.443 350.791C242.421 350.791 279.693 313.519 279.693 267.541Z"/>
</mask>
<path d="M29.9434 267.541C29.9434 175.586 104.488 101.041 196.443 101.041C288.399 101.041 362.943 175.586 362.943 267.541C362.943 359.497 288.399 434.041 196.443 434.041C104.488 434.041 29.9434 359.497 29.9434 267.541ZM279.693 267.541C279.693 221.563 242.421 184.291 196.443 184.291C150.466 184.291 113.193 221.563 113.193 267.541C113.193 313.519 150.466 350.791 196.443 350.791C242.421 350.791 279.693 313.519 279.693 267.541Z" stroke="white" stroke-opacity="0.01" stroke-width="2" mask="url(#path-3-outside-2_404_31499)"/>
</g>
<g filter="url(#filter3_i_404_31499)">
<path d="M279.693 411.734C254.331 426.377 225.555 434.072 196.269 434.041C166.983 434.01 138.223 426.256 112.892 411.56L154.667 339.55C167.333 346.898 181.713 350.776 196.356 350.791C210.999 350.806 225.387 346.959 238.068 339.638L279.693 411.734Z" fill="white" fillOpacity={activeId && activeId === items[0]?.id ? 1 : 0.1}/>
</g>

<foreignObject x="180" y="360" width="30" height="30">
  <div dangerouslySetInnerHTML={{ __html: items[0]?.svgString || "" }} />
</foreignObject>


<g transform="translate(195.443 400.041)">
  <text
    x="0"
    y="0"
    dy="0.35em"
    textAnchor="middle"
    dominantBaseline="middle"
    fill={activeId === items[0]?.id ? "#0A0A0A" : "#FFFFFF"}
    fontFamily="Inter"
    fontSize="20"
    fontWeight="500"
  >
    {items[0]?.label ?? ""}
  </text>
</g>

<g filter="url(#filter4_i_404_31499)">
<path d="M113.193 411.734C87.8308 397.091 66.7793 376.018 52.1629 350.64C37.5465 325.262 29.8822 296.478 29.9436 267.192L113.193 267.367C113.163 282.01 116.995 296.402 124.303 309.091C131.611 321.78 142.137 332.316 154.818 339.638L113.193 411.734Z" fill="white" fillOpacity={activeId && activeId === items[1]?.id ? 1 : 0.1}/>
</g>
{/* <g clip-path="url(#clip1_404_31499)">
<path d="M104.144 313.041C101.916 313.041 99.7792 313.943 98.2039 315.547C96.6286 317.152 95.7436 319.328 95.7436 321.597C95.7436 323.866 96.6286 326.042 98.2039 327.647C99.7792 329.251 101.916 330.152 104.144 330.152C105.735 330.152 107.261 329.509 108.386 328.363C109.511 327.217 110.144 325.662 110.144 324.041C110.144 322.421 109.511 320.866 108.386 319.72C107.261 318.574 105.735 317.93 104.144 317.93C103.189 317.93 102.273 318.317 101.598 319.004C100.923 319.692 100.544 320.624 100.544 321.597C100.544 322.569 100.923 323.502 101.598 324.19C102.273 324.877 103.189 325.264 104.144 325.264C104.462 325.264 104.767 325.135 104.992 324.906C105.217 324.676 105.344 324.366 105.344 324.041C105.344 323.717 105.217 323.406 104.992 323.177C104.767 322.948 104.462 322.819 104.144 322.819C103.825 322.819 103.52 322.69 103.295 322.461C103.07 322.232 102.944 321.921 102.944 321.597C102.944 321.273 103.07 320.962 103.295 320.733C103.52 320.503 103.825 320.375 104.144 320.375C105.098 320.375 106.014 320.761 106.689 321.449C107.364 322.136 107.744 323.069 107.744 324.041C107.744 325.014 107.364 325.946 106.689 326.634C106.014 327.322 105.098 327.708 104.144 327.708C102.552 327.708 101.026 327.064 99.901 325.918C98.7757 324.772 98.1436 323.218 98.1436 321.597C98.1436 319.976 98.7757 318.422 99.901 317.276C101.026 316.13 102.552 315.486 104.144 315.486C106.371 315.486 108.508 316.387 110.083 317.992C111.659 319.596 112.544 321.772 112.544 324.041C112.544 326.31 111.659 328.487 110.083 330.091C108.508 331.696 106.371 332.597 104.144 332.597C101.279 332.597 98.5322 331.438 96.5069 329.375C94.4815 327.312 93.3436 324.514 93.3436 321.597C93.3436 321.273 93.2172 320.962 92.9921 320.733C92.7671 320.503 92.4619 320.375 92.1436 320.375C91.8253 320.375 91.5201 320.503 91.2951 320.733C91.07 320.962 90.9436 321.273 90.9436 321.597C90.9436 325.163 92.3343 328.582 94.8098 331.104C97.2853 333.625 100.643 335.041 104.144 335.041C107.008 335.041 109.755 333.882 111.78 331.82C113.806 329.757 114.944 326.959 114.944 324.041C114.944 321.124 113.806 318.326 111.78 316.263C109.755 314.2 107.008 313.041 104.144 313.041Z" fill="white"/>
</g> */}
<foreignObject transform="translate(109.4092 305.707) rotate(60)" width="30" height="30">
  <div dangerouslySetInnerHTML={{ __html: items[1]?.svgString || "" }} />
</foreignObject>

<g transform="translate(82.4092 335.707) rotate(60)">
<text
          x="0"
          y="0"
          dy="0.35em"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={activeId === items[1]?.id ? "#0A0A0A" : "#FFFFFF"}
          fontFamily="Inter"
          fontSize="20"
          fontWeight="500"
        >
            {items[1]?.label ?? ""}
        </text>
</g>

<g filter="url(#filter5_i_404_31499)">
<path d="M113.193 123.348C138.556 108.705 167.332 101.011 196.618 101.041C225.904 101.072 254.664 108.826 279.995 123.523L238.219 195.532C225.553 188.184 211.174 184.306 196.531 184.291C181.888 184.276 167.5 188.123 154.818 195.444L113.193 123.348Z" fill="white" fillOpacity={activeId && activeId === items[2]?.id ? 1 : 0.1}/>
</g>
{/* <g clip-path="url(#clip2_404_31499)">
<g clip-path="url(#clip3_404_31499)">
<path d="M196.444 145.041C189.264 145.041 183.444 150.861 183.444 158.041C183.444 165.221 189.264 171.041 196.444 171.041C203.624 171.041 209.444 165.221 209.444 158.041C209.444 150.861 203.624 145.041 196.444 145.041Z" fill="#F7931A"/>
<path d="M190.603 159.65C190.348 161.353 191.645 162.269 193.418 162.88L192.843 165.187L194.247 165.536L194.808 163.29C195.176 163.383 195.555 163.469 195.933 163.555L195.368 165.816L196.772 166.166L197.347 163.859C197.654 163.928 197.953 163.999 198.244 164.071L198.243 164.078L200.18 164.561L200.554 163.062C200.554 163.062 199.511 162.823 199.533 162.808C198.964 162.666 198.862 162.29 198.879 161.991L199.534 159.362C199.494 159.353 199.446 159.338 199.388 159.316L199.536 159.353L200.454 155.67C200.524 155.498 200.701 155.239 201.099 155.337C201.084 155.317 202.119 155.591 202.119 155.591L202.816 153.984L200.988 153.529C200.649 153.443 200.316 153.354 199.988 153.27L200.569 150.937L199.166 150.587L198.591 152.895C198.208 152.792 197.834 152.695 197.471 152.605L198.045 150.307L196.641 149.958L196.06 152.286C193.664 151.833 191.864 152.016 191.106 154.182C190.495 155.925 191.136 156.932 192.396 157.588C191.478 157.799 190.787 158.403 190.603 159.65ZM193.812 155.15C194.245 153.406 197.183 154.349 198.135 154.586L197.363 157.677C196.411 157.439 193.358 156.969 193.812 155.15ZM193.378 159.675C193.773 158.088 196.217 158.895 197.009 159.093L196.311 161.896C195.519 161.698 192.965 161.33 193.378 159.675Z" fill="white"/>
</g>
</g> */}

<foreignObject transform="translate(207.944 169.041) rotate(-180)" width="30" height="30">
  <div dangerouslySetInnerHTML={{ __html: items[2]?.svgString || "" }} />
</foreignObject>

  <g transform="translate(195.944 129.041) rotate(-180)">
 <text
          x="0"
          y="0"
          dy="0.35em"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={activeId === items[2]?.id ? "#0A0A0A" : "#FFFFFF"}
          fontFamily="Inter"
          fontSize="20"
          fontWeight="500"
        >

            {items[2]?.label ?? ""}
        </text>
  </g>

<g filter="url(#filter6_i_404_31499)">
<path d="M279.694 123.348C305.056 137.991 326.107 159.065 340.724 184.443C355.34 209.82 363.004 238.604 362.943 267.89L279.693 267.716C279.724 253.073 275.892 238.681 268.584 225.992C261.275 213.303 250.75 202.766 238.069 195.445L279.694 123.348Z" fill="white" fillOpacity={activeId && activeId === items[3]?.id ? 1 : 0.1}/>
</g>

<foreignObject transform="translate(290.478 230.375) rotate(-120)" width="30" height="30">
  <div dangerouslySetInnerHTML={{ __html: items[3]?.svgString || "" }} />
</foreignObject>

<g transform="translate(320.478 195.375) rotate(-120)">
<text
          x="0"
          y="0"
          dy="0.35em"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={activeId === items[3]?.id ? "#0A0A0A" : "#FFFFFF"}
          fontFamily="Inter"
          fontSize="20"
          fontWeight="500"
        >
            {items[3]?.label ?? ""}
        </text>
</g>

<g filter="url(#filter7_i_404_31499)">
<path d="M362.944 267.542C362.943 296.828 355.219 325.595 340.549 350.943C325.88 376.29 304.784 397.319 279.391 411.909L237.917 339.725C250.614 332.43 261.162 321.916 268.496 309.242C275.831 296.568 279.693 282.185 279.693 267.542L362.944 267.542Z" fill="white" fillOpacity={activeId && activeId === items[4]?.id ? 1 : 0.1}/>
</g>

<foreignObject transform="translate(270.978 325.875) rotate(-60)" width="30" height="30">
  <div dangerouslySetInnerHTML={{ __html: items[4]?.svgString || "" }} />
</foreignObject>

<g transform="translate(310.978 335.875) rotate(-60)">
<text
          x="0"
          y="0"
          dy="0.35em"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={activeId === items[4]?.id ? "#0A0A0A" : "#FFFFFF"}
          fontFamily="Inter"
          fontSize="20"
          fontWeight="500"
        >
            {items[4]?.label ?? ""}
        </text>
</g>

<g filter="url(#filter8_i_404_31499)">
<path d="M29.9435 267.541C29.9435 238.255 37.668 209.487 52.3375 184.14C67.0071 158.793 88.1027 137.764 113.496 123.174L154.97 195.358C142.273 202.652 131.725 213.167 124.39 225.841C117.056 238.514 113.193 252.898 113.193 267.541L29.9435 267.541Z" fill="white" fillOpacity={activeId && activeId === items[5]?.id ? 1 : 0.1}/>
</g>

<foreignObject transform="translate(120.9094 210.208) rotate(120) " width="30" height="30">
  <div dangerouslySetInnerHTML={{ __html: items[5]?.svgString || "" }} />
</foreignObject>

<g transform="translate(80.9094 201.208) rotate(120)">
<text
          x="0"
          y="0"
          dy="0.35em"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={activeId === items[5]?.id ? "#0A0A0A" : "#FFFFFF"}
          fontFamily="Inter"
          fontSize="20"
          fontWeight="500"
        >
            {items[5]?.label ?? ""}
        </text>
</g>

<defs>
{/* <filter id="filter0_f_404_31499" x="-70.0981" y="-0.00012207" width="533.083" height="533.083" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_404_31499"/>
</filter> */}
<filter id="filter1_i_404_31499" x="28.9434" y="100.041" width="335" height="335" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_31499"/>
</filter>
<filter id="filter2_i_404_31499" x="28.9434" y="100.041" width="335" height="335" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_31499"/>
</filter>
<filter id="filter3_i_404_31499" x="112.892" y="339.55" width="166.802" height="94.4907" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_31499"/>
</filter>
<filter id="filter4_i_404_31499" x="29.9431" y="267.193" width="124.875" height="144.542" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_31499"/>
</filter>
<filter id="filter5_i_404_31499" x="113.193" y="101.041" width="166.802" height="94.4907" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_31499"/>
</filter>
<filter id="filter6_i_404_31499" x="238.069" y="123.348" width="124.875" height="144.542" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_31499"/>
</filter>
<filter id="filter7_i_404_31499" x="237.917" y="267.542" width="125.026" height="144.367" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_31499"/>
</filter>
<filter id="filter8_i_404_31499" x="29.9434" y="123.174" width="125.026" height="144.367" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_404_31499"/>
</filter>
<linearGradient id="paint0_linear_404_31499" x1="236.395" y1="144.14" x2="169.174" y2="395.88" gradientUnits="userSpaceOnUse">
<stop stop-color="#37D263"/>
<stop offset="0.40414" stop-color="#54FCF2"/>
<stop offset="0.720906" stop-color="#2600FF"/>
<stop offset="1" stop-color="#003FF4"/>
</linearGradient>
<linearGradient id="paint1_linear_404_31499" x1="196.443" y1="238.041" x2="196.443" y2="298.041" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.3"/>
</linearGradient>
<clipPath id="clip0_404_31499">
<rect width="26" height="26" fill="white" transform="translate(183.443 364.041)"/>
</clipPath>
<clipPath id="clip1_404_31499">
<rect width="26" height="26" fill="white" transform="translate(107.372 306.265) rotate(60)"/>
</clipPath>
<clipPath id="clip2_404_31499">
<rect width="26" height="26" fill="white" transform="translate(209.444 171.041) rotate(-180)"/>
</clipPath>
<clipPath id="clip3_404_31499">
<rect width="26" height="26" fill="white" transform="matrix(-1 0 0 -1 209.444 171.041)"/>
</clipPath>
<clipPath id="clip4_404_31499">
<rect width="26" height="26" fill="white" transform="translate(285.515 228.818) rotate(-120)"/>
</clipPath>
</defs>
</svg>



  );
}
