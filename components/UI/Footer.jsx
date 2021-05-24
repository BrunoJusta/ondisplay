export const Footer = () => {
  return (
    <footer className="bottom-0 w-full">
      <div>
        <svg
          className="footer-waves"
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
              id="grad1"
              x1="950.993"
              y1="1382.85"
              x2="950.993"
              y2="533.938"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.536458"
                style={{ stopColor: "#35BA99", stopOpacity: 1 }}
              />
              <stop
                offset="1"
                style={{ stopColor: "#1CD6C0", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <g className="footer-animation">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(28, 214, 192, 0.1)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(28, 214, 192, 0.3)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(28, 214, 192, 0.5)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="url(#grad1)" />
          </g>
        </svg>
      </div>
      <div className="footer-content flex justify-center items-end">
        <p className="text-center text-xs text-white mb-5">©2021 ONDISPLAY</p>
      </div>
    </footer>
  );
};
