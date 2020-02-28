var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);


$(document).ready(function(){
    $('.butt').click(function(){
        $('#backlayer').show();
        $('#menu').slideDown();
        
    });
    $('#backlayer, #goback').click(function(){
        $('#backlayer').hide();
        $('#menu').slideUp();
    });
    $('#goback').mouseleave(function(){
        $('#goback img').css({"transform": "rotate(90deg) scale(1)", "transition": "1s"});
    });
    $('#goback').mouseenter(function(){
        $('#goback img').css({"transform": "scale(1.5)", "transition": "1s"});
    });
});



$(document).ready(function(){
    $('.butt').click(function(){
    $('.prices').remove();
    $('.count').remove();
    $('.fullprice').remove();
    $('.enter').remove();
    var pine = $("#pineap").val();
    var berry = $("#berry").val();
    var grape = $("#grapef").val();
    var app = $("#appl").val();

    $("#pricepineapp").append("<p class = 'count pineapple'>QTA:" + pine +"</p><br class = 'enter'>");
    $("#pricepineapp").append("<p class = 'prices'><strong>$" + (pine*8.5) + "</strong></p>");
    $("#priceberries").append("<p class = 'count berries'>QTA:" + berry +"</p><br class = 'enter'>");
    $("#priceberries").append("<p class = 'prices'><strong>$" + (berry*8.5) + "</strong></p>");
    $("#pricegrapefruit").append("<p class = 'count grapefruit'>QTA:" + grape +"</p><br class = 'enter'>");
    $("#pricegrapefruit").append("<p class = 'prices'><strong>$" + (grape*8.5) + "</strong></p>");
    $("#priceapp").append("<p class = 'count apple'>QTA:" + app +"</p><br class = 'enter'>");
    $("#priceapp").append("<p class = 'prices'><strong>$" + (app*8.5) + "</strong></p>");
    $("#subtotal").append("<h1 class = 'fullprice'><strong>$" + (pine*8.5 + app*8.5 + grape*8.5 + berry*8.5) + "</strong></h1>");
});
});