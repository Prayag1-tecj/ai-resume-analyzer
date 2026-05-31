import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import AnalysisModal from "../components/AnalysisModal";
import api from "../services/api";

export default function History() {

  const [analyses, setAnalyses] = useState([]);
  const [selectedAnalysis, setSelectedAnalysis] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {

    try {

      const res = await api.get(
        "/resume/history/"
      );

      setAnalyses(res.data);

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <div className="flex flex-col md:flex-row">

      <Sidebar />

      <div className="flex-1 p-4 md:p-8 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
          Analysis History
        </h1>

        <div className="bg-white rounded-xl shadow p-6">

          {analyses.length === 0 ? (

            <div className="text-center py-10 text-gray-500">
              <div className="text-center py-10">

                <h2 className="text-xl font-semibold">

                  No analyses yet

                </h2>

                <p className="text-gray-500 mt-2">

                  Upload your first resume
                  to start tracking progress.

                </p>

              </div>
            </div>

          ) : (
              <div className="overflow-x-auto">
            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-3">
                    Score
                  </th>

                  <th className="text-left py-3">
                    Date
                  </th>

                </tr>

              </thead>

              <tbody>

                {analyses.map((item, index) => (

                  <tr
                    key={index}
                    onClick={() =>
                      setSelectedAnalysis(item)
                    }
                    className="
                              cursor-pointer
                              border-b
                              hover:bg-blue-50
                              transition
                              duration-200
                            "
                  >

                    <td className="py-4">

                      <span
                        className={`
      px-3
      py-1
      rounded-full
      font-semibold

      ${item.score >= 85
                            ? "bg-green-100 text-green-700"
                            : item.score >= 70
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }
    `}
                      >
                        {item.score}
                      </span>

                    </td>

                    <td className="py-4">

                      {new Date(
                        item.created_at
                      ).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        }
                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>
            </div>

          )}

        </div>

      </div>

      <AnalysisModal
        analysis={selectedAnalysis}
        onClose={() =>
          setSelectedAnalysis(null)
        }
      />

    </div>
  );
}