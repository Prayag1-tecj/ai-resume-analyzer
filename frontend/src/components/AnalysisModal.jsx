export default function AnalysisModal({

    analysis,
    onClose

}) {

    if (!analysis) return null;

    return (

        <div
            className="
      fixed
      inset-0
      bg-black/50
      flex
      justify-center
      items-center
      z-50
      "
        >

            <div
                className="
        bg-white
        rounded-xl
        p-8
        w-[700px]
        max-h-[80vh]
        overflow-y-auto
        "
            >

                <div className="flex justify-between mb-6">

                    <h2 className="text-2xl font-bold">

                        Analysis Details

                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-500"
                    >
                        ✕
                    </button>

                </div>

                <div className="mb-6">

                    <span
                        className="
            px-4
            py-2
            rounded-full
            bg-green-100
            text-green-700
            font-bold
            "
                    >
                        Score: {analysis.score}
                    </span>

                </div>

                <div className="mb-6">

                    <h3 className="font-bold mb-2">

                        Strengths

                    </h3>

                    <ul>

                        {analysis.strengths.map(
                            (item, index) => (

                                <li key={index}>
                                    ✓ {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>

                <div className="mb-6">

                    <h3 className="font-bold mb-2">

                        Weaknesses

                    </h3>

                    <ul>

                        {analysis.weaknesses.map(
                            (item, index) => (

                                <li key={index}>
                                    ✗ {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>

                <div>

                    <h3 className="font-bold mb-2">

                        Recommendations

                    </h3>

                    <ul>

                        {analysis.recommendations.map(
                            (item, index) => (

                                <li key={index}>
                                    ➜ {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>

            </div>

        </div>
    );
}