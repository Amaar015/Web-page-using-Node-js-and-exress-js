const submit=document.getElementById('submitbutton');
const cityName=document.getElementById('cityName');
const currentVal=document.getElementById('city_name')
const temp_state=document.getElementById('temp_status');
const temp =document.getElementById('temp');

console.log(currentVal);
const getInfo=async(event)=>{
      event.preventDefault();
      const cityVal=cityName.value;
      if(cityVal===''){
             currentVal.innerHTML=`Please enter city name`;
      }else{
        try{

            // console.log(cityVal);
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=73a5f15e70f49a268b2a9a8b869cdd5d`
            const response=await fetch(url);
            const data=await response.json();    
            const arrData=[data];
            currentVal.innerHTML=`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp.innerHTML=arrData[0].main.temp;
            // temp_state.innerHTML=arrData[0].weather[0].main;
             const tempStatus=arrData[0].weather[0].main;
            if(tempStatus=='Clear'){
                temp_state.innerHTML="<i class='fa-solid fa-sun' style='color: #eccc68;'></i>"
            }
           else if(tempStatus=='Clouds'){
            temp_state.innerHTML="  <i class='fa-solid fa-cloud' style='color:#f1f2f6'></i>"
            }
            else if(tempStatus=='Rain'){
                temp_state.innerHTML="  <i class='fa-solid fa-cloud-rain' style='color:#a4b0be'></i>"
            }else{
                temp_state.innerHTML="  <i class='fa-solid fa-cloud' style='color:#44c3de'></i>"
            }
        }catch{
            currentVal.innerHTML=`Please enter city properly`;
        }
    }
      
}

submit.addEventListener('click',getInfo);