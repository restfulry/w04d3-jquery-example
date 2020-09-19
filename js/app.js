$('#addHome')
    .removeClass('btn-danger')
    .addClass('btn-success');

$('h1')
    .addClass('text-center');

const isStyled = $('p').hasClass('left-aligned big');

const $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );

console.log($newLink);

$('body').append($newLink);

$('#zillowLink').attr( "target", "_blank" );

console.log($('#zillowLink').attr('href'));

$('#homes tbody').on('click', 'button', function() {
    $(this)
        .closest('tr')
        .fadeOut(500, function() {
            $(this).remove();
    })
});

let newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];


// let $newHome = $( '<tr>
// <td>243 El Dorado</td>
// <td>4,900</td>
// <td>6</td>
// <td>6.5</td>
// <td>$990,000</td>
// <td><button class="btn btn-xs btn-danger">Remove</button></td>
// </tr>' );

$('#addHome').on('click', function(e) {
    let random = Math.floor(Math.random() * 3);
    let newHomeToAdd = newHomes[random];
    
    const $newHome = $(`<tr>
    <td>${newHomeToAdd.address}</td>
    <td>${newHomeToAdd.sf}</td>
    <td>${newHomeToAdd.bedrooms}</td>
    <td>${newHomeToAdd.baths}</td>
    <td>${newHomeToAdd.price}</td>
    <td><button class="btn btn-xs btn-danger">Remove</button></td>
    </tr>`)
    $('#homes > tbody').append($newHome);
});


