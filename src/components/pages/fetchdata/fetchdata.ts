import { HttpClient } from "aurelia-fetch-client";
import { autoinject } from "aurelia-framework";
import { fetchCredentials, appHeaders } from "../../../boot";

interface WeatherForecast {
	dateFormatted: string;
	temperatureC: number;
	temperatureF: number;
	summary: string;
}

@autoinject
export class Fetchdata {
	constructor(private http: HttpClient) { }

	public forecasts: WeatherForecast[] = [];

	async activate() {
		this.forecasts = await this.ForecastData();
	}

	private async ForecastData(): Promise<WeatherForecast[]> {
		try {
			const response: Response = await this.http.fetch('api/weatherforecast', { credentials: fetchCredentials, headers: appHeaders });
			const body: string = await response.json();
			const weatherForecastData: WeatherForecast[] = JSON.parse(JSON.stringify(body));

			return weatherForecastData;
		} catch (error) {
			console.log(`Something went wrong when fetching the weather forecast: ${error}`);
			return [];
		}
	}
}