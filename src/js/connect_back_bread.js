window.onload = function(){
    getBreads()
}

//We get an array of ogiak
function getBreads(){
    fetch('http://localhost:1337/api/ogiak?eguna=guztiak')
      .then(response => response.json())
      .then(data =>
      data.data.forEach(writeBreads))
}

function writeBreads(element){
        var bread_div = document.getElementById("eguneroko-ogien-zerrenda")
        console.log(element.attributes)
        var bread = element.attributes
        var bread_title = bread.titulua
        var bread_deskribapena = bread.deskribapena
        bread_div.innerHTML =
        `
        <div class="ogik">
                <div class="container">
                    <div class="row">
                      <div class="col-md-3 d-flex justify-content-center text-center col-sm-12 d-flex justify-content-center text-center col-xs-12 d-flex justify-content-center text-center">
                        <img clas="img-responsive" src="img/ogik/txuriBorobila.png" alt="" style="max-width: 100%">
                      </div>
                      <div class="col-md-9 d-flex justify-content-center text-justify col-sm-12 d-flex justify-content-center text-center col-xs-12 d-flex justify-content-center text-center">
                        <h2 style="text-align: center">${bread_title}</h2>
                        <p>
                            ${bread_deskribapena}
                        </p>
                      </div>
                    </div>
                </div>
            </div>

        <hr>
        `
}