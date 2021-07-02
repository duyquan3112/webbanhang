var k = 0;
var list = document.getElementById('list')
var list_click = document.getElementById('list-show')
var list_click2 = document.getElementById('nav-product-list')
var list_click3 = document.getElementById('list-show-2')
var list_click4 = document.getElementById('list-show-3')
var list_click5 = document.getElementById('list-show-4')
var list_click6 = document.getElementById('products-list')
var list_click7 = document.getElementById('list-product')
list_click2.onclick = function(event) {
    if (event.target == list_click || event.target == list_click2 || event.target == list_click3 || event.target == list_click4 || event.target == list_click5) {
        k++;
        if(k%2==0) {
            list.style.display = "none";
        }
        else
            list.style.display = "block";
    }
    // else{
    //     list.style.display = "none"
    // }
}