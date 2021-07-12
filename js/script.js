$(document).ready(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Ваша заявка принята!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(document).ready(function () {
	$('.quotes__row').slick({
		arrows: false,
		slidesToShow: 2,
		autoplay: true,
		autoplaySpeed: 2000,

	});
});
