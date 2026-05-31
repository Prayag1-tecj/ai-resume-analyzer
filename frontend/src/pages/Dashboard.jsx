import ScoreChart from "../components/ScoreChart";
import AnalysisHistory from "../components/AnalysisHistory";
import { useEffect, useState } from "react";
import api from "../services/api";
import StatCard from "../components/StatCard";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await api.get(
        "/dashboard/"
      );

      setData(res.data);

    } catch (error) {

      console.error(error);

      if (
        error.response?.status === 401
      ) {

        localStorage.removeItem(
          "token"
        );

        window.location.href =
          "/login";
      }

    }
  };

  if (!data) {

    return (
      <div className="p-10">
        Loading Dashboard...
      </div>
    );
  }

  return (

    <div className="flex flex-col md:flex-row">

      <Sidebar />

      <div
        className="
        flex-1
        p-4
        md:p-8
        bg-gray-100
        min-h-screen
        "
      >

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">

            Track your resume performance
            and improvement over time.

          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

          <StatCard
            title="Uploads"
            value={data.total_uploads}
          />

          <StatCard
            title="Average Score"
            value={data.average_score}
          />

          <StatCard
            title="Best Score"
            value={data.highest_score}
          />

          <StatCard
            title="Latest Score"
            value={data.latest_score}
          />

        </div>

        <div className="mt-8">

          <ScoreChart
            scores={data.recent_scores}
          />

        </div>

        <div className="mt-8">

          <AnalysisHistory
            analyses={data.recent_analyses}
          />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-xl font-bold mb-4">
              Top Strengths
            </h2>

            {data.top_strengths?.map(
              (item, index) => (

                <div
                  key={index}
                  className="
                  bg-green-100
                  text-green-700
                  px-4
                  py-2
                  rounded-lg
                  mb-2
                  "
                >
                  ✓ {item}
                </div>

              )
            )}

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-xl font-bold mb-4">
              Improvement Areas
            </h2>

            {data.improvement_areas?.map(
              (item, index) => (

                <div
                  key={index}
                  className="
                  bg-red-100
                  text-red-700
                  px-4
                  py-2
                  rounded-lg
                  mb-2
                  "
                >
                  {item}
                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>

  );
}