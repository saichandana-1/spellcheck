
const api_url = "https://api.textgears.com/suggest?key=SDfSVFt0EnWwuz5x&text='text.txt'";
getapi(api_url);
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)};