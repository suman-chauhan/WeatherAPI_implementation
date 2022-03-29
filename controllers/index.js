import WeatherInput from "../modules/wether.js";
import axios from "axios";

export const getData = async (req, res) => {
  const response = await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=pune&appid=a10a3709eb4e41732a065540246ccda7`
    )
    .catch((error) => {
      console.log("error", error);
    });
  const data = response.data;
  let date = new Date();
  date = date.getDate();
  var flag = true;
  for (let i = 2; i <= date - 1; i++)
    if (date % i == 0) {
      flag = false;
      return res.send({
        message: "Date is not prime so you can’t request the data",
      });
    }
  if (flag == true) {
    let weather = await new WeatherInput({ ...data, weather: data });
    await weather.save();
    res.status(201).json(weather);
  } else
    return res.send({
      message: "Date is not prime so you can’t request the data",
    });
};
