import Image from "next/image";

interface FeatureBadgeProps {
    title: string;
    icon: string;
    className?: string;
    wide?: boolean;
    variant?: "default" | "wide";
}

export default function FeatureBadge({
    title,
    icon,
    className = "",
    wide = false,
    variant = "default",
}: FeatureBadgeProps) {
    const isWide = wide || variant === "wide";

    return (
        <div
            className={`
        flex items-center gap-4 
        bg-white shadow-md 
        rounded-full 
        px-6 py-4 
        ${isWide ? "w-full justify-center" : ""}
        ${className}
      `}
        >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                    src={icon}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <p className="text-green-600 font-semibold text-sm md:text-base">
                {title}
            </p>
        </div>
    );
}
