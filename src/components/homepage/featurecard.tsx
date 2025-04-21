export default function FeatureCard({ title, description, image }: { title: string; description: string; image: string }) {
    return (
        <div className="flex flex-col gap-4 w-80 h-96 bg-white shadow-lg rounded-lg p-6">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        </div>
    );
    }