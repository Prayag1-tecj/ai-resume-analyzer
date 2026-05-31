import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ScoreChart({ scores }) {

  const chartData = scores.map(
    (score, index) => ({
      attempt: index + 1,
      score: score
    })
  );

  return (

    <div
      className="
      bg-white
      p-8
      rounded-2xl
      shadow-md
      "
    >

      <h2 className="text-2xl font-bold mb-6">
        📈 Score Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="attempt" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            strokeWidth={3}
            dot={{ r: 5 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}