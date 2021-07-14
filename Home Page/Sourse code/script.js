function random_function()
{
    var a=document.getElementById('input').nodeValue;
    if(a=="Chittagong")
    {
        var array=["Cumilla","Feni","Chittagong","Chadpur"]
    }

    else if(a=="Dhaka")
    {
        var array=["Dhaka","Munsiganj","Naraynganj"]
    }
    else
    {
        var array=[]
    }
    for(i=0;i<arr.length;i++)
                {
                    string=string+"<option value=>"+arr[i]+">"+arr[i]+"</option>";
                }
                string="<select name='lol'>"+string+"</select>"
    document.getElementById('Output').innerHTML=string;
}   