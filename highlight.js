<html>
  <head>
   <style>

          .division{
             float:left;
           }
           .rd{float:right;}
   </style> 
  </head>
  </body>
    <div  class="division">
          <h1>hai...</h1>
          Enter ur name:<input type="text">
    </div>
    <div class="rd">
    <script>
       function showSource(){;
        var source = "<html>";
        source += document.getElementsByTagName('html')[0].innerHTML;
        source += "</html>";
        source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        source = "<pre>"+source+"</pre>";
        document.writeln(source);
}  
showSource();	
</script>
       </div>
    
 </body>
</html>
