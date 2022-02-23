// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#agenda").on("click", (e) => {
    $("#modalAgenda").modal("show");
    e.preventDefault();
});
$("#dica").on("click", (e) => {
    $("#modalDica").modal("show");
    e.preventDefault();
});
$("#apoiadores").on("click", (e) => {
    $("#modalApoiadores").modal("show");
    e.preventDefault();
});