
export default function BackgroundCurve() {
    // Tan-grey line color
    const color = "#d1d5db";

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            opacity: 0.6
        }}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* 
           S-Curve Logic:
           Starts Top-Left (ish), curves down-right, then down-left.
           M 0 0: Start top left
           C ... : Bezier curve to form S shape down the center
           The photo should assume to be on top of this line start.
        */}
                <path
                    d="M 10 0 C 80 40, 20 60, 90 100"
                    stroke={color}
                    strokeWidth="0.8"
                    fill="none"
                />
                {/* Second curve opposite side as requested "there is like 2 curve" 
            "from left to right same but opposite side" - Interpret this as mirroring or complementary flow
        */}
                <path
                    d="M 90 0 C 20 40, 80 60, 10 100"
                    stroke={color}
                    strokeWidth="0.8"
                    fill="none"
                />
            </svg>
        </div>
    );
}
