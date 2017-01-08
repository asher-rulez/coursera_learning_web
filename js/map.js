window.onload = function() {
    var myLatLng = {
        lat: 32.137083,
        lng: 34.893645
    };

    var myOptions = {
        center: myLatLng,
        zoom: 12,
        disableDefaultUI: true
    };
    //mapTypeId: google.maps.MapTypeId.ROADMAP,

    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'אנחנו כאן!'
    });
}