const weatherAPIkey= '24932cff0d7703f33bdb1c8343b614ab';
const key='ff25966788b10294a1dd3002fe46c7ac';



const rechercher=document.getElementById('submit').addEventListener('click', function(){
    const ville=document.getElementById('ville').value;
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=ff25966788b10294a1dd3002fe46c7ac&units=metric`;

    fetch(api)
    .then(response=>{
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
    })
    .then(data => {
        console.log('Weather data:', data);

        // Afficher les données dans les éléments HTML
        document.getElementById('location').textContent = `Location: ${data.name}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
    })

});
