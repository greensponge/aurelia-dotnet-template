import { HttpClient } from "aurelia-fetch-client";
import { autoinject } from "aurelia-framework";
import { fetchCredentials } from "../../../boot";

@autoinject
export class Fetchdata {
	constructor(private http: HttpClient) { }

	public forecasts: WeatherForecast[] = [];

	activate() {
		this.ForecastData().then((data: WeatherForecast[]) => { this.forecasts = data; });
	}

	private ForecastData(): Promise<any> {
		const promise = new Promise((resolve, reject) => {
			this.http.fetch('api/weatherforecast', { credentials: fetchCredentials })
				.then((response): any => response.json())
				.then(data => {
					return resolve(data);
				}).catch(err => reject(err));
		});
		return promise;
	}
}

interface WeatherForecast {
	dateFormatted: string;
	temperatureC: number;
	temperatureF: number;
	summary: string;
}
