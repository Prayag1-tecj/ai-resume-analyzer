export default function AnalysisHistory({

  analyses

}) {

  return (

    <div className="bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-bold mb-4">

        Recent Analyses

      </h2>

      <table className="w-full">

        <thead>

          <tr>

            <th className="text-left">
              Score
            </th>

            <th className="text-left">
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {analyses.map(
            (item, index) => (

              <tr
                key={index}
                onClick={() =>
                  setSelectedAnalysis(item)
                }
                className="
  cursor-pointer
  border-b
  hover:bg-gray-50
  "
              >

                <td>{item.score}</td>

                <td>

                  {new Date(
                    item.created_at
                  ).toLocaleDateString()}

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}