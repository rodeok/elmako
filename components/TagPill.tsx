import localFont from 'next/font/local';

interface TagPillProps {
    text: string;
    color: "green" | "dark" | "orange";
}

const gestyRatio = localFont({
    src: '../public/fonts/Gesty-Ratio-DEMO-VERSION-BF6943b84de61fa-Exfont6bf8.otf',
    display: 'swap',
})

export default function TagPill({ text, color }: TagPillProps) {
    const styles = {
        green: "bg-green-500/90 text-white",
        dark: "bg-gray-800/80 text-white",
        orange: "bg-orange-500 text-white",
    };

    return (
        <div
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${styles[color]} ${gestyRatio.className} tracking-wide`}
        >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            {text}
        </div>
    );
}
