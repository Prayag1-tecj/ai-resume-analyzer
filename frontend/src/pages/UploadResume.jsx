import { useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";

export default function UploadResume() {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadResume = async () => {

    if (!file) {

      alert("Please select a resume");

      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append(
        "resume",
        file
      );

      const res = await api.post(
        "/resume/upload/",
        formData
      );

      setResult(
        res.data.result
      );

    } catch (error) {

      console.error(
        "FULL ERROR:",
        error
      );

      alert(
        "Upload Failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Upload Resume
        </h1>

        <div
          className="
  bg-white
  border-2
  border-dashed
  border-gray-300
  rounded-xl
  p-10
  text-center
  mb-6
  "
        >

          <input
            type="file"
            accept=".pdf"
            id="resume-upload"
            className="hidden"
            onChange={(e) =>
              setFile(
                e.target.files[0]
              )
            }
          />

          <label
            htmlFor="resume-upload"
            className="
    cursor-pointer
    text-blue-600
    font-medium
    "
          >

            Click to Upload PDF

          </label>

          <p className="text-gray-500 mt-2">
            PDF files only
          </p>

        </div>
        {file && (

          <div
            className="
    bg-green-50
    border
    border-green-200
    p-4
    rounded-lg
    mb-6
    "
          >

            Selected File:

            <span className="font-semibold ml-2">

              {file.name}

            </span>

          </div>

        )}



        <button
          onClick={uploadResume}
          disabled={loading}
          className="
bg-blue-600
hover:bg-blue-700
text-white
px-6
py-3
rounded-lg
disabled:bg-gray-400
"
        >

          {loading
            ? "Analyzing Resume..."
            : "Analyze"}

        </button>

        {loading && (

          <div className="mt-4">

            <p className="text-blue-600 font-medium">

              ⏳ AI is analyzing your resume...

            </p>

          </div>

        )}

        {result && (

          <div className="mt-8 bg-white p-6 rounded shadow">

            <h2 className="text-2xl font-bold mb-4">
              Resume Score: {result.score}
            </h2>

            <div className="mb-4">

              <h3 className="font-bold mb-2">
                Strengths
              </h3>

              <ul className="space-y-2">

                {result.strengths.map((item, index) => (

                  <li key={index}>
                    ✓ {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="mb-4">

              <h3 className="font-bold mb-2">
                Weaknesses
              </h3>

              <ul className="space-y-2">

                {result.weaknesses.map((item, index) => (

                  <li key={index}>
                    ✗ {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="mb-4">

              <h3 className="font-bold mb-2">
                Recommendations
              </h3>

              <ul className="space-y-2">

                {result.recommendations.map((item, index) => (

                  <li key={index}>
                    ➜ {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}