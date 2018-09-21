const database = firebase.database();
const rootRef = firebase.database().ref();

// console.log('my new shiny id is '+rootRef.key());
// now it is appended at the end of data at the server


let dt = new Date();
let dateInput = document.getElementById('date');
let dateToday= dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear();
dateInput.value = dateToday;
$('#sub').click(function () {
    let record = {
        person:$('#person').val(),
        date: dateToday,
        name: $('#name').val(),
        day: $('#day').val(),
        page: $('#page').val(),
    }
    rootRef.push(record);
    //clearing all the values;
    $('#person').val('');
    $('#name').val('');
    $('#day').val('');
    $('#page').val('');
});

rootRef.on('value', function (snapshot) {
    console.log(snapshot.val());
    let records = snapshot.val();
    $('#dayData').html('');
    let insertString = '';
    for (key in records) {
        insertString+= '<tr>' +
            '<td>'+records[key].date+'</td>' +
            '<td>'+records[key].day+'</td>' +
            '<td>'+records[key].person+'</td>' +
            '<td>'+records[key].name+'</td>' +
            '<td>'+records[key].page+'</th>' +
            '</tr>';
    }
    $('#dayData').html(insertString);
});
