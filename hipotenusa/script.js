function calcular() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var output = document.getElementById("output");
  
    if (a=0, b>0){
      var c = Math.sqrt(c*c - b*b)
      var node = document.createElement("LI");
      var textnode = document.createTextNode(c);
      node.appendChild(textnode);
      document.getElementById("output").appendChild(node);
    } else if (c=0, b>0){
      var c = Math.sqrt(a*a + b*b)
      console.log(0)
      var node = document.createElement("LI");
      var textnode = document.createTextNode(c);
      node.appendChild(textnode);
      document.getElementById("output").appendChild(node);
    }
  }