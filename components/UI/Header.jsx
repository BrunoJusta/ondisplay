export const Header = () => {
  return (
    <>
      <header className="absolute top-0 w-full -z-10">
        <div className="header-content flex justify-center items-end -mb-1 "></div>
        <div>
          <svg
            class="header-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
              <linearGradient
                id="grad2"
                x1="950.993"
                y1="1382.85"
                x2="950.993"
                y2="533.938"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.536458"
                  style={{ stopColor: "#1CD6C0", stopOpacity: 1 }}
                />
                <stop
                  offset="1"
                  style={{ stopColor: "#35BA99", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <g class="header-animation">
              <use xlinkHref="#gentle-wave" x="10" y="7" fill="url(#grad2)" />
            </g>
          </svg>
        </div>
      </header>
    </>
  );
};
