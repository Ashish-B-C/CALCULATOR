function buttonclick(val)
{
    document.getElementById("displayscreen").value+=val
}
function clearDisplay()
    {
document.getElementById("displayscreen").value=""
    }
    function equalclick()
    {
        var text=document.getElementById("displayscreen").value
        var result=eval(text)
        document.getElementById("displayscreen").value=result
    }
