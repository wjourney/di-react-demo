
import { injectable } from "inversify";
import { IWeatherService, WeatherData } from "./interfaces";

// 工人A：模拟服务，用于开发和测试
@injectable()
export class MockWeatherService implements IWeatherService {
    public async getWeatherFor(city: string): Promise<WeatherData> {
        console.log(`[Mock] Faking weather data for ${city}...`);
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
            city: city,
            temperature: 25,
            condition: 'Sunny',
        };
    }
}

// 工人B：真实服务，用于生产
@injectable()
export class RealWeatherService implements IWeatherService {
    public async getWeatherFor(city: string): Promise<WeatherData> {
        console.log(`[Real] Fetching real weather data for ${city}...`);
        // 在真实世界中，这里会调用一个真正的天气 API
        // const response = await fetch(`https://api.weather.com?q=${city}`);
        // const data = await response.json();
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
            city: city,
            temperature: 18,
            condition: 'Cloudy',
        };
    }
}