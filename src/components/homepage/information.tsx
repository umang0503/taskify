"use client";

export default function Information() {
  const displaycard = [
    {
      title: "Real-time Collaboration",
      description:
        "Work with your team on tasks instantly. Updates reflect live without needing to refresh.",
      image: "/collab.svg",
    },
    {
      title: "Kanban Board View",
      description:
        "Visualize tasks in a drag-and-drop board. Customize stages to match your workflow.",
      image: "/kanban.svg",
    },
    {
      title: "Calendar Integration",
      description:
        "Sync tasks with your calendar. Never miss a deadline or meeting.",
      image: "/calendar.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-10 w-full h-full py-10 px-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Do more with Taskify</h1>
        <p className="text-lg text-white">
          This is a simple information page with features you can customize.
        </p>
      </div>
      <div className="w-full text-center mb-6">
        <p className="text-lg text-white">
          Customize the way you organize with easy integrations, automation, and
          mirroring of your to-dos across multiple locations.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {displaycard.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 w-80 h-96 bg-white shadow-xl rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-t-lg transition-all transform hover:rotate-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
