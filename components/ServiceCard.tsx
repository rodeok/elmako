import Image from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
}

export default function ServiceCard({
    title,
    description,
    image,
}: ServiceCardProps) {
    return (
        <div className="relative rounded-3xl overflow-hidden group h-[380px]">
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Text Overlay */}
            <div className="absolute top-6 left-6 right-6 bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white">
                <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                    {title}
                </h3>
                <p
                    className="text-sm text-gray-200"
                    style={{ fontFamily: '"Mona Sans", sans-serif' }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
