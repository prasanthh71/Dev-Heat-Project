
      var sum=0;
      var item=0;
      var nofdosa=0;
      function dosaplus(){
        document.getElementById("itemadded").innerHTML="ADDED";
        document.getElementById("dosa").innerHTML="DOSA:&emsp;&emsp;&emsp;"; 
        var dosaprice=49;
        document.getElementById("dosaprice").innerHTML=dosaprice;
        sum=sum+dosaprice; 
        item++;
        nofdosa++;
        document.getElementById("noofitems").innerHTML= item+"items";
        document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
        document.getElementById("nofdosa").innerHTML= nofdosa
        document.getElementById("amount_name").innerHTML="total amount:";
        document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
        var gst=sum*18/100;
        var fa=sum+gst;
        document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
        document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
      }
      function dosaminus(){
        document.getElementById("itemadded").innerHTML="ADDED";
        var dosaprice=49;
        sum=sum-dosaprice; 
        item--;
        nofdosa--;
        document.getElementById("dosa").innerHTML="DOSA:&emsp;&emsp;&emsp;"; 
        document.getElementById("dosaprice").innerHTML=dosaprice;
        if(sum>0 && nofdosa==0){
        document.getElementById("dosa").innerHTML=""; 
        document.getElementById("dosaprice").innerHTML="";
        }
        else if(sum>0 && nofdosa<0){
        document.getElementById("dosa").innerHTML=""; 
        document.getElementById("dosaprice").innerHTML=""; 
        nofdosa++;
        item++;
        sum=sum+dosaprice; 
        }
        else if (sum==0 && nofdosa==0) {
        document.getElementById("dosa").innerHTML=""; 
        document.getElementById("dosaprice").innerHTML="";
        } 
        else if(sum<0 && nofdosa<0){
        document.getElementById("dosa").innerHTML=""; 
        document.getElementById("dosaprice").innerHTML="";
        nofdosa++;
        item++;
        sum=sum+dosaprice;
        }
        document.getElementById("nofdosa").innerHTML=nofdosa;
        document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
        document.getElementById("noofitems").innerHTML= item+"items";
        document.getElementById("amount_name").innerHTML="total amount:";
        document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
        var gst=sum*18/100;
        var fa=sum+gst;
        document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
        document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;

      }
        var nofpuri=0;
        function puriplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("puri").innerHTML="PURI:&emsp;&emsp;&emsp;"; 
            var puriprice=30;
            document.getElementById("puriprice").innerHTML=puriprice;
            sum=sum+puriprice; 
            item++;
            nofpuri++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofpuri").innerHTML= nofpuri
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
        function puriminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var puriprice=30;
            sum=sum-puriprice; 
            item--;
            nofpuri--;
            document.getElementById("puri").innerHTML="PURI:&emsp;&emsp;&emsp;"; 
            document.getElementById("puriprice").innerHTML=puriprice;
            if(sum>0 && nofpuri==0){
            document.getElementById("puri").innerHTML=""; 
            document.getElementById("puriprice").innerHTML="";
            }
            else if(sum>0 && nofpuri<0){
            document.getElementById("puri").innerHTML=""; 
            document.getElementById("puriprice").innerHTML=""; 
            nofpuri++;
            item++;
            sum=sum+puriprice; 
            }
            else if (sum==0 && nofpuri==0) {
            document.getElementById("puri").innerHTML=""; 
            document.getElementById("puriprice").innerHTML="";
            } 
            else if(sum<0 && nofpuri<0){
            document.getElementById("puri").innerHTML=""; 
            document.getElementById("puriprice").innerHTML="";
            nofpuri++;
            item++;
            sum=sum+puriprice;
            }
            document.getElementById("nofpuri").innerHTML=nofpuri;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofidly=0;
        function idlyplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("idly").innerHTML="IDLY:&emsp;&emsp;&emsp;"; 
            var idlyprice=20;
            document.getElementById("idlyprice").innerHTML=idlyprice;
            sum=sum+idlyprice; 
            item++;
            nofidly++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofidly").innerHTML= nofidly
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
        function idlyminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var idlyprice=20;
            sum=sum-idlyprice; 
            item--;
            nofidly--;
            document.getElementById("idly").innerHTML="IDLY:&emsp;&emsp;&emsp;"; 
            document.getElementById("idlyprice").innerHTML=idlyprice;
            if(sum>0 && nofidly==0){
            document.getElementById("idly").innerHTML=""; 
            document.getElementById("idlyprice").innerHTML="";
            }
            else if(sum>0 && nofidly<0){
            document.getElementById("idly").innerHTML=""; 
            document.getElementById("idlyprice").innerHTML=""; 
            nofidly++;
            item++;
            sum=sum+idlyprice; 
            }
            else if (sum==0 && nofidly==0) {
            document.getElementById("idly").innerHTML=""; 
            document.getElementById("idlyprice").innerHTML="";
            } 
            else if(sum<0 && nofidly<0){
            document.getElementById("idly").innerHTML=""; 
            document.getElementById("idlyprice").innerHTML="";
            nofidly++;
            item++;
            sum=sum+idlyprice;
            }
            document.getElementById("nofidly").innerHTML=nofidly;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofbajji=0;
        function bajjiplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("bajji").innerHTML="BAJJI:&emsp;&emsp;&emsp;"; 
            var bajjiprice=40;
            document.getElementById("bajjiprice").innerHTML=bajjiprice;
            sum=sum+bajjiprice; 
            item++;
            nofbajji++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofbajji").innerHTML= nofbajji
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function bajjiminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var bajjiprice=40;
            sum=sum-bajjiprice; 
            item--;
            nofbajji--;
            document.getElementById("bajji").innerHTML="BAJJI:&emsp;&emsp;&emsp;"; 
            document.getElementById("bajjiprice").innerHTML=bajjiprice;
            if(sum>0 && nofbajji==0){
            document.getElementById("bajji").innerHTML=""; 
            document.getElementById("bajjiprice").innerHTML="";
            }
            else if(sum>0 && nofbajji<0){
            document.getElementById("bajji").innerHTML=""; 
            document.getElementById("bajjiprice").innerHTML=""; 
            nofbajji++;
            item++;
            sum=sum+bajjiprice; 
            }
            else if (sum==0 && nofbajji==0) {
            document.getElementById("bajji").innerHTML=""; 
            document.getElementById("bajjiprice").innerHTML="";
            } 
            else if(sum<0 && nofbajji<0){
            document.getElementById("bajji").innerHTML=""; 
            document.getElementById("bajjiprice").innerHTML="";
            nofbajji++;
            item++;
            sum=sum+bajjiprice;
            }
            document.getElementById("nofbajji").innerHTML=nofbajji;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofvadapav=0;
        function vadapavplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("vadapav").innerHTML="VADAPAV:&emsp;&emsp;"; 
            var vadapavprice=30;
            document.getElementById("vadapavprice").innerHTML=vadapavprice;
            sum=sum+vadapavprice; 
            item++;
            nofvadapav++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofvadapav").innerHTML= nofvadapav
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function vadapavminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var vadapavprice=30;
            sum=sum-vadapavprice; 
            item--;
            nofvadapav--;
            document.getElementById("vadapav").innerHTML="VADAPAV:&emsp;&emsp;&emsp;"; 
            document.getElementById("vadapavprice").innerHTML=vadapavprice;
            if(sum>0 && nofvadapav==0){
            document.getElementById("vadapav").innerHTML=""; 
            document.getElementById("vadapavprice").innerHTML="";
            }
            else if(sum>0 && nofvadapav<0){
            document.getElementById("vadapav").innerHTML=""; 
            document.getElementById("vadapavprice").innerHTML=""; 
            nofvadapav++;
            item++;
            sum=sum+vadapavprice; 
            }
            else if (sum==0 && nofvadapav==0) {
            document.getElementById("vadapav").innerHTML=""; 
            document.getElementById("vadapavprice").innerHTML="";
            } 
            else if(sum<0 && nofvadapav<0){
            document.getElementById("vadapav").innerHTML=""; 
            document.getElementById("vadapavprice").innerHTML="";
            nofvadapav++;
            item++;
            sum=sum+vadapavprice;
            }
            document.getElementById("nofvadapav").innerHTML=nofvadapav;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofpavbhaji=0;
        function pavbhajiplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("pavbhaji").innerHTML="PAVBHAJI:&emsp;&emsp;"; 
            var pavbhajiprice=30;
            document.getElementById("pavbhajiprice").innerHTML=pavbhajiprice;
            sum=sum+pavbhajiprice; 
            item++;
            nofpavbhaji++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofpavbhaji").innerHTML= nofpavbhaji
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function pavbhajiminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var pavbhajiprice=30;
            sum=sum-pavbhajiprice; 
            item--;
            nofpavbhaji--;
            document.getElementById("pavbhaji").innerHTML="PAVBHAJI:&emsp;&emsp;&emsp;"; 
            document.getElementById("pavbhajiprice").innerHTML=pavbhajiprice;
            if(sum>0 && nofpavbhaji==0){
            document.getElementById("pavbhaji").innerHTML=""; 
            document.getElementById("pavbhajiprice").innerHTML="";
            }
            else if(sum>0 && nofpavbhaji<0){
            document.getElementById("dosa").innerHTML=""; 
            document.getElementById("dosaprice").innerHTML=""; 
            nofdosa++;
            item++;
            sum=sum+dosaprice; 
            }
            else if (sum==0 && nofpavbhaji==0) {
            document.getElementById("pavbhaji").innerHTML=""; 
            document.getElementById("pavbhajiprice").innerHTML="";
            } 
            else if(sum<0 && nofpavbhaji<0){
            document.getElementById("pavbhaji").innerHTML=""; 
            document.getElementById("pavbhajiprice").innerHTML="";
            nofpavbhaji++;
            item++;
            sum=sum+pavbhajiprice;
            }
            document.getElementById("nofpavbhaji").innerHTML=nofpavbhaji;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofvegfriedrice=0;
        function vegfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("vegfriedrice").innerHTML="VEG FRIED RICE:&emsp;&emsp;"; 
            var vegfriedriceprice=100;
            document.getElementById("vegfriedprice").innerHTML=vegfriedriceprice;
            sum=sum+vegfriedriceprice; 
            item++;
            nofvegfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofvegfriedrice").innerHTML= nofvegfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function vegfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var vegfriedriceprice=30;
            sum=sum-vegfriedriceprice; 
            item--;
            nofvegfriedrice--;
            document.getElementById("vegfriedrice").innerHTML="VEG FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("vegfriedriceprice").innerHTML=vegfriedriceprice;
            if(sum>0 && nofvegfriedrice==0){
            document.getElementById("vegfriedrice").innerHTML=""; 
            document.getElementById("vegfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofvegfriedrice<0){
            document.getElementById("dosa").innerHTML=""; 
            document.getElementById("dosaprice").innerHTML=""; 
            nofdosa++;
            item++;
            sum=sum+dosaprice; 
            }
            else if (sum==0 && nofvegfriedrice==0) {
            document.getElementById("vegfriedrice").innerHTML=""; 
            document.getElementById("vegfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofvegfriedrice<0){
            document.getElementById("vegfriedrice").innerHTML=""; 
            document.getElementById("vegfriedriceprice").innerHTML="";
            nofvegfriedrice++;
            item++;
            sum=sum+vegfriedriceprice;
            }
            document.getElementById("nofvegfriedrice").innerHTML=nofvegfriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofjeerarice=0;
        function jeerariceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("jeerarice").innerHTML="JEERA RICE:&emsp;&emsp;"; 
            var jeerariceprice=110;
            document.getElementById("jeerariceprice").innerHTML=jeerariceprice;
            sum=sum+jeerariceprice; 
            item++;
            nofjeerarice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofjeerarice").innerHTML= nofjeerarice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function jeerariceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var jeerariceprice=30;
            sum=sum-jeerariceprice; 
            item--;
            nofjeerarice--;
            document.getElementById("jeerarice").innerHTML="JEERA RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("jeerariceprice").innerHTML=jeerariceprice;
            if(sum>0 && nofjeerarice==0){
            document.getElementById("jeerarice").innerHTML=""; 
            document.getElementById("jeerariceprice").innerHTML="";
            }
            else if(sum>0 && nofjeerarice<0){
            document.getElementById("dosa").innerHTML=""; 
            document.getElementById("dosaprice").innerHTML=""; 
            nofdosa++;
            item++;
            sum=sum+dosaprice; 
            }
            else if (sum==0 && nofjeerarice==0) {
            document.getElementById("jeerarice").innerHTML=""; 
            document.getElementById("jeerariceprice").innerHTML="";
            } 
            else if(sum<0 && nofjeerarice<0){
            document.getElementById("jeerarice").innerHTML=""; 
            document.getElementById("jeerariceprice").innerHTML="";
            nofjeerarice++;
            item++;
            sum=sum+jeerariceprice;
            }
            document.getElementById("nofjeerarice").innerHTML=nofjeerarice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofgobifriedrice=0;
        function gobifriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("gobifriedrice").innerHTML="GOBI FRIED RICE:&emsp;&emsp;"; 
            var gobifriedriceprice=120;
            document.getElementById("gobifriedriceprice").innerHTML=gobifriedriceprice;
            sum=sum+gobifriedriceprice; 
            item++;
            nofgobifriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofgobifriedrice").innerHTML= nofgobifriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function gobifriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var gobifriedriceprice=120;
            sum=sum-gobifriedriceprice; 
            item--;
            nofgobifriedrice--;
            document.getElementById("gobifriedrice").innerHTML="GOBI FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("gobifriedriceprice").innerHTML=gobifriedriceprice;
            if(sum>0 && nofgobifriedrice==0){
            document.getElementById("gobifriedrice").innerHTML=""; 
            document.getElementById("gobifriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofgobifriedrice<0){
            document.getElementById("gobifriedrice").innerHTML=""; 
            document.getElementById("gobifriedriceprice").innerHTML=""; 
            nofgobifriedrice++;
            item++;
            sum=sum+gobifriedriceprice; 
            }
            else if (sum==0 && nofgobifriedrice==0) {
            document.getElementById("gobifriedrice").innerHTML=""; 
            document.getElementById("gobifriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofgobifriedrice<0){
            document.getElementById("gobifriedrice").innerHTML=""; 
            document.getElementById("gobifriedriceprice").innerHTML="";
            nofgobifriedrice++;
            item++;
            sum=sum+gobifriedriceprice;
            }
            document.getElementById("nofgobifriedrice").innerHTML=nofgobifriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofmushroomfriedrice=0;
        function mushroomfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("mushroomfriedrice").innerHTML="MUSHROOM FRIED RICE:&emsp;&emsp;"; 
            var mushroomfriedriceprice=130;
            document.getElementById("mushroomfriedriceprice").innerHTML=mushroomfriedriceprice;
            sum=sum+mushroomfriedriceprice; 
            item++;
            nofmushroomfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofmushroomfriedrice").innerHTML= nofmushroomfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function mushroomfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var mushroomfriedriceprice=130;
            sum=sum-mushroomfriedriceprice; 
            item--;
            nofmushroomfriedrice--;
            document.getElementById("mushroomfriedrice").innerHTML="MUSHROOM FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("mushroomfriedriceprice").innerHTML=mushroomfriedriceprice;
            if(sum>0 && nofmushroomfriedrice==0){
            document.getElementById("mushroomfriedrice").innerHTML=""; 
            document.getElementById("mushroomfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofmushroomfriedrice<0){
            document.getElementById("mushroomfriedrice").innerHTML=""; 
            document.getElementById("mushroomfriedriceprice").innerHTML=""; 
            nofmushroomfriedrice++;
            item++;
            sum=sum+mushroomfriedriceprice; 
            }
            else if (sum==0 && nofmushroomfriedrice==0) {
            document.getElementById("mushroomfriedrice").innerHTML=""; 
            document.getElementById("mushroomfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofmushroomfriedrice<0){
            document.getElementById("mushroomfriedrice").innerHTML=""; 
            document.getElementById("mushroomfriedriceprice").innerHTML="";
            nofmushroomfriedrice++;
            item++;
            sum=sum+mushroomfriedriceprice;
            }
            document.getElementById("nofmushroomfriedrice").innerHTML=nofmushroomfriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofschezwanfriedrice=0;
        function schezwanfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("schezwanfriedrice").innerHTML="SCHEZWAN FRIED RICE:&emsp;&emsp;"; 
            var schezwanfriedriceprice=120;
            document.getElementById("schezwanprice").innerHTML=schezwanfriedriceprice;
            sum=sum+schezwanfriedriceprice; 
            item++;
            nofschezwanfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofschezwanfriedrice").innerHTML= nofschezwanfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function schezwanfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var schezwanfriedriceprice=130;
            sum=sum-schezwanfriedriceprice; 
            item--;
            nofschezwanfriedrice--;
            document.getElementById("schezwanfriedrice").innerHTML="SCHEZWAN FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("schezwanfriedriceprice").innerHTML=schezwanfriedriceprice;
            if(sum>0 && nofschezwanfriedrice==0){
            document.getElementById("schezwanfriedrice").innerHTML=""; 
            document.getElementById("schezwanfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofschezwanfriedrice<0){
            document.getElementById("schezwanfriedrice").innerHTML=""; 
            document.getElementById("schezwanfriedriceprice").innerHTML=""; 
            nofschezwanfriedrice++;
            item++;
            sum=sum+schezwanfriedriceprice; 
            }
            else if (sum==0 && nofschezwanfriedrice==0) {
            document.getElementById("schezwanfriedrice").innerHTML=""; 
            document.getElementById("schezwanfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofschezwanfriedrice<0){
            document.getElementById("schezwanfriedrice").innerHTML=""; 
            document.getElementById("schezwanfriedriceprice").innerHTML="";
            nofschezwanfriedrice++;
            item++;
            sum=sum+schezwanpricefriedrice;
            }
            document.getElementById("nofschezwan").innerHTML=nofschezwan;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofpaneerfriedrice=0;
        function paneerfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("paneerfriedrice").innerHTML="PANEER FRIED RICE:&emsp;&emsp;"; 
            var paneerfriedriceprice=140;
            document.getElementById("paneerfriedriceprice").innerHTML=paneerfriedriceprice;
            sum=sum+paneerfriedriceprice; 
            item++;
            nofpaneerfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofpaneerfriedrice").innerHTML= nofpaneerfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function paneerfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var paneerfriedriceprice=140;
            sum=sum-paneerfriedriceprice; 
            item--;
            nofpaneerfriedrice--;
            document.getElementById("paneerfriedrice").innerHTML="PANEER FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("paneerfriedriceprice").innerHTML=paneerfriedriceprice;
            if(sum>0 && nofpaneerfriedrice==0){
            document.getElementById("paneerfriedrice").innerHTML=""; 
            document.getElementById("paneerfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofpaneerfriedrice<0){
            document.getElementById("paneerfriedrice").innerHTML=""; 
            document.getElementById("paneerfriedriceprice").innerHTML=""; 
            nofpaneerfriedrice++;
            item++;
            sum=sum+paneerfriedriceprice; 
            }
            else if (sum==0 && nofpaneerfriedrice==0) {
            document.getElementById("paneerfriedrice").innerHTML=""; 
            document.getElementById("paneerfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofpaneerfriedrice<0){
            document.getElementById("paneerfriedrice").innerHTML=""; 
            document.getElementById("paneerfriedriceprice").innerHTML="";
            nofpaneerfriedrice++;
            item++;
            sum=sum+paneerfriedriceprice;
            }
            document.getElementById("nofpaneerfriedrice").innerHTML=nofpaneerfriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofmixedchickenfriedrice=0;
        function mixedchickenfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("mixedchickenfriedrice").innerHTML="MIXED CHICKEN FRIED RICE:&emsp;&emsp;"; 
            var mixedchickenfriedriceprice=180;
            document.getElementById("mixedchickenfriedriceprice").innerHTML=mixedchickenfriedriceprice;
            sum=sum+mixedchickenfriedriceprice; 
            item++;
            nofmixedchickenfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofmixedchickenfriedrice").innerHTML= nofmixedchickenfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function mixedchickenfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var mixedchickenfriedriceprice=180;
            sum=sum-mixedchickenfriedriceprice; 
            item--;
            nofmixedchickenfriedrice--;
            document.getElementById("mixedchickenfriedrice").innerHTML="MIXED CHICKEN FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("mixedchickenfriedriceprice").innerHTML=mixedchickenfriedriceprice;
            if(sum>0 && nofmixedchickenfriedrice==0){
            document.getElementById("mixedchickenfriedrice").innerHTML=""; 
            document.getElementById("mixedchickenfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofmixedchickenfriedrice<0){
            document.getElementById("mixedchickenfriedrice").innerHTML=""; 
            document.getElementById("mixedchickenfriedriceprice").innerHTML=""; 
            nofmixedchickenfriedrice++;
            item++;
            sum=sum+mixedchickenfriedriceprice; 
            }
            else if (sum==0 && nofmixedchickenfriedrice==0) {
            document.getElementById("mixedchickenfriedrice").innerHTML=""; 
            document.getElementById("mixedchickenfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofmixedchickenfriedrice<0){
            document.getElementById("mixedchickenfriedrice").innerHTML=""; 
            document.getElementById("mixedchickenfriedriceprice").innerHTML="";
            nofmixedchickenfriedrice++;
            item++;
            sum=sum+mixedchickenfriedriceprice;
            }
            document.getElementById("nofmixedchickenfriedrice").innerHTML=nofmixedchickenfriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofeggfriedrice=0;
        function eggfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("eggfriedrice").innerHTML="EGG FRIED RICE:&emsp;&emsp;"; 
            var eggfriedriceprice=130;
            document.getElementById("eggfriedriceprice").innerHTML=eggfriedriceprice;
            sum=sum+eggfriedriceprice; 
            item++;
            nofeggfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofeggfriedrice").innerHTML= nofeggfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function eggfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var eggfriedriceprice=130;
            sum=sum-eggfriedriceprice; 
            item--;
            nofeggfriedrice--;
            document.getElementById("eggfriedrice").innerHTML="EGG FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("eggfriedriceprice").innerHTML=eggfriedriceprice;
            if(sum>0 && nofeggfriedrice==0){
            document.getElementById("eggfriedrice").innerHTML=""; 
            document.getElementById("eggfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofeggfriedrice<0){
            document.getElementById("eggfriedrice").innerHTML=""; 
            document.getElementById("eggfriedriceprice").innerHTML=""; 
            nofeggfriedrice++;
            item++;
            sum=sum+eggfriedriceprice; 
            }
            else if (sum==0 && nofeggfriedrice==0) {
            document.getElementById("eggfriedrice").innerHTML=""; 
            document.getElementById("eggfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofeggfriedrice<0){
            document.getElementById("eggfriedrice").innerHTML=""; 
            document.getElementById("eggfriedriceprice").innerHTML="";
            nofeggfriedrice++;
            item++;
            sum=sum+eggfriedriceprice;
            }
            document.getElementById("nofeggfriedrice").innerHTML=nofeggfriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofchickenfriedrice=0;
        function chickenfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("chickenfriedrice").innerHTML="CHICKEN FRIED RICE:&emsp;&emsp;"; 
            var chickenfriedriceprice=160;
            document.getElementById("chickenfriedriceprice").innerHTML=chickenfriedriceprice;
            sum=sum+chickenfriedriceprice; 
            item++;
            nofchickenfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofchickenfriedrice").innerHTML= nofchickenfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function chickenfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var chickenfriedriceprice=160;
            sum=sum-chickenfriedriceprice; 
            item--;
            nofchickenfriedrice--;
            document.getElementById("chickenfriedrice").innerHTML="CHICKEN FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("chickenfriedriceprice").innerHTML=chickenfriedriceprice;
            if(sum>0 && nofchickenfriedrice==0){
            document.getElementById("chickenfriedrice").innerHTML=""; 
            document.getElementById("chickenfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofchickenfriedrice<0){
            document.getElementById("chickenfriedrice").innerHTML=""; 
            document.getElementById("chickenfriedriceprice").innerHTML=""; 
            nofchickenfriedrice++;
            item++;
            sum=sum+chickenfriedriceprice; 
            }
            else if (sum==0 && nofchickenfriedrice==0) {
            document.getElementById("chickenfriedrice").innerHTML=""; 
            document.getElementById("chickenfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofchickenfriedrice<0){
            document.getElementById("chickenfriedrice").innerHTML=""; 
            document.getElementById("chickenfriedriceprice").innerHTML="";
            nofchickenfriedrice++;
            item++;
            sum=sum+chickenfriedriceprice;
            }
            document.getElementById("nofchickenfriedrice").innerHTML=nofchickenfriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;

          }
          var nofschezwanchickenfriedrice=0;
        function schezwanchickenfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("schezwanchickenfriedrice").innerHTML="SCHEZWAN CHICKEN FRIED RICE:&emsp;&emsp;"; 
            var schezwanchickenfriedriceprice=180;
            document.getElementById("schezwanchickenfriedriceprice").innerHTML=schezwanchickenfriedriceprice;
            sum=sum+schezwanchickenfriedriceprice; 
            item++;
            nofschezwanchickenfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofschezwanchickenfriedrice").innerHTML= nofschezwanchickenfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function schezwanchickenfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var schezwanchickenfriedriceprice=180;
            sum=sum-schezwanchickenfriedriceprice; 
            item--;
            nofschezwanchickenfriedrice--;
            document.getElementById("schezwanchickenfriedrice").innerHTML="SCHEZWAN CHICKEN FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("schezwanchickenfriedriceprice").innerHTML=schezwanchickenfriedriceprice;
            if(sum>0 && nofschezwanchickenfriedrice==0){
            document.getElementById("schezwanchickenfriedrice").innerHTML=""; 
            document.getElementById("schezwanchickenfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofschezwanchickenfriedrice<0){
            document.getElementById("schezwanchickenfriedrice").innerHTML=""; 
            document.getElementById("schezwanchickenfriedriceprice").innerHTML=""; 
            nofschezwanchickenfriedrice++;
            item++;
            sum=sum+schezwanchickenfriedriceprice; 
            }
            else if (sum==0 && nofschezwanchickenfriedrice==0) {
            document.getElementById("schezwanchickenfriedrice").innerHTML=""; 
            document.getElementById("schezwanchickenfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofschezwanchickenfriedrice<0){
            document.getElementById("schezwanchickenfriedrice").innerHTML=""; 
            document.getElementById("schezwanchickenfriedriceprice").innerHTML="";
            nofschezwanchickenfriedrice++;
            item++;
            sum=sum+schezwanchickenfriedriceprice;
            }
            document.getElementById("nofschezwanchickenfriedrice").innerHTML=nofschezwanchickenfriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofmuttonfriedrice=0;
        function muttonfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("muttonfriedrice").innerHTML="MUTTON FRIED RICE:&emsp;&emsp;"; 
            var muttonfriedriceprice=220;
            document.getElementById("muttonfriedriceprice").innerHTML=muttonfriedriceprice;
            sum=sum+muttonfriedriceprice; 
            item++;
            nofmuttonfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofmuttonfriedrice").innerHTML= nofmuttonfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function muttonfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var muttonfriedriceprice=220;
            sum=sum-muttonfriedriceprice; 
            item--;
            nofmuttonfriedrice--;
            document.getElementById("muttonfriedrice").innerHTML="MUTTON FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("muttonfriedriceprice").innerHTML=muttonfriedriceprice;
            if(sum>0 && nofmuttonfriedrice==0){
            document.getElementById("muttonfriedrice").innerHTML=""; 
            document.getElementById("muttonfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofmuttonfriedrice<0){
            document.getElementById("muttonfriedrice").innerHTML=""; 
            document.getElementById("muttonfriedriceprice").innerHTML=""; 
            nofmuttonfriedrice++;
            item++;
            sum=sum+muttonfriedriceprice; 
            }
            else if (sum==0 && nofmuttonfriedrice==0) {
            document.getElementById("muttonfriedrice").innerHTML=""; 
            document.getElementById("muttonfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofmuttonfriedrice<0){
            document.getElementById("muttonfriedrice").innerHTML=""; 
            document.getElementById("muttonfriedriceprice").innerHTML="";
            nofmuttonfriedrice++;
            item++;
            sum=sum+muttonfriedriceprice;
            }
            document.getElementById("nofmuttonfriedrice").innerHTML=nofmuttonfriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofmixnonvegfriedrice=0;
        function mixnonvegfriedriceplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("mixnonvegfriedrice").innerHTML="MIX-NON VEG FRIED RICE:&emsp;&emsp;"; 
            var mixnonvegfriedriceprice=250;
            document.getElementById("mixnonvegfriedriceprice").innerHTML=mixnonvegfriedriceprice;
            sum=sum+mixnonvegfriedriceprice; 
            item++;
            nofmixnonvegfriedrice++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofmixnonvegfriedrice").innerHTML= nofmixnonvegfriedrice
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function mixnonvegfriedriceminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var mixnonvegfriedriceprice=250;
            sum=sum-mixnonvegfriedriceprice; 
            item--;
            nofmixnonvegfriedrice--;
            document.getElementById("mixnonvegfriedrice").innerHTML="MIX-NON VEG FRIED RICE:&emsp;&emsp;&emsp;"; 
            document.getElementById("mixnonvegfriedriceprice").innerHTML=mixnonvegfriedriceprice;
            if(sum>0 && nofmixnonvegfriedrice==0){
            document.getElementById("mixnonvegfriedrice").innerHTML=""; 
            document.getElementById("mixnonvegfriedriceprice").innerHTML="";
            }
            else if(sum>0 && nofmixnonvegfriedrice<0){
            document.getElementById("mixnonvegfriedrice").innerHTML=""; 
            document.getElementById("mixnonvegfriedriceprice").innerHTML=""; 
            nofmixnonvegfriedrice++;
            item++;
            sum=sum+mixnonvegfriedriceprice; 
            }
            else if (sum==0 && nofmixnonvegfriedrice==0) {
            document.getElementById("mixnonvegfriedrice").innerHTML=""; 
            document.getElementById("mixnonvegfriedriceprice").innerHTML="";
            } 
            else if(sum<0 && nofmixnonvegfriedrice<0){
            document.getElementById("mixnonvegfriedrice").innerHTML=""; 
            document.getElementById("mixnonvegfriedriceprice").innerHTML="";
            nofmixnonvegfriedrice++;
            item++;
            sum=sum+mixnonvegfriedriceprice;
            }
            document.getElementById("nofmixnonvegfriedrice").innerHTML=nofmixnonvegfriedrice;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofpaneertikka=0;
        function paneertikkaplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("paneertikka").innerHTML="PANEER TIKKA:&emsp;&emsp;"; 
            var paneertikkaprice=150;
            document.getElementById("paneertikkaprice").innerHTML=paneertikkaprice;
            sum=sum+paneertikkaprice; 
            item++;
            nofpaneertikka++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofpaneertikka").innerHTML= nofpaneertikka
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function paneertikkaminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var paneertikkaprice=150;
            sum=sum-paneertikkaprice; 
            item--;
            nofpaneertikka--;
            document.getElementById("paneertikka").innerHTML="PANEER TIKKA:&emsp;&emsp;&emsp;"; 
            document.getElementById("paneertikkaprice").innerHTML=paneertikkaprice;
            if(sum>0 && nofpaneertikka==0){
            document.getElementById("paneertikka").innerHTML=""; 
            document.getElementById("paneertikkaprice").innerHTML="";
            }
            else if(sum>0 && nofpaneertikka<0){
            document.getElementById("paneertikka").innerHTML=""; 
            document.getElementById("paneertikkaprice").innerHTML=""; 
            nofpaneertikka++;
            item++;
            sum=sum+paneertikkaprice; 
            }
            else if (sum==0 && nofpaneertikka==0) {
            document.getElementById("paneertikka").innerHTML=""; 
            document.getElementById("paneertikkaprice").innerHTML="";
            } 
            else if(sum<0 && nofpaneertikka<0){
            document.getElementById("paneertikka").innerHTML=""; 
            document.getElementById("paneertikkaprice").innerHTML="";
            nofpaneertikka++;
            item++;
            sum=sum+paneertikkaprice;
            }
            document.getElementById("nofpaneertikka").innerHTML=nofpaneertikka;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofpaneermalaitikka=0;
        function paneermalaitikkaplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("paneermalaitikka").innerHTML="PANEER MALAI TIKKA:&emsp;&emsp;"; 
            var paneermalaitikkaprice=170;
            document.getElementById("paneermalaitikkaprice").innerHTML=paneermalaitikkaprice;
            sum=sum+paneermalaitikkaprice; 
            item++;
            nofpaneermalaitikka++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofpaneermalaitikka").innerHTML= nofpaneermalaitikka
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function paneermalaitikkaminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var paneermalaitikkaprice=170;
            sum=sum-paneermalaitikkaprice; 
            item--;
            nofpaneermalaitikka--;
            document.getElementById("paneermalaitikka").innerHTML="PANEER MALAI TIKKA:&emsp;&emsp;&emsp;"; 
            document.getElementById("paneermalaitikkaprice").innerHTML=paneermalaitikkaprice;
            if(sum>0 && nofpaneermalaitikka==0){
            document.getElementById("paneermalaitikka").innerHTML=""; 
            document.getElementById("paneermalaitikkaprice").innerHTML="";
            }
            else if(sum>0 && nofpaneertikka<0){
            document.getElementById("paneertikka").innerHTML=""; 
            document.getElementById("paneertikkaprice").innerHTML=""; 
            nofpaneertikka++;
            item++;
            sum=sum+paneertikkaprice; 
            }
            else if (sum==0 && nofpaneermalaitikka==0) {
            document.getElementById("paneermalaitikka").innerHTML=""; 
            document.getElementById("paneermalaitikkaprice").innerHTML="";
            } 
            else if(sum<0 && nofpaneermalaitikka<0){
            document.getElementById("paneermalaitikka").innerHTML=""; 
            document.getElementById("paneermalaitikkaprice").innerHTML="";
            nofpaneermalaitikka++;
            item++;
            sum=sum+paneermalaitikkaprice;
            }
            document.getElementById("nofpaneermalaitikka").innerHTML=nofpaneermalaitikka;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofmushroomtikka=0;
        function mushroomtikkaplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("mushroomtikka").innerHTML="MUSHROOM TIKKA:&emsp;&emsp;"; 
            var mushroomtikkaprice=150;
            document.getElementById("mushroomtikkaprice").innerHTML=mushroomtikkaprice;
            sum=sum+mushroomtikkaprice; 
            item++;
            nofmushroomtikka++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofmushroomtikka").innerHTML= nofmushroomtikka
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function mushroomtikkaminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var mushroomtikkaprice=150;
            sum=sum-mushroomtikkaprice; 
            item--;
            nofmushroomtikka--;
            document.getElementById("mushroomtikka").innerHTML="MUSHROOM TIKKA:&emsp;&emsp;&emsp;"; 
            document.getElementById("mushroomtikkaprice").innerHTML=mushroomtikkaprice;
            if(sum>0 && nofmushroomtikka==0){
            document.getElementById("mushroomtikka").innerHTML=""; 
            document.getElementById("mushroomtikkaprice").innerHTML="";
            }
            else if(sum>0 && nofmushroomtikka<0){
            document.getElementById("mushroomtikka").innerHTML=""; 
            document.getElementById("mushroomtikkaprice").innerHTML=""; 
            nofmushroomtikka++;
            item++;
            sum=sum+mushroomtikkaprice; 
            }
            else if (sum==0 && nofmushroomtikka==0) {
            document.getElementById("mushroomtikka").innerHTML=""; 
            document.getElementById("mushroomtikkaprice").innerHTML="";
            } 
            else if(sum<0 && nofmushroomtikka<0){
            document.getElementById("mushroomtikka").innerHTML=""; 
            document.getElementById("mushroomtikkaprice").innerHTML="";
            nofmushroomtikka++;
            item++;
            sum=sum+mushroomtikkaprice;
            }
            document.getElementById("nofmushroomtikka").innerHTML=nofmushroomtikka;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var noftandoorigobi=0;
        function tandoorigobiplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("tandoorigobi").innerHTML="TANDOORI GOBI:&emsp;&emsp;"; 
            var tandoorigobiprice=150;
            document.getElementById("tandoorigobiprice").innerHTML=tandoorigobiprice;
            sum=sum+tandoorigobiprice; 
            item++;
            noftandoorigobi++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noftandoorigobi").innerHTML= noftandoorigobi
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function tandoorigobiminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var tandoorigobiprice=150;
            sum=sum-tandoorigobiprice; 
            item--;
            noftandoorigobi--;
            document.getElementById("tandoorigobi").innerHTML="TANDOORI GOBI:&emsp;&emsp;&emsp;"; 
            document.getElementById("tandoorigobiprice").innerHTML=tandoorigobiprice;
            if(sum>0 && noftandoorigobi==0){
            document.getElementById("tandoorigobi").innerHTML=""; 
            document.getElementById("tandoorigobiprice").innerHTML="";
            }
            else if(sum>0 && noftandoorigobi<0){
            document.getElementById("tandoorigobi").innerHTML=""; 
            document.getElementById("tandoorigobiprice").innerHTML=""; 
            noftandoorigobi++;
            item++;
            sum=sum+tandoorigobiprice; 
            }
            else if (sum==0 && noftandoorigobi==0) {
            document.getElementById("tandoorigobi").innerHTML=""; 
            document.getElementById("tandoorigobiprice").innerHTML="";
            } 
            else if(sum<0 && noftandoorigobi<0){
            document.getElementById("tandoorigobi").innerHTML=""; 
            document.getElementById("tandoorigobiprice").innerHTML="";
            noftandoorigobi++;
            item++;
            sum=sum+tandoorigobiprice;
            }
            document.getElementById("noftandoorigobi").innerHTML=noftandoorigobi;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofseabeespltikka=0;
        function seabeespltikkaplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("seabeespltikka").innerHTML="SEA BEE SPL TIKKA:&emsp;&emsp;"; 
            var seabeespltikkaprice=200;
            document.getElementById("seabeespltikkaprice").innerHTML=seabeespltikkaprice;
            sum=sum+seabeespltikkaprice; 
            item++;
            nofseabeespltikka++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofseabeespltikka").innerHTML= nofseabeespltikka
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function seabeespltikkaminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var seabeespltikkaprice=200;
            sum=sum-seabeespltikkaprice; 
            item--;
            nofseabeespltikka--;
            document.getElementById("seabeespltikka").innerHTML="SEA BEE SPL TIKKA:&emsp;&emsp;&emsp;"; 
            document.getElementById("seabeespltikkaprice").innerHTML=seabeespltikkaprice;
            if(sum>0 && nofseabeespltikka==0){
            document.getElementById("seabeespltikka").innerHTML=""; 
            document.getElementById("seabeespltikkaprice").innerHTML="";
            }
            else if(sum>0 && nofseabeespltikka<0){
            document.getElementById("seabeespltikka").innerHTML=""; 
            document.getElementById("seabeespltikkaprice").innerHTML=""; 
            nofseabeespltikka++;
            item++;
            sum=sum+seabeespltikkaprice; 
            }
            else if (sum==0 && nofseabeespltikka==0) {
            document.getElementById("seabeespltikka").innerHTML=""; 
            document.getElementById("seabeespltikkaprice").innerHTML="";
            } 
            else if(sum<0 && nofseabeespltikka<0){
            document.getElementById("seabeespltikka").innerHTML=""; 
            document.getElementById("seabeespltikkaprice").innerHTML="";
            nofseabeespltikka++;
            item++;
            sum=sum+seabeespltikkaprice;
            }
            document.getElementById("nofseabeespltikka").innerHTML=nofseabeespltikka;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofgobimanchuria=0;
        function gobimanchuriaplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("gobimanchuria").innerHTML="GOBI MANCHURIA:&emsp;&emsp;"; 
            var gobimanchuriaprice=120;
            document.getElementById("gobimanchuriaprice").innerHTML=gobimanchuriaprice;
            sum=sum+gobimanchuriaprice; 
            item++;
            nofgobimanchuria++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofgobimanchuria").innerHTML= nofgobimanchuria
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function gobimanchuriaminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var gobimanchuriaprice=120;
            sum=sum-gobimanchuriaprice; 
            item--;
            nofgobimanchuria--;
            document.getElementById("gobimanchuria").innerHTML="GOBI MANCHURIA:&emsp;&emsp;&emsp;"; 
            document.getElementById("gobimanchuriaprice").innerHTML=gobimanchuriaprice;
            if(sum>0 && nofgobimanchuria==0){
            document.getElementById("gobimanchuria").innerHTML=""; 
            document.getElementById("gobimanchuriaprice").innerHTML="";
            }
            else if(sum>0 && nofgobimanchuria<0){
            document.getElementById("gobimanchuria").innerHTML=""; 
            document.getElementById("gobimanchuriaprice").innerHTML=""; 
            nofgobimanchuria++;
            item++;
            sum=sum+gobimanchuriaprice; 
            }
            else if (sum==0 && nofgobimanchuria==0) {
            document.getElementById("gobimanchuria").innerHTML=""; 
            document.getElementById("gobimanchuriaprice").innerHTML="";
            } 
            else if(sum<0 && nofgobimanchuria<0){
            document.getElementById("gobimanchuria").innerHTML=""; 
            document.getElementById("gobimanchuriaprice").innerHTML="";
            nofgobimanchuria++;
            item++;
            sum=sum+gobimanchuriaprice;
            }
            document.getElementById("nofgobimanchuria").innerHTML=nofgobimanchuria;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofgobi65=0;
        function gobi65plus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("gobi65").innerHTML="GOBI65:&emsp;&emsp;"; 
            var gobi65price=120;
            document.getElementById("gobi65price").innerHTML=gobi65price;
            sum=sum+gobi65price; 
            item++;
            nofgobi65++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofgobi65").innerHTML= nofgobi65
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function gobi65minus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var gobi65price=120;
            sum=sum-gobi65price; 
            item--;
            nofgobi65--;
            document.getElementById("gobi65").innerHTML="GOBI65:&emsp;&emsp;&emsp;"; 
            document.getElementById("gobi65price").innerHTML=gobi65price;
            if(sum>0 && nofgobi65==0){
            document.getElementById("gobi65").innerHTML=""; 
            document.getElementById("gobi65price").innerHTML="";
            }
            else if(sum>0 && nofgobi65<0){
            document.getElementById("gobi65").innerHTML=""; 
            document.getElementById("gobi65price").innerHTML=""; 
            nofgobi65++;
            item++;
            sum=sum+gobi65price; 
            }
            else if (sum==0 && nofgobi65==0) {
            document.getElementById("gobi65").innerHTML=""; 
            document.getElementById("gobi65price").innerHTML="";
            } 
            else if(sum<0 && nofgobi65<0){
            document.getElementById("gobi65").innerHTML=""; 
            document.getElementById("gobi65price").innerHTML="";
            nofgobi65++;
            item++;
            sum=sum+gobi65price;
            }
            document.getElementById("nofgobi65").innerHTML=nofgobi65;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          var nofchillygobi=0;
        function chillygobiplus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            document.getElementById("chillygobi").innerHTML="CHILLY GOBI:&emsp;&emsp;"; 
            var chillygobiprice=120;
            document.getElementById("chillygobiprice").innerHTML=chillygobiprice;
            sum=sum+chillygobiprice; 
            item++;
            nofchillygobi++;
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("nofchillygobi").innerHTML= nofchillygobi
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function chillygobiminus(){
            document.getElementById("itemadded").innerHTML="ADDED";
            var chillygobiprice=120;
            sum=sum-chillygobiprice; 
            item--;
            nofchillygobi--;
            document.getElementById("chillygobi").innerHTML="CHILLY GOBI:&emsp;&emsp;&emsp;"; 
            document.getElementById("chillygobiprice").innerHTML=chillygobiprice;
            if(sum>0 && nofchillygobi==0){
            document.getElementById("chillygobi").innerHTML=""; 
            document.getElementById("chillygobiprice").innerHTML="";
            }
            else if(sum>0 && nofchillygobi<0){
            document.getElementById("chillygobi").innerHTML=""; 
            document.getElementById("chillygobiprice").innerHTML=""; 
            nofchillygobi++;
            item++;
            sum=sum+chillygobiprice; 
            }
            else if (sum==0 && nofchillygobi==0) {
            document.getElementById("chillygobi").innerHTML=""; 
            document.getElementById("chillygobiprice").innerHTML="";
            } 
            else if(sum<0 && nofchillygobi<0){
            document.getElementById("chillygobi").innerHTML=""; 
            document.getElementById("chillygobiprice").innerHTML="";
            nofchillygobi++;
            item++;
            sum=sum+chillygobiprice;
            }
            document.getElementById("nofchillygobi").innerHTML=nofchillygobi;
            document.getElementById("clicktospace").innerHtml="&emsp;&emsp;&emsp;&emsp;&emsp;"
            document.getElementById("noofitems").innerHTML= item+"items";
            document.getElementById("amount_name").innerHTML="total amount:";
            document.getElementById("totalamount").innerHTML="&emsp;&emsp;&emsp;&emsp;"+sum;
            var gst=sum*18/100;
            var fa=sum+gst;
            document.getElementById("gst").innerHTML="GST"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+gst;
            document.getElementById("famount").innerHTML="Final Amount"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+fa;
          }
          function divide(){
            var perons = document.getElementById("nofpersons").value;
            var divam = fa/perons;
            document.write("amount per person:&emsp;&emsp;&emsp;"+divam);
            document.getElementById("divamount").innerHTML = "amount per person:&emsp;&emsp;&emsp;"+divam;
          }
          var doc = new jsPDF();
          function printbill(x) {
            var restorepage= document.body.innerHTML;
            var print=document.getElementById(x).innerHTML;
            document.body.innerHTML=print;
            window.print();
            document.body.innerHTML=restorepage;
          }
        