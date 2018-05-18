using System;
using System.Collections.Generic;
using System.Linq;

namespace AureliaDotnetTemplate.Models
{
    public class SampleDataRepository : ISampleDataRepository
    {
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            string[] Summaries = new[]{
                "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
            };

            var rng = new Random();

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }
    }
}
