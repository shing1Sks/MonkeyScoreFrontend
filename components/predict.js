import axios from "axios";

export default async function Predict(final) {
  return await axios
    .post(`${process.env.NEXT_PUBLIC_PATH}/predict`, final, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);
}