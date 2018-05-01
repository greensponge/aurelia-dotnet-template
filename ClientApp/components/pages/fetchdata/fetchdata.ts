import { HttpClient } from "aurelia-fetch-client";
import { inject, Aurelia } from "aurelia-framework";
import { appHeaders, fetchCredentials } from "../../../boot";

@inject(HttpClient)
export class Fetchdata {
	constructor(private http: HttpClient, private aurelia: Aurelia) { }

	public forecasts: WeatherForecast[] = [];

	activate() {
		this.ForecastData().then((data: WeatherForecast[]) => { this.forecasts = data; });
	}

	private ForecastData(): Promise<any> {
		const promise = new Promise((resolve, reject) => {
			this.http.fetch('api/weatherforecast', { headers: appHeaders, credentials: fetchCredentials })
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
