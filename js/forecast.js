const KEY = '96b947a45d33d7dc1c49af3203966408'
// bu mening kalitim. Agar o'zingiz olsangiz va ishlamasa buni ishlating.
// Agar ishlamay qolsa unda 1 soatda so'rovlar soni limitdan oshib ketgan bo'ladi.
// Aloqa: Telegram => @akror_web
// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=96b947a45d33d7dc1c49af3203966408 
// request get data
let getData = async (city) => {
    let base = "https://api.openweathermap.org/data/2.5/weather";
    let query = `?q=${city}&units=metric&appid=${KEY}`;
    loader(true);
    let req = await fetch(base + query);
    let data = await req.json();
    loader(false);
    return data;
};


 
