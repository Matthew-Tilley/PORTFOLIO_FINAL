$(document).ready(function()
{
    $("#BTN02").mouseenter(function()
    {
        $(this).hide();
        $("#BTN02-HOV").show();
    });
    
    $("#BTN02-HOV").mouseleave(function()
    {
        $(this).hide();
        $("#BTN02").show();
    });
    
    
    
    
    
});