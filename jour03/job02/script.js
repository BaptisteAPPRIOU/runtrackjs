
$(document).ready(function() {
    draggable();
    $("#shuffle_button").click(function() {
        shuffle()});
    $('#check_button').click(function() {
        check()});
});

function shuffle() {
    $("#Initial_container1").css("top", "0px");
    $("#Initial_container1").css("left", "0px");
    $("#Initial_container2").css("top", "0px");
    $("#Initial_container2").css("left", "0px");
    $("#Initial_container3").css("top", "0px");
    $("#Initial_container3").css("left", "0px");
    $("#Initial_container4").css("top", "0px");
    $("#Initial_container4").css("left", "0px");
    $("#Initial_container5").css("top", "0px");
    $("#Initial_container5").css("left", "0px");
    $("#Initial_container6").css("top", "0px");
    $("#Initial_container6").css("left", "0px");
    var Icontainer = $("#Initial_container");
    var elements = Icontainer.children();
    for (var i = elements.length; i >= 0; i--) {
        Icontainer.append(elements.eq(Math.floor(Math.random() * i)));
    }
    $("#result").empty();
}
function check(){

    var Initial_container1Top = $("#Initial_container1").position().top;
    var Final_container1Top = $("#Final_container1").position().top;
    var Initial_container2Top = $("#Initial_container2").position().top;
    var Final_container2Top = $("#Final_container2").position().top;
    var Initial_container3Top = $("#Initial_container3").position().top;
    var Final_container3Top = $("#Final_container3").position().top;
    var Initial_container4Top = $("#Initial_container4").position().top;
    var Final_container4Top = $("#Final_container4").position().top;
    var Initial_container5Top = $("#Initial_container5").position().top;
    var Final_container5Top = $("#Final_container5").position().top;
    var Initial_container6Top = $("#Initial_container6").position().top;
    var Final_container6Top = $("#Final_container6").position().top;

    var Initial_container1Left = $("#Initial_container1").position().left;
    var Final_container1Left = $("#Final_container1").position().left;
    var Initial_container2Left = $("#Initial_container2").position().left;
    var Final_container2Left = $("#Final_container2").position().left;
    var Initial_container3Left = $("#Initial_container3").position().left;
    var Final_container3Left = $("#Final_container3").position().left;
    var Initial_container4Left = $("#Initial_container4").position().left;
    var Final_container4Left = $("#Final_container4").position().left;
    var Initial_container5Left = $("#Initial_container5").position().left;
    var Final_container5Left = $("#Final_container5").position().left;
    var Initial_container6Left = $("#Initial_container6").position().left;
    var Final_container6Left = $("#Final_container6").position().left;

    var topOk = false;
    var leftOk = false;
    if (Initial_container1Top == Final_container1Top && Initial_container2Top == Final_container2Top && Initial_container3Top == Final_container3Top && Initial_container4Top == Final_container4Top && Initial_container5Top == Final_container5Top && Initial_container6Top == Final_container6Top){
        topOk = true;}
    if (Final_container1Left - Initial_container1Left == 4 && Final_container2Left - Initial_container2Left == 5 && Final_container3Left - Initial_container3Left == 4 && Final_container4Left - Initial_container4Left == 4 && Final_container5Left - Initial_container5Left == 5 && Final_container6Left - Initial_container6Left == 4){
        leftOk = true;}
    if (topOk && leftOk){
        {   var $textWin = $('<p>', {text: 'YOU WON!'});
            $("#result").css("color", "green");
            $("#result").append($textWin);
            $('#Check').prop('disabled', true);
        }}
    else{
        var $textLose = $('<p>', {text: 'YOU LOST !'});
        $("#result").css("color", "red");
        $("#result").append($textLose);
        $('#Check').prop('disabled', true);}
};
function draggable() {
    $( "#Initial_container1" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "30" });
    $( "#Initial_container2" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
    $( "#Initial_container3" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
    $( "#Initial_container4" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
    $( "#Initial_container5" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
    $( "#Initial_container6" ).draggable({ snap: ".ui-widget-header", snapMode: "inner", snapTolerance: "100" });
};