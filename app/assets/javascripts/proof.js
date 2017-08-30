console.log ('%%%%%%%%%Hit JS%%%%%%%%%%%%%');

$(function() {
  $('#greeting').textfill({
    minFontPixels: 12,
    maxFontPixels: 58,
    // explicitHeight: 250,
    // explicitWidth: 550,
    innerTag: '#greeting-text',
    debug: 'true',
    success: function() {
	    console.log("yay!");
		},
		fail: function() {
		    alert("boo hoo!");
		}
  });
});
