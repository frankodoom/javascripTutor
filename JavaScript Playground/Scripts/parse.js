
function getJson() {
    $.ajax({
        url: data.json,
        success: function (data) {
            //$(data).each(function (key, value) {
               
                //console.log(key, value);

                var result = JSON.parse(data);
               try{
                   for (i = 0; i > result.length() ;i++){
                       console.log(result.userId(i));
                   }
                  
               }
            catch(err){
                alert(err);
            }
                
           // });
        },
        error: function () {
            alert('something went wrong');
        },
        complete: function () {
            alert('we done here');
        }
    })
}


function parseEach() {
    $.ajax({
        url: 'http://jsonplaceholder.typicode.com/users',
        datatype:'text',
        success: function (data) {
            //console.log(data);
            $.each(data, function (key, value) {
             
                $('#todo').append('<li>' + data[key].name + '</li>')
                console.log(data);
            });
                 
           
        },
        error: function () {
            alert('something went wrong');
            
        }

    })
}

function parseFor() {
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/users",
        success: function (data) {
            for (var i = 0; i< data.length; i++) {
                $('#todo').append('<li>' + data[i].name + '</li>');
            }
        },
        error: function () {
            alert('something went wrong');
        }
    });
    
}

function buildDynamic() {
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/users",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $('#dynamic').append('<ul> </ul>').append('<li>' + data[i].name + '</li>').addClass('base');
                    $('p').text="This ul was built dynamically!";
            }
        },
        error: function () {
            alert('something went wrong');
        }
    });

}


function loadAlbum() {

    $.ajax({
        url: "http://jsonplaceholder.typicode.com/albums",
        success: function (data) {
            $.each(data,function (key, value) {
                //console.log(data[key].title)
                var title = data[key].title;
                var cardDiv = $('#cardPanel');
                var theHtml = ' <div id="card" class="card card-3">';
                theHtml = theHtml + '<div class="titlediv">';
                theHtml = theHtml + '<span class=" titletext glyphicon glyphicon-headphones"></span><p style="margin-left:5px;">Album Title:</p>"' + title + '"<span id="spanTitle"></span>';
                cardDiv.append(theHtml);
                  
            })

        },
        complete:function(){
            $('#cardPanel > img').remove();
        },

        error: function () {
            alert('Something Went Wrong');
        }
     
    })

}