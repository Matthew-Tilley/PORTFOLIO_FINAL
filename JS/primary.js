$(document).ready(function()
{
    
    /*CONTROLS FOR CLICK AREA #1*/
    
    $("#BTN01").mouseenter(function()
    {
        $(this).hide();
        $("#BTN01-HOV").show();
    });
    
    $("#BTN01-HOV").mouseleave(function()
    {
        $(this).hide();
        $("#BTN01").show();
    });
        
    
    
    /*CONTROLS FOR CLICK AREA #2*/
    
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
    
    
    
    /*CONTROLS FOR CLICK AREA #3*/
    
    $("#BTN03").mouseenter(function()
    {
        $(this).hide();
        $("#BTN03-HOV").show();
    });
    
    
    $("#BTN03-HOV").mouseleave(function()
    {
        $(this).hide();
        $("#BTN03").show();
    });
    
    
    
    /*CONTROLS FOR CLICK AREA #4*/
    
    $("#BTN04").mouseenter(function()
    {
        $(this).hide();
        $("#BTN04-HOV").show();
    });
    
    
    $("#BTN04-HOV").mouseleave(function()
    {
        $(this).hide();
        $("#BTN04").show();
    });
    
    
    
    
});