function getWeather() {
    const location = document.getElementById("locationInput").value;
    const apiKey = "3595c7ec9dd446a29e5124456250605";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;
        document.getElementById("weatherResult").innerHTML = 
          `🌡️ Temperature in <b>${location}</b>: ${temperature}°C <br> ☁️ Condition: ${condition}`;
      })
      .catch(error => {
        document.getElementById("weatherResult").innerHTML = 
          `<span style="color: yellow;">❌ ${error.message}</span>`;
      });
  }
  