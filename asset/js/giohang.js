function tangValue() {
    var a = 0;
    a= document.getElementById("soLuong").innerText;
    a++;
    document.getElementById("soLuong").innerText = a;
    var img = document.getElementById("img_sp").getAttribute("src");
    sessionStorage.setItem("anh",img);
    var gia = document.getElementById("gia").innerText;
    sessionStorage.setItem("gia",gia);
    location.href = "giohang.html"
}






