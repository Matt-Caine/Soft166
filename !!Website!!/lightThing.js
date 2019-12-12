function switchLight(lightID, boolValue)
{
    var lightState = {"on" : boolValue};

    $.ajax({
        url: getLightURI(lightID) + "state/",
        type: "PUT",
        data: JSON.stringify(lightState)
    })
}



function getLightURI(lightID)
{

    var IP = "http://192.168.0.50/api/";
    var username = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
    var lights = "/lights/";
    var URI = IP + username + lights;
    return URI +lightID +"/";
}

function togglelight(element)
{
    var getState = $.getJSON(getLightURI(element.attr("id")), function (data)
        {
            var state = data["state"]["on"];
            if (state)
            {
                state = false;
            }
            else
            {
                state = true;
            }

            switchLight(element.attr("id"), state);
        });
}

$(document).ready(function()
{
    $('td').click(function()
    {
        togglelight($(this));

        if (checkWin($(this)))
        {
            $(this).removeClass("bg-light").addClass("bg-success");
            alert("Congratulations you have won!");
        }
        else
        {
            $(this).removeClass("bg-light").addClass("bg-danger");
        }
    })



});