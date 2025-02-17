
let list = document.getElementById("mlist");
let open = document.getElementById("open");
let close = document.getElementById("close");
function openlist() {
    mlist.style.right = "0px";
    mopen.style.display = "none";
    mclose.style.display = "block";
}
function closelist() {
    mlist.style.right = "-244px"
    mopen.style.display = "block";
    mclose.style.display = "none";
}


let side = document.getElementById("mlist");
let mopen = document.getElementById("mopen");
let mclose = document.getElementById("mclose");
function mopenlist() {
    side.style.right = "0px";
    open.style.display = "none";
    close.style.display = "block";
}
function mcloselist() {
    side.style.right = "-250px"
    open.style.display = "block";
    close.style.display = "none";
}
// ----------------------------------------------------------------------------
