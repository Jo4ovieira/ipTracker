link = "http://ip-api.com/json/"
function getIp() {
    const ip = $('#ip').val()
    link = "http://ip-api.com/json/"+ip
    $.getJSON(link, function(data){
        $('#ip').prop("value", data.query);
        $('#isp').text(data.isp);
        $('#pais').text(data.country);
        $('#estado').text(data.regionName);
        $('#cidade').text(data.city);
        $('#status').text(data.status);
        $('#cep').text(data.zip);
        $('#map').attr("src", "https://www.google.com/maps?q="+data.lat+","+data.lon+"&output=embed");
    });
}
$.getJSON(link, function(data){
    $('#ip').prop("value", data.query);
    $('#isp').text(data.isp);
    $('#pais').text(data.country);
    $('#estado').text(data.regionName);
    $('#cidade').text(data.city);
    $('#status').text(data.status);
    $('#cep').text(data.zip);
    $('#map').attr("src", "https://www.google.com/maps?q="+data.lat+","+data.lon+"&output=embed");
    console.log(data)
});

window.onload = function typeWriter() {
    const conteudo = document.querySelector('h2')
    const type = conteudo.innerHTML.split('')

    conteudo.innerHTML = ''

    type.forEach((letra, i) => {
        setTimeout(() => conteudo.innerHTML += letra , 100 * i)
    })
    
}
