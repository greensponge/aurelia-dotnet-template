using System.Collections.Generic;

namespace AureliaDotnetTemplate.Models
{
    public interface ISampleDataRepository
    {
        IEnumerable<WeatherForecast> WeatherForecasts();
    }
}
