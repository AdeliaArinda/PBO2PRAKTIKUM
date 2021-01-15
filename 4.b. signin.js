var user = "cidel";
var pass = "123";
var error="";
var Login = document.getElementsByClassName('button');

Login.addEventListener ('click', function(e) {
    e.preventDevault();
});

function validate() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    let merah = document.querySelector('.merah');
    if (email == user && password == pass){
        let button = document.querySelector('button[data-toggle = "modal"]');
        let modal = document.querySelector('.modal');
        

        modal.classList.add('show');

        modal.addEventListener('click', function(){
            this.classList.remove('show');
        }
        );

        modal.querySelector('.modal-content').addEventListener ('click', function() {
            e.stopPropragation();
        }
        );
      
    }
    else  {
        merah.classList.add('show1');

        merah.addEventListener('click', function() {
            this.classList.remove('show1');
        });
    } 
}

        