"use client";

import { SetStateAction, useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, Snowflake, MapPin, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const apiKey = "8dfc2c49504af46c2b3f2c9286a198c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

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
      if (data.cod === 200) {
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main,
        });
        setDisplayCity(data.name);
      } else {
        console.error("City not found");
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
        // 👇 Handle denied permission or errors gracefully
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

  const getIcon = (condition: string) => {
    switch (condition) {
      case "Clear":
        return <Sun className="w-5 h-5" />;
      case "Rain":
      case "Drizzle":
        return <CloudRain className="w-5 h-5" />;
      case "Snow":
        return <Snowflake className="w-5 h-5" />;
      case "Clouds":
        return <Cloud className="w-5 h-5" />;
      default:
        return <Cloud className="w-5 h-5" />; // 👈 Default icon
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1">
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : weather ? (
            <>
              {getIcon(weather.condition)}
              <span>{Math.round(weather.temp)}°C</span>
            </>
          ) : (
            <>
              <Cloud className="w-5 h-5" /> {/* 👈 default icon if no location */}
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2">
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
          <DropdownMenuItem
            onClick={getWeatherByLocation}
            className="cursor-pointer"
          >
            📍 Use My Location
          </DropdownMenuItem>
          <div className="text-xs text-muted-foreground px-1">
            {displayCity}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
