

var calendar = document.getElementById("calendar");

calendar.onchange = writeForm


//We get an array of ogiak
function getBreads(){
    fetch('http://localhost:1337/api/erreserba-aukerak?eguna=guztiak')
      .then(response => response.json())
      .then(data =>
      data.data.forEach(writeBreads))
}

function writeBreads(element){
        var bread_div = document.getElementById("eguneroko-ogien-zerrenda")
        var bread = element.attributes
        var bread_title = bread.titulua
        var bread_deskribapena = bread.deskribapena
}



function writeForm(){
  var calendar = $("#calendar");
  var date = calendar.val().split("/")
  var fecha_reserva = new Date(calendar.val())/(1000*60*60*24)
  fecha = Date.now() /(1000*60*60*24)

  if (fecha_reserva - 2 > fecha){
    var izena = $("#izena");
    izena = izena.val()
    
    var telefonoa = $("#telefonoa");
    telefonoa = telefonoa.val()
  
    var email = $("#email");
    email = email.val()
  
    var ul = document.getElementById("form-ul")
    ul.innerHTML =
  
  
  `
      <li>
      <label>INFORMAZIOA <span class="required">*</span>
      </label>
      <input type="text" name="izena" class="field-divided" placeholder="Izena" value=${izena}> 
      <input type="text" name="telefonoa" class="field-divided" placeholder="Telefonoa" value=${telefonoa}>
      <input type="text" name="email" class="field-divided" placeholder="Email" value=${email}>
      <input id="calendar" type="date" name="data" class="field-divided" placeholder="Noizko?" value=${date} /></li>
  
      <li>
      <label>OGIAK</label>
      <hr>
      <select name="field4" class="field-select">
          <option hidden selected>Ogi mota</option>
          <option value="Advertise">Advertise</option>
          <option value="Partnership">Partnership</option>
          <option value="General Question">General</option>
      </select>
      <select name="field4" class="field-select">
          <option hidden selected>Kantitatea</option>
          <option value="Advertise">Advertise</option>
          <option value="Partnership">Partnership</option>
          <option value="General Question">General</option>
      </select>
      <input type="text" placeholder="Kopurua" style="width: 10%">
      <div style="float: right;">
        <i class="fa fa-shopping-cart"></i>
        <input  type="button" value="Gehitu orgatxora">
      </div>      
      </li>
      <li>
          <label>GOZOAK</label>
          <hr>
          <select name="field4" class="field-select">
          <option hidden selected>Gozoa</option>
  
          <option value="Advertise">Advertise</option>
          <option value="Partnership">Partnership</option>
          <option value="General Question">General</option>
          </select>
          <select name="field4" class="field-select">
          <option hidden selected>Kantitatea</option>
          <option value="Advertise">Advertise</option>
          <option value="Partnership">Partnership</option>
          <option value="General Question">General</option>
          </select>
          2,5€
          <div style="float: right;">
            <i class="fa fa-shopping-cart"></i>
            <input  type="button" value="Gehitu orgatxora">
          </div>
          
  
      </li>
        <li id="beste_batzuk">
          <label>BESTE BATZUK </label>
          <hr>
            
            <div style="margin-top: 10px;">
                <select name="field4" class="field-select">
                  <option hidden selected>Produktuak</option>
  
                  <option value="Advertise">Advertise</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Question">General</option>
              </select>
                <select name="field4" class="field-select">
                  <option hidden selected>Kantitatea</option>
    
                  <option value="Advertise">Advertise</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Question">General</option>
              </select>
                19.3€
  
              <div style="float: right;">
                <i class="fa fa-shopping-cart"></i>
                <input  type="button" value="Gehitu orgatxora">
              </div>            
            </div>
  
      </li>
      <li>
          <label>OHARRAK </label>
          <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
      </li>
  
      <label style="margin-top: 30px; text-align: center;"><i class="fa fa-shopping-cart" aria-hidden="true"></i>   NIRE ORGATXOA </label>
      <hr>
  
      <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <p>Txuria</p>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <p>1kg</p>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
   
                <p><b>1,2€</b></p>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <input type="button" value=" - Kendu erreserbatik">
                </div>
  
  
      </div>
      <li id="prezioa-guztira" style="text-align: center;">
          <p style="font-size: 20px;">GUZTIRA: 23€</p>
          <input type="submit" value="ERRESERBATU ETA ORDAINDU" />
      </li>
  </ul>
  `
  }
  else{
    alert("Erreserbak gutxienez bi eguneko aurrerapenarekin egin behar dira. Sentitzen da eragozpena.")
  }
  
}