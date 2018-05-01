using System.Collections.Generic;
using AureliaDotnetTemplate.Models;
using Microsoft.AspNetCore.Mvc;

namespace AureliaDotnetTemplate.Controllers
{
    [Produces("application/json")]
    public class SampleDataController : Controller
    {
        public SampleDataController(ISampleDataRepository sampleData)
        {
            SampleDataItem = sampleData;
        }
        public ISampleDataRepository SampleDataItem { get; set; }

        [HttpGet("api/weatherforecast")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            return SampleDataItem.WeatherForecasts();
        }
    }
}
