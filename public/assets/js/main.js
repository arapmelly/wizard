"use strict";

$(document).ready(
	function () {
		/*remove browser autofilling of forms*/
		$("input").attr("autocomplete","off"); //didn't work for Chrome!
		
		// $(".form input[name=email]").on("keyup",function(){
		// 	$(".g-recaptcha").fadeIn(800);
		// });

		$("label span").click(function(){
			var $this = $(this);
			var name = $this.attr('name');
			$("*[name="+name+"]").focus();
		});

		$("input[type=text],input[type=password]").focus(function(){
			var $this = $(this);
			var name = $this.attr('name');
			$("span[name="+name+"]").css('color','#e67e22');
		})
		.blur(function(){
			var name = $(this).attr('name');
			$("label span[name="+name+"]").css('color','#a1a1a1');
		});

		$("#referral input[name=first_name],#invite input[name=name]").on("blur",function(){
			var $this = $(this);
			if($this.val() != ""){
				$("#referral .invite").text("Refer "+$this.val());
				$("#invite .bootstrap-tagsinput input").attr("placeholder",
								"List Key skills "+$this.val()+" is good at (optional).");
				$("#invite h4 span.name").html($this.val());
			}
		});

		$('#referral, #invite').on('show.bs.modal', function (e) {
		  	$("#referral .msg,#invite .msg").html("");
		  	//clear fields
		  	$("#referral input[type=text],#invite input[type=text]:not([name=skills])")
		  		.each(function(i,elem){
		  			$(elem).val("");
		  	});

		  	$("#invite h4 span.name").html("Someone");
		});

		$("#referral button.invite").on("click",function(){
				var data = {
						first_name: $('.modal input[name=first_name]').val(),
						last_name: $('.modal input[name=last_name]').val(),
						email: $('.modal input[name=email]').val(),
						jid: $('.modal input[name=jid]').val(),
						name_from: $('.modal input[name=name_from]').val()
				};

				$.ajax({
					type:"POST",
					url:$base_url + "jobs/referral",
					data: data,
					success: function (html) {
						$('#referral .msg').html(html);
					}
				});
			
			//wait a few mins and close
			// $("#referral").modal("hide");
		});

		$("#invite button.invite").on("click",function(){
				var data = {
						name: $('.modal input[name=name]').val(),
						email: $('.modal input[name=email]').val(),
						skills: $('.modal input[name=skills]').val()
				};

				$.ajax({
					type:"POST",
					url:$base_url + "user/invite/submit",
					data: data,
					success: function (html) {
						$('#invite .msg').html(html);
					}
				});
			
			//wait a few mins and close
			// $("#referral").modal("hide");
		});

		//user roles
		$(".roles input[name=role]").click(function(){
			var $this = $(this);
			// console.log($this.prop("checked"));
			if($this.prop("checked")){
				$.ajax({
					type:"POST",
					url:$base_url + "user/role/add",
					data: {rid:$(this).val()},
					success: function (html) {
						$("ul.user-roles").append("<li id='"+$this.val()+
							"'><i class='fa fa-check-circle'></i>  "+
							($this.next().text())+"</li>");
					}
				});
			}
			else{
				$.ajax({
					type:"POST",
					url:$base_url + "user/role/remove",
					data: {rid:$(this).val()},
					success: function (html) {
						$("ul.user-roles #"+$this.val()).remove();
					}
				});
			}
		});

		$("ul.user-roles li").prepend("<i class='fa fa-check-circle'></i> ");

		$("#add-skill").click(function(){
			$.ajax({
				type:"POST",
				url:$base_url+"admin/bootcamp/add_skill",
				data:{
					sid: $(".skill select").val(),
					bid: $(".skill input[name=bid]").val()
				},
				success: function(){
					$("ul.skills").append("<li>" + $(".skill :selected")[0].text + "</li>");
					$(".skill :selected")[0].remove();
				}
			});
			return false;
		});

		$(".skills a.remove").click(function(){
			var $this = $(this);
			$.ajax({
				type:"POST",
				url:$base_url+"admin/bootcamp/remove_skill",
				data: {bsid:parseInt($this.attr("id"))},
				success: function(){
					$this.parent().remove();
				}
			});
			return false;
		});

		$("#add-trainer").click(function(){

			var $this = $(this),
				data = {
					bid: $(".trainer input[name=bid]").val(),
					first_name: $(".trainer input[name=first_name]").val(),
					last_name: $(".trainer input[name=last_name]").val(),
					email: $(".trainer input[name=email]").val(),
					github: $(".trainer input[name=github]").val(),
					twitter: $(".trainer input[name=twitter]").val()
				};
				console.log(data);

			$.ajax({
				type:"POST",
				url:$base_url+"admin/bootcamp/add_trainer",
				data: data,
				success: function(html){
					console.log(html);
					if(html != ""){
						$("#trainer .msg").append(html);
					}
					else{
						$(".trainers").append("<li>" + data.first_name + " " +
							data.last_name + "</li>");
						//clear
						$(".trainer input[type=text]").val(function(){
							return this.defaultValue;
						});
						//any available error display
						$("#trainer .msg").html("");
					}
				}
			})
		});

		//remove trainer
		$(".trainers a.remove").click(function(){
			var $this = $(this);
			$.ajax({
				type:"POST",
				url:$base_url+"admin/bootcamp/remove_trainer",
				data: {btid:parseInt($this.attr("id"))},
				success: function(){
					$this.parent().remove();
				}
			});
			return false;
		});

		//publish
		$(".publish,.unpublish").click(function(){
			var $this = $(this);
			var cl = $this.hasClass("publish") ? "publish" : "unpublish",
				cl2 = $this.hasClass("publish") ? "unpublish" : "publish";
				console.log(cl,cl2);
			$.ajax({
				type:"POST",
				url: $base_url+"admin/bootcamp/"+cl,
				data: {bid:parseInt($this.attr("id"))},
				success: function(){
					$this.hide();
					$this.parent().find("."+cl2).show();
				}
			});
			return false;
		});

		//bootcamps
		$(".bootcamp a.btn").click(function(){
			var $this = $(this);
			var data = {bpid:parseInt($this.attr("id"))};
			$.ajax({
				type: "POST",
				url: $base_url + "bootcamp/proposed/vote/",
				data: data,
				success: function(votes){
					$this.hide();
					$this.parent().find(".votes").text(votes);
				}
			});

			return false;
		});
	}
);