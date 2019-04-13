document.addEventListener('DOMContentLoaded', function(){
    var Nav = document.querySelectorAll('.container-menu a'),
        Title = document.querySelector('.container-title'),
        Content = document.querySelector('.container-content');



        Nav.forEach(function(link){

            link.addEventListener('click', function(event){
                event.preventDefault();

                var ajaxUrl = link.href;



                

                /*

                fetch(ajaxUrl, { 
                    method: 'GET',
                    headers: new Headers(),
                    mode: 'cors',
                    cache: 'default' 
                }).then(function(response) {
                    return response.text();
                }).then(function(response) {
                    console.log(response)
                });
                */

                

        

                /*
                var xmlhttp = new XMLHttpRequest();
				 
                xmlhttp.open("GET", ajaxUrl);
                xmlhttp.send();
                xmlhttp.onload = function(){
                    if(this.status == 200){
                        var textFromAjax = this.responseText;

                        var virtualDiv = document.createElement('div');

                        virtualDiv.innerHTML = textFromAjax;


                        Title.innerHTML = virtualDiv.querySelector('h1').innerHTML;
                        Content.innerHTML = virtualDiv.querySelector('div').innerHTML;


                        link.classList.add('active');


                    }else{
                        console.log(this.status);
                    }
                };

                */


            })
        });





    /*
    

    */

    /*
    xmlhttp = new XMLHttpRequest();
				 
    xmlhttp.open("GET", "/text.html");
    xmlhttp.send();
    xmlhttp.onload = function(){
        console.log(this);
    };
    */

    

    /*
    xmlhttp = new XMLHttpRequest();
				 
    xmlhttp.open("POST", "/get/js-click/?count="+seft.limit);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send();
    xmlhttp.onload = function(){
        if(this.responseText){
            seft.items = JSON.parse(this.responseText);
        }

    };

    */
});