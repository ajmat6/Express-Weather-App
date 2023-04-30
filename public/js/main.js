const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitButton = document.getElementById('submitButton');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(e) => {
    e.preventDefault();
    let cityValue = cityName.value;

    // Below if statement is used for the situation when someone tries to fetch weather without entering any city name.
    if(cityValue === "")
    {
        city_name.innerText = "Please Enter Some City Name Before you Search!";
    }
    
    else
    {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=a38f15cfb7f5a0965eb96f7804888bea`;
            //below means jab tak fetch url ki madad se ham api se data ko fetch karni ki koshish kar rahe in the form of json tab tak wait kro (await) or jaha await waha vo function async(so that's why in pair async-await).
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            //making an array of the response:
            const arrData = [data];

            city_name.innerText =  `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            //showing clouds, clear and sunny temp_status:
            const tempmood = arrData[0].weather[0].main;
            if(tempmood == "Clouds")
            {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>"
            }

            else if(tempmood == "Clear")
            {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            }

            else if(tempmood == "Rain")
            {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be;'></i>"
            }

            else
            {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be;'></i>"
            }
        }catch{
            //Error to show when user enter wrong/unknown city name:
            city_name.innerText = "Please Enter The City Name Properly";
            temp.innerText = "";
            temp_status.innerText = "";
        }

    }
}


submitButton.addEventListener('click', getInfo);