else {
 //chiamiamo il server per effettuare la verifica
fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad', {
 method:'POST'. // O 'GET'
  headers:{
'Content-Type':'application/json'
 },
 body: JSON.stringify({
{nome: "Thundermen", "Anno inzio produzione": 2012, "Anno fine produzione": 2015}
    })
})
 
.then (response =› response.json()) // converte la risposta in JSON
.then (data => console.log (data)) // stampa i dati
.catch((error) =>  { 
  console.error('Errore:', error);
 });
 </script>
