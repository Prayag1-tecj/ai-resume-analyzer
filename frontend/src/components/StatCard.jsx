export default function StatCard({

  title,
  value

}) {

  return (

    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      hover:shadow-xl
      hover:-translate-y-1
      transition
      duration-300
      "
    >

      <p
        className="
        text-gray-500
        text-sm
        font-medium
        "
      >
        {title}
      </p>

      <h2
        className="
        text-5xl
        font-bold
        mt-4
        text-slate-900
        "
      >
        {value}
      </h2>

    </div>

  );
}