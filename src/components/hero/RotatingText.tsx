"use client";

export default function RotatingText() {
  return (
    <div
      dir="ltr"
      className="
        
        pointer-events-none
        absolute
        inset-0
        z-30
        animate-rotate-circle
      "
    >
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <path
            id="doctor-text-path"
            d="
              M 200,18
              A 182,182 0 1,1 199.9,18
            "
            fill="none"
          />
        </defs>

        <text
          fill="#263936"
          fontSize="13"
          fontWeight="500"
          letterSpacing="2.5"
          style={{
            direction: "ltr",
          }}
        >
          <textPath
            href="#doctor-text-path"
            startOffset="25%"
            textAnchor="middle"
          >
            Dr. Banafsheh Yaloodbardan
          </textPath>

          <textPath
            href="#doctor-text-path"
            startOffset="75%"
            textAnchor="middle"
          >
            Cosmetic Dentist
          </textPath>
        </text>
      </svg>
    </div>
  );
}