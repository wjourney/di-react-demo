// 定义天气数据的结构
export interface WeatherData {
    city: string;
    temperature: number; // 摄氏度
    condition: 'Sunny' | 'Cloudy' | 'Rainy';
}

// 定义天气服务的接口（能力）
export interface IWeatherService {
    getWeatherFor(city: string): Promise<WeatherData>;
}