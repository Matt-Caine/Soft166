function check()
{
    var URL = "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/"
    function switchLightOn(lightID, color)
    {
        if (color == "Green")
        {
            var lightCommand = {"on" : true, "hue" : 25500, "sat" : 100 , "bri" : 250};
        }
        else if (color == "Red")
        {
            var lightCommand = {"on" : true, "hue" : 100, "sat" : 100 , "bri" : 250};
        }

        var lightURI =  URL + lightID + "/state/";

        console.log(lightCommand);
        console.log(lightURI);

        $.ajax({
            url: lightURI,
            type: "PUT",
            data: JSON.stringify(lightCommand)
        })
    }


    function switchLightOff(lightID)
    {
        var lightCommand = {"on" : false};
        var lightURI = URL + lightID + "/state/";

        $.ajax({
            url: lightURI,
            type: "PUT",
            data: JSON.stringify(lightCommand)
        })
    }

    var pass = document.getElementById("input").value;

    var numbers = document.getElementById(".numbers");
    var capital = document.getElementById(".capital");
    var lowercase = document.getElementById(".lowercase");
    var symbols = document.getElementById(".symbols");
    var length = document.getElementById(".length");


    if (/\d/g.test(pass))
    {
        document.getElementById(".numbers").classList.remove('invalid');
        document.getElementById(".numbers").classList.add('valid');
        switchLightOn(1,'Green')

    } else {
        numbers.classList.remove("valid");
        numbers.classList.add("invalid");
        switchLightOn(1,'Red')
    }


    if (/[a-z]/.test(pass))
    {
        document.getElementById(".lowercase").classList.remove('invalid');
        document.getElementById(".lowercase").classList.add('valid');
        switchLightOn(2,'Green')

    }
    else
        {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
        switchLightOn(2,'Red')
        }

    if (/[A-Z]/.test(pass))
    {
        document.getElementById(".capital").classList.remove('invalid');
        document.getElementById(".capital").classList.add('valid');
        switchLightOn(3,'Green')
    } else
        {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
        switchLightOn(3,'Red')
        }


    if (pass.length >= 8)
    {
        document.getElementById(".length").classList.remove('invalid');
        document.getElementById(".length").classList.add('valid');
        switchLightOn(5,'Green')

    } else
        {
        length.classList.remove("valid");
        length.classList.add("invalid");
        switchLightOn(5,'Red')
        }


    if (/[!"£$%^&*()+'@#~,.<>/\| ;:=]/g.test(pass))
    {
        document.getElementById(".symbols").classList.remove('invalid');
        document.getElementById(".symbols").classList.add('valid');
        switchLightOn(4,'Green')

    } else
        {
        symbols.classList.remove("valid");
        symbols.classList.add("invalid");
        switchLightOn(4,'Red')
        }

}

