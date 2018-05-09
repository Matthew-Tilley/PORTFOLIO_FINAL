$(document).ready(function()
{
    
    
    /*CONTROLS FOR CLICK AREA #1*/
    
    $("#BTN01").mouseenter(function()
    {
        $(this).hide();
        $("#BTN01-HOV") .show()
                        .click(function()
                        {
                            window.open("http://www.tilleydigital.com/HTML/journey.html", "_self");
                        });
        
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
        $("#BTN02-HOV") .show()
                        .click(function()
                        {
                            window.open("http://www.tilleydigital.com/HTML/skills.html", "_self");                        
                        });
        
      
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
        $("#BTN03-HOV") .show()
                        .click(function()
                        {
                            window.open("http://www.tilleydigital.com/HTML/works.html", "_self");
                        });
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
        $("#BTN04-HOV") .show()
                        .click(function()
                        {
                            window.open("http://www.tilleydigital.com/HTML/tools.html", "_self");
                        });
    });
    
    
    $("#BTN04-HOV").mouseleave(function()
    {
        $(this).hide();
        $("#BTN04").show();
    });
    
    
    
    
    /*SHOWS & HIDES LARGE VERSION / DESCRIPTION OF ICONS FOR THE VARIOUS PROGRAMS*/
    
    $(".ICN-T-01").on("click", function()
    {
       
                
        $("#MOD-01").hide();
        
        $("#MOD-02").show();
        
        var a = $(this).attr("id") + "-A";
                     
        console.log(a);
   
        
        var b = document.getElementById(a);
        
        $(b).fadeIn(function()
        {
                      
            function autoClose()
            {
                $(b).fadeOut(500);
                $("#MOD-02").fadeOut(700);
                $("#MOD-01").fadeIn(700);
            }
            
            setTimeout(autoClose, 1400);
             
        });
                
    });
    
});