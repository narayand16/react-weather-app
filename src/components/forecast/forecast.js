import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";
import { getWeatherDetails, WEEK_DAYS, dayOfWeek } from "../../util/util";

const Forecast = ({ data }) => {
  const forecastDays = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfWeek)
  );
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data &&
          data.list.splice(0, 7).map((item, index) => {
            return (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="daily-item">
                      <img
                        alt="weather"
                        className="icon-small"
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <label className="day">{forecastDays[index]}</label>
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                      <label className="min-max">
                        {Math.round(item.main.temp_min)}°C /
                        {Math.round(item.main.temp_max)}°C
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="daily-details-grid">
                    {item &&
                      getWeatherDetails(item).map((weatherData, index) => (
                        <div className="daily-details-grid-item" key={index}>
                          <label>{weatherData.label}</label>
                          <label>{weatherData.value}</label>
                        </div>
                      ))}
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
      </Accordion>
    </>
  );
};

export default Forecast;
