import axios from "axios";

const baseUrl =
  process.env.NEXT_PUBLIC_API || "https://monkeyscorebackend.onrender.com";

export default async function Predict(final) {
  return await axios
    .post(`${baseUrl}/predict`, final, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
}
