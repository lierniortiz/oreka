window.onload = function(){
    getGozoak()
}

//We get an array of ogiak
function getGozoak(){
    fetch('http://localhost:1337/api/gozoak?populate=*')
      .then(response => response.json())
      .then(data =>
      data.data.forEach(writeGozoak))
}

function writeGozoak(element){
        var bread_div = document.getElementById("gozoak")
        var gozoa = element.attributes
        var gozoa_title = gozoa.titulua
        var gozoa_deskribapena = gozoa.deskribapena
        var api_url = 'http://localhost:1337'
        var img_url = element.attributes.irudia.data[0].attributes.url
        img_url = api_url  + img_url
        bread_div.innerHTML +=
        `
        <   <div class="ogik">
            <div class="container">
                <div class="row">
                  <div class="col-md-3 d-flex justify-content-center text-justify col-sm-12 d-flex justify-content-center text-justify col-xs-12 d-flex justify-content-center text-justify">
                        <img clas="img-responsive" src=${img_url} alt="" style="max-width: 100%; border-radius: 50%;">
                  </div>
                  <div class="col-md-9 d-flex justify-content-center text-justify col-sm-12 d-flex justify-content-center text-justify col-xs-12 d-flex justify-content-center text-justify">
                    <h2 style="text-align: center">${gozoa_title}</h2>
                    <p>
                        ${gozoa_deskribapena}
                  </div>
                </div>
            </div>
        </div>

        <hr>
        `
}