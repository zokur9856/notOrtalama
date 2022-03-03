function Hesapla(){
    Sinav1=document.getElementById("Sinav1").value
    Sinav2=document.getElementById("Sinav2").value
    perf=document.getElementById("perf").value
    let ortalama=(Sinav1*1+Sinav2*1+perf*1)/3..toFixed(1)



   if(ortalama>=50){
       document.body.style.backgroundColor="green"
       document.getElementById("sonuc").innerHTML="TEBRİKLER DERSİ GEÇTİNİZ " +ortalama.toFixed(1)
      
   }
   else if(ortalama<=49){
       document.body.backgroundColor="purple"
       document.getElementById("sonuc").innerHTML= "MALESEF KALDINIZ"
       }
    }
