function sendPush() {
  $.ajax({
    type: "POST",
    url: "https://fcm.googleapis.com/fcm/send",
    headers: {
      Authorization: "AIzaSyB2jJhF0cj5LPX5o0Ekwiy3zfb4tH-n1Q4"
    },
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify('{"message":{"token":dLFWE7v2BK4:APA91bEZ7fo1WD0CZQFo6ct80eRw2rRukuDU16N9AHKljXaj3B6RAgGcoB13pLtVYqxYK02LGI-VRxBbogg-4Sq4fKBGsEBzfxicMXEYq_vuwhIV_N86i4OrDNXO_LtFiBZKMb00lozZ,"notification":{"title": "Titulo","body":"corpo"},"webpush":{"headers":{"Urgency":"high"},"notification": {"body": "Corpo 2","requireInteraction": "true","badge": "/badge-icon.png"}}}}'),
    success: function () {
      console.log("OK");
    },
    error: function(xhr, status, error) {
      console.log("ERRO");
    }
  });
}

