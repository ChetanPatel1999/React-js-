import { FiSearch } from "react-icons/fi";
import { WiDaySunny } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setweatherData] = useState(true)
  const [title, settitle] = useState("")
  const search = async (city) => {
    try {
      if (city == "") {
        alert("please enter city");
        return
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log(response)
      if (!response.ok) {
        alert("invalid city name")
        return;
      }
      setweatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: data.weather[0].icon
      })
    }
    catch (error) {
      setweatherData(false);
      console.log("url is wrong");
    }
  }
  useEffect(() => {
    search("London");
  }, [])

  const imageURL =
    `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

  return (
    <div className="min-h-screen bg-[#e6def7] flex justify-center items-center">
      <div className="w-[320px] rounded-2xl bg-linear-to-b from-[#5b1ee8] to-[#243b8f] p-7 shadow-2xl">

        {/* Search */}
        <div className="flex gap-2">
          <input
            onChange={evt => settitle(evt.target.value)}
            type="text"
            placeholder="Search"
            className="flex-1 rounded-full px-5 py-3 outline-none text-gray-700 bg-white"
            value={title}
          />

          <button
            onClick={() => {
              search(title);
              settitle("")
            }}
            className="w-12 h-12 rounded-full bg-white p-3 flex justify-center items-center hover:bg-gray-100">
            <FiSearch className="text-xl text-gray-700" />
          </button>
        </div>

        {/* Weather Icon */}
        {weatherData ? <>
          <div className="flex justify-center mt-10">
            <img className="" src={imageURL} />
          </div>

          {/* Temperature */}
          <h1 className="text-center text-white text-6xl font-light mt-3">
            {weatherData.temperature}°C
          </h1>

          {/* City */}
          <h2 className="text-center text-white text-4xl font-light mt-2">
            {weatherData.location}
          </h2>

          {/* Bottom Info */}
          <div className="flex justify-between mt-14">

            <div className="flex items-center gap-3">
              <WiHumidity className="text-white text-4xl" />

              <div className="text-white">
                <h3 className="text-xl">{weatherData.humidity}%</h3>
                <p className="text-sm">Humidity</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaWind className="text-white text-2xl" />

              <div className="text-white">
                <h3 className="text-xl">{weatherData.windSpeed} Km/h</h3>
                <p className="text-sm">Wind Speed</p>
              </div>
            </div>

          </div>

        </> : <></>}
      </div>
    </div>
  );
}
export default App;