function terimainput(){
    var x=document.forms['data']['Username'].value;
    var y=document.forms['data']['Email'].value;

    var tabel= document.getElementById("tabel");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = x;
    cell2.innerHTML = y;

// alert ("data berhasil di entry");
}