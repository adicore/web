simpleCart({

    // array representing the format and columns of the cart, see 
    // the cart columns documentation
    cartColumns: [
		{view:"image" , attr:"thumb", label: false },
        { attr: "name" , label: "Name" },
        { attr: "price" , label: "Price", view: 'currency' },
        { view: "decrement" , label: false },
        { attr: "quantity" , label: "Qty" },
        { view: "increment" , label: false },
        { attr: "total" , label: "SubTotal", view: 'currency' },
        { view: "remove" , text: "Remove" , label: false }
    ],

    // "div" or "table" - builds the cart as a table or collection of divs
    cartStyle: "div", 

    // how simpleCart should checkout, see the checkout reference for more info 
    checkout: { 
        type: "PayPal" , 
        email: paypal_email,
		success: paypal_successpage,
		cancel: paypal_cancelpage
    },

    // set the currency, see the currency reference for more info
    currency: currency_page,

    // collection of arbitrary data you may want to store with the cart, 
    // such as customer info
    data: {},

    // set the cart langauge (may be used for checkout)
    language: language_page,

    // array of item fields that will not be sent to checkout
    excludeFromCheckout: [],

    // custom function to add shipping cost
    shippingCustom: null,

    // flat rate shipping option
    shippingFlatRate: 0,

    // added shipping based on this value multiplied by the cart quantity
    shippingQuantityRate: 0,

    // added shipping based on this value multiplied by the cart subtotal
    shippingTotalRate: 0,

    // tax rate applied to cart subtotal
    taxRate: 0,

    // true if tax should be applied to shipping
    taxShipping: false,

    // event callbacks 
    beforeAdd               : null,
    afterAdd                : null,
    load                    : null,
    beforeSave              : null,
    afterSave               : null,
    update                  : null,
    ready                   : null,
    checkoutSuccess             : null,
    checkoutFail                : null,
    beforeCheckout              : null
});
//Create Option Shipping Check
$(document).ready(function () {
	function b() {
		$("#ContactForm1 .contact-form-error-message").hide();
		$("#ContactForm1 .contact-form-success-message").hide();
		var a = $("#ContactForm1 .contact-form-name").val(),
		b = $("#ContactForm1 .contact-form-email").val(),
		c = $("#ContactForm1 .contact-form-number").val(),
		d = $("#ContactForm1 .contact-form-website").val(),
		k = $("#raintemplates-contact-form-message").val(),
		g = $(".contact-form-company").val(),
		h = "",
		r = $(".shopboxrelative .simpleCart_grandTotal").text();
		$(".itemRow").each(function (a, b) {
			var g = $(this).find(".item-name").text(),
			e = $(this).find(".item-quantity").text(),
			q = $(this).find(".item-price").text();
			h += g + "(" + e + "):" + q + "\n"
		});
		var e = "";
		$("#paypal").is(":checked") && (e = "Paypal");
		$("#cashde").is(":checked") && (e = "Cash On Delivery");
		$(".infobasic-3").html('<textarea class="contact-form-email-message" cols="25" id="ContactForm1_contact-form-email-message" name="email-message" rows="5"></textarea>');
		a = "Payment Method:" + e + "\n_____________________________________\n\nName :____________:" + a + "\nEmail :____________:" + b + "\nPhone Number :____:" + c + "\nAddress :__________:" + d + "\nRegion :___________:" + k + "\nCompany :_________:" + g + "\n\nCustomer's Order:\n_____________________________________\n\n" + h + "_____________________________________\nGrand Total:" + r + "\n_____________________________________";
		$("#ContactForm1 .contact-form-email-message").val(a)
	}
	function f() {
		var a = $(".contact-form-wrapper .contact-form-name").val(),
		b = $(".contact-form-wrapper .contact-form-email").val(),
		c = $(".contact-form-wrapper .form2-phone").val(),
		d = $(".contact-form-wrapper .company-name").val(),
		e = $(".contact-form-wrapper .datetimepk input").val(),
        f = $(".contact-form-wrapper .Budget #budget").val(),
		g = $(".contact-form-wrapper .themsg .form2msg").val(),
                a = "New Order:\n_____________________________________\n\nName: " + a + "\nEmail: " + b + "\nPhone Number: " + c + "\nCompany Name: " + d + "\nProject Start: " + e + "\nBudget: " + f + "\n_____________________________________\n\n" + g + "\n_____________________________________";
		$(".contact-form-wrapper .form2contact2 .contact-form-email-message").val(a)
	}
	function l(a) {
		return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(a)
	}
	function p() {
		var a = !0;
		$(".contact-form-wrapper .formrequireemail").each(function () {
			if (l(this.value)) $(this).css({
				"border-color": "#fff"
			});
			else return $(this).css({
				"border-color": "#c1694e"
			}),
			a = !1
		});
		$(".contact-form-wrapper .formrequire").each(function () {
			var b = this.value;
			if ("" == b || null == b) return $(this).css({
				"border-color": "#c1694e"
			}),
			a = !1;
			$(this).css({
				"border-color": "#fff"
			})
		});
		return a
	}
	function n() {
		var a = !0;
		$("#ContactForm1 .contact-form-email").each(function () {
			if (l(this.value)) $(this).closest(".form-section").find(".message-show").hide();
			else return $(this).closest(".form-section").find(".message-show").show(),
			a = !1
		});
		$("#ContactForm1 .eachrequire").each(function () {
			var b = this.value;
			if ("" == b || null == b) return $(this).closest(".form-section").find(".message-show").show(),
			a = !1;
			$(this).closest(".form-section").find(".message-show").hide()
		});
		return a
	}
	for (var c = "", d = 0; raintemplates_cityaddressshippingcost.length > d; d++) c += '<option value="' + raintemplates_cityaddressshippingcost[d][0] + '" class="loop"><span>' + raintemplates_cityaddressshippingcost[d][0] + "</span><span></span></option>";
	$("#raintemplates-shippingSelect").append(c);
	$("#raintemplates-shippingSelect").on("change", function () {
		simpleCart.update();
		$(".raintemplates-shipping-added").html(raintemplates_shipping_notifi).fadeIn("fast").delay(1E3).fadeOut(500)
	});
	window.location.hash && 1 == window.location.hash.indexOf("delivery") && $("html, body").animate({
		scrollTop: $("#gridmenu").offset().top - 100
	});
	$(".btndelivery").click(function () {
		$("html, body").animate({
			scrollTop: $("#gridmenu").offset().top - 100
		})
	});
	$("#head").on("click", ".btnsearch", function (a) {
		$(".searchto").toggle()
	});
	$("#glb-raintemplates").on("click", ".btnreserva", function (a) {
		$(".meanmenu-reveal.meanclose").click();
		$("#ContactForm3 .contact-form-widget").appendTo(".contact-form-wrapper");
		$(".contact-form-wrapper .contact-form-widget").show();
		a = $("#followsocial").offset().top;
		$(window).scrollTop() + 400 > a && $("html, body").animate({
			scrollTop: $("body").offset().top - 200
		},
		200);
		$(this).css({
			display: "none"
		});
		$(".overlay").css({
			width: "100%",
			"margin-left": 0,
			opacity: .96,
			left: 0,
			right: 0
		});
		setTimeout(function () {
			$(".overlay").css({
				height: "100%",
				top: 0
			})
		},
		0);
		$(".box").each(function () {
			blah(this)
		});
		return ! 1
	});
	$("button.close").one("click", function () {});
	$("button.close").click(function () {
		$(".contact-form-wrapper .contact-form-widget").appendTo("#ContactForm3");
		$(".overlay").css({
			height: "2px",
			top: "50%"
		});
		setTimeout(function () {
			$(".overlay").css({
				width: "225px",
				left: "50%",
				"margin-left": "-112.5px",
				opacity: 0
			})
		},
		0);
		setTimeout(function () {
			$(".btnreserva").show()
		},
		0)
	});
	$(".button_content img").parent().featherlight({
		targetAttr: "href"
	});
	$(".item_add").each(function () {
		$(this).click(function () {
			if (1 > $(this).closest(".simpleCart_shelfItem").find(".item_quantity").val()) return $(".quatitynotification").html("<span>" + raintemplates_quantity_notifi + "</span>").fadeIn("fast").delay(1E3).fadeOut(500),
			!1
		})
	});
	$(".shopcartclose").click(function () {
		$("#shoppingCart").fadeOut("fast")
	});
	$("#LinkList1").hide();
	c = $("#LinkList1 > h2").text().split("/");
	$("#LinkList1 > h2").html('<span class="sctitle">' + c[0] + '</span><p class="scdescript">' + c[1] + "</p>");
	$("#LinkList1 ul li").each(function () {
		var a = $(this).find("a").text().toLowerCase();
		$(this).find("a").html('<span class="fa fa-' + a + '"></span><p class="' + a + '">' + a + "</p>")
	});
	$("#LinkList1").fadeIn();
	$(".btnopencart").click(function () {
		$("#shoppingCart").slideToggle("fast", function () {})
	});
	$(".ratiomethod").insertAfter(".cartopen .container").show();
	$(".check-with-paypal").val(paywithpaypal);
	$(".check-with-cash").val(cashondelivery);
	$(".check-with-cash").hide();
	$(".submitreser").click(function () {
		p() && (f(), $(".contact-form-wrapper .contact-form-button-submit").click(), setTimeout(function () {
			$("button.close").click()
		},
		4E3))
	});
	$(".check-with-paypal").click(function () {
		n() ? ($(".cartbuttons").append('<a class="simpleCart_checkout" style="display:none" href="javascript:;">Checkout</a>'), b(), $("html, body").animate({
			scrollTop: $(".infobasic-2").offset().top
		},
		1200), $(".simpleCart_checkout").click(), $("#ContactForm1 .contact-form-button-submit").click()) : $("html, body").animate({
			scrollTop: $(".infobasic-1").offset().top - 120
		},
		500)
	});
	$(".check-with-cash").click(function () {
		var a = n(),
		c = parseInt($("#shoppingCart .simpleCart_quantity").text()),
		d = parseInt($("#shoppingCart .simpleCart_taxCost").text()),
		f = parseInt($("#shoppingCart").text());
		if ("0" == c) throw $(".notifyobsolute").append(raintemplates_emptycart).show("fast"),
		$(".simpleCart_checkout").hide(),
		location.reload(),
		Error("Something went badly wrong!");
		if (c > raintemplates_maxproductcanadd) throw $(".notifyobsolute").append(raintemplates_notify_morethan).show("fast"),
		Error("Something went badly wrong!");
		if (0 > d || 0 > f) throw $(".notifyobsolute").append(raintemplates_emptycart).show("fast"),
		$(".simpleCart_empty").click(),
		Error("Something went badly wrong!");
		$("#shoppingCart .buttoneffect").show();
		a ? ($.ajax({
			type: "GET",
			url: "" + window.location.protocol + "//" + window.location.host + "/feeds/posts/default/-/" + raintemplates_label + "/?alt=json-in-script&max-results=1000&callback=?",
			async: !1,
			contentType: "application/json",
			dataType: "jsonp",
			success: function (a) {
				var b = 0,
				c = 0,
				d = 0;
				$(".itemRow").each(function (e, g) {
					var k = $.trim($(this).find(".item-name").text()),
					h = $(this).find(".item-price").text().match(/\d+(?:\.\d+)?/g)[0],
					h = parseFloat(h),
					f = $(this).find(".item-quantity").text().match(/\d+(?:\.\d+)?/g)[0],
					l = parseInt(f),
					f = $(".simpleCart_total").text().match(/\d+(?:\.\d+)?/g)[0],
					f = parseFloat(f),
					n = parseFloat($(".simpleCart_grandTotal").text().match(/\d+(?:\.\d+)?/g)[0]);
					c = l * h;
					l = a.feed.entry;
					try {
						var m = l.filter(function (a) {
							return a.title.$t === k
						})[0].content.$t
					} catch(u) {
						throw $(".simpleCart_empty").click(),
						$(".notifyobsolute").append(raintemplates_notincheckout).show(function () {
							setTimeout(function () {
								document.location.href = "/#delivery"
							},
							3E3)
						}),
						Error("Something went badly wrong!")
					}
					m = $(m).find(".tr-caption").first().text().match(/\d+(?:\.\d+)?/g);
					m = null != m ? parseFloat(m[0]) : "";
					if (m != h) throw $(".notifyobsolute").append(raintemplates_pricechanged).show("fast"),
					$("#shoppingCart").slideToggle("fast", function () {
						$(this).delay(2E3).slideToggle("fast")
					}),
					$(".simpleCart_empty").click(),
					Error("Something went badly wrong!");
					b += 1;
					d += c;
					d = parseFloat(d);
					$(this).addClass("effect-" + b + "");
					if (d > n) throw $(".notifyobsolute").append(raintemplates_pricechanged).show("fast"),
					$("#shoppingCart").slideToggle("fast", function () {
						$(this).delay(2E3).slideToggle("fast")
					}),
					$(".simpleCart_empty").click(),
					Error("Something went badly wrong!");
					if (m == h && b == $(".itemRow").length && f !== d) throw $(".notifyobsolute").append(raintemplates_pricechanged).show("fast"),
					$("#shoppingCart").slideToggle("fast", function () {
						$(this).delay(2E3).slideToggle("fast")
					}),
					$(".simpleCart_empty").click(),
					Error("Something went badly wrong!")
				})
			}
		}), b(), $("#ContactForm1 .contact-form-button-submit").click(), $("html, body").animate({
			scrollTop: $(".infobasic-2").offset().top
		},
		1200), window.location.replace(successpage_cashondelivery)) : $("html, body").animate({
			scrollTop: $(".infobasic-1").offset().top
		},
		500)
	});
	$("#checkout-method input").change(function () {
		$(".explainpaymethod").hide();
		$(this).closest("li").find(".explainpaymethod").show("fast");
		"paypal" == $(this).val() && ($(".check-with-paypal").addClass("thepaypal"), $(".check-with-paypal").val(paywithpaypal), $(".check-with-paypal").show(), $(".check-with-cash").hide());
		"cashondelivery" == $(this).val() && ($(".check-with-cash").addClass("thecaston"), $(".check-with-cash").val(cashondelivery), $(".check-with-paypal").hide(), $(".check-with-cash").show())
	})
});
simpleCart({
	shippingCustom: function () {
		for (var b = 0; raintemplates_cityaddressshippingcost.length > b; b++) if (raintemplates_cityaddressshippingcost[b][0] == $("#raintemplates-shippingSelect").val()) return raintemplates_cityaddressshippingcost[b][1]
	}
});
simpleCart.bind("load", function (b) {
	b = $(".simpleCart_quantity").text().match(/\d+(?:\.\d+)?/g)[0];
	0 == parseInt(b) ? $("span.raintemplates-sl-noti").hide() : $("span.raintemplates-sl-noti").show()
});
simpleCart.bind("beforeRemove", function (b) {});
simpleCart.bind("afterAdd", function (b) {
	b = $(".simpleCart_quantity").text().match(/\d+(?:\.\d+)?/g)[0];
	b = parseInt(b);
	$("#shoppingCart").slideDown("fast", function () {});
	0 < b && $("span.raintemplates-sl-noti").show()
});
simpleCart.bind("beforeCheckout", function (b) {
	$("#shoppingCart .buttoneffect").show();
	b = simpleCart.quantity();
	var f = parseInt($("#shoppingCart .simpleCart_quantity").text()),
	l = parseInt($("#shoppingCart .simpleCart_taxCost").text()),
	p = parseInt($("#shoppingCart").text());
	if (!$("#glb-raintemplates #footer .bottominfo").hasClass("raintemplates-bottom-check")) throw Error("Something went badly wrong!");
	if ("0" == f || "0" == b) throw $(".notifyobsolute").append(raintemplates_emptycart).show("fast"),
	$(".simpleCart_checkout").hide(),
	location.reload(),
	Error("Something went badly wrong!");
	if (f > raintemplates_maxproductcanadd || b > raintemplates_maxproductcanadd) throw $(".notifyobsolute").append(raintemplates_notify_morethan).show("fast"),
	Error("Something went badly wrong!");
	if (0 > l || 0 > p) throw $(".notifyobsolute").append(raintemplates_emptycart).show("fast"),
	$(".simpleCart_empty").click(),
	Error("Something went badly wrong!");
	$.ajax({
		type: "GET",
		url: "" + window.location.protocol + "//" + window.location.host + "/feeds/posts/default/-/" + raintemplates_label + "/?alt=json-in-script&max-results=1000&callback=?",
		async: !1,
		contentType: "application/json",
		dataType: "jsonp",
		success: function (b) {
			var c = 0,
			d = 0,
			a = 0;
			$(".itemRow").each(function (f, l) {
				var n = $.trim($(this).find(".item-name").text()),
				k = $(this).find(".item-price").text().match(/\d+(?:\.\d+)?/g)[0];
				if (0 > parseInt($(this).find(".item-quantity").text())) throw $(".simpleCart_empty").click(),
				location.reload(),
				Error("Something went badly wrong!");
				var k = parseFloat(k),
				g = $(this).find(".item-quantity").text().match(/\d+(?:\.\d+)?/g)[0],
				h = parseInt(g),
				g = $(".simpleCart_total").text().match(/\d+(?:\.\d+)?/g)[0],
				g = parseFloat(g),
				p = parseFloat($(".simpleCart_grandTotal").text().match(/\d+(?:\.\d+)?/g)[0]);
				d = h * k;
				h = b.feed.entry;
				try {
					var e = h.filter(function (a) {
						return a.title.$t === n
					})[0].content.$t
				} catch(t) {
					throw $(".simpleCart_empty").click(),
					$(".notifyobsolute").append(raintemplates_notincheckout).show(function () {
						setTimeout(function () {
							document.location.href = "/#delivery"
						},
						3E3)
					}),
					$(".notifyobsolute").append(raintemplates_notincheckout).show("fast"),
					Error("Something went badly wrong!")
				}
				e = $(e).find(".tr-caption").first().text().match(/\d+(?:\.\d+)?/g);
				e = null != e ? parseFloat(e[0]) : "";
				if (e != k) throw $(".notifyobsolute").append(raintemplates_pricechanged).show("fast"),
				$("#shoppingCart").slideToggle("fast", function () {
					$(this).delay(2E3).slideToggle("fast")
				}),
				$(".simpleCart_empty").click(),
				Error("Something went badly wrong!");
				c += 1;
				a += d;
				a = parseFloat(a);
				$(this).addClass("effect-" + c + "");
				if (a > p) throw $(".notifyobsolute").append(raintemplates_pricechanged).show("fast"),
				$("#shoppingCart").slideToggle("fast", function () {
					$(this).delay(2E3).slideToggle("fast")
				}),
				$(".simpleCart_empty").click(),
				Error("Something went badly wrong!");
				if (e == k && c == $(".itemRow").length && g !== a) throw $(".notifyobsolute").append(raintemplates_pricechanged).show("fast"),
				$("#shoppingCart").slideToggle("fast", function () {
					$(this).delay(2E3).slideToggle("fast")
				}),
				$(".simpleCart_empty").click(),
				Error("Something went badly wrong!")
			})
		}
	})
});
