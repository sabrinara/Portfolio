"use client";

import { SetStateAction, useEffect, useState } from "react";
import {
  Cloud,
  Sun,
  CloudRain,
  Snowflake,
  MapPin,
  Loader2,
  CloudFog,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const apiKey = "8dfc2c49504af46c2b3f2c9286a198c4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

type WeatherData = {
  temp: number;
  condition: string;
};

export default function WeatherWidget() {
  const [city, setCity] = useState<string>("");
  const [displayCity, setDisplayCity] = useState<string>("Your location");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getWeatherByCity = async (cityName: string) => {
    if (!cityName) return;
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}${cityName}&appid=${apiKey}`);
      const data = await res.json();
      if (data.cod === 200 && data.main && data.weather && data.weather.length > 0) {
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main,
        });
        setDisplayCity(data.name || "Unknown");
      } else {
        console.error("City not found or invalid data", data);
        setWeather(null);
        setDisplayCity("Unknown");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
          );
          const data = await res.json();
          setWeather({
            temp: data.main.temp,
            condition: data.weather[0].main,
          });
          setDisplayCity(data.name);
        } catch (err) {
          console.error(err);
          setWeather(null);
          setDisplayCity("Unknown");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error("Location access denied:", err);
        setWeather(null);
        setDisplayCity("Unknown");
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getWeatherByLocation();
  }, []);

  const getIconAndMessage = (condition: string) => {
    switch (condition) {
      case "Clear":
        return {
          icon: <Sun className="w-5 h-5" />,
          message: condition,
        };
      case "Rain":
      case "Drizzle":
        return {
          icon: <CloudRain className="w-5 h-5" />,
          message: condition,
        };
      case "Snow":
        return {
          icon: <Snowflake className="w-5 h-5" />,
          message: condition,
        };
      case "Clouds":
        return {
          icon: <Cloud className="w-5 h-5" />,
          message: condition,
        };
      case "Haze":
        return {
          icon: <CloudFog className="w-5 h-5" />,
          message: condition,
        };
      default:
        return {
          icon: <Cloud className="w-5 h-5" />,
          message: condition,
        };
    }
  };

  const display = weather ? getIconAndMessage(weather.condition) : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex flex-col items-center gap-1 px-3 py-2 bg-transparent border border-text text-text rounded-md hover:opacity-90 hover:bg-secondary hover:text-buttontext transition">
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : display ? (
            <>
              <div className="flex justify-center items-center gap-2">  {display.icon}
                <span className="text-sm">{Math.round(weather!.temp)}°C</span>
                <span className="hidden md:flex text-xs">
                  {display.message}
                </span></div>
            </>
          ) : (
            <Cloud className="w-5 h-5 text-gray-400" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52 p-2">
        <div className="flex flex-col gap-2">
          <Input
            placeholder="Search city..."
            value={city}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setCity(e.target.value)
            }
            className="text-sm"
          />
          <Button
            size="sm"
            onClick={() => getWeatherByCity(city)}
            disabled={loading || !city}
          >
            Search
          </Button>
          <DropdownMenuItem onClick={getWeatherByLocation}>
            📍 Use My Location
          </DropdownMenuItem>
          <div className="text-sm text-center text-muted-foreground px-1">
            {displayCity}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
