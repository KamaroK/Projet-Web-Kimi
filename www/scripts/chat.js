$(document).ready(function() 
{
    $("#send").click(function(e) 
    {
        e.preventDefault();
        $.post("../htbin/chatsend.py", { msg: $("#message").val() }, function(data, status) 
        {
            if (data['num'] !== 0) 
            {
                alert(data['msg']);
            }
            $("#message").val('');
        });
        setTimeout(function() 
        {
            $.getJSON('../htbin/chatget.py', function(data) 
            {
                var items = [];
                for (i = 0; i < data.length; i++) 
                {
                    items.push("<p> Le " + data[i].date + " à " + data[i].time + " " + data[i].user + " a écrit : " + data[i].msg + "</p>");
                };
                $("#chatMessages").empty();
                $("<div/>", { html: items.join("") }).appendTo("#chatMessages");
            });
        }, 400)

    });

});