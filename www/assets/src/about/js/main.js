var Index = {
	init: function(){
		var t = this;
		t.bind();
		t.initSwiper();
	},
	bind: function(){
		$(document).on("hover", ".Jchild", function(){
			var $this = $(this);
			$this.addClass("active").find("ul").removeClass("v-hide");
		}).on("mouseleave", ".Jchild", function(){
			var $this = $(this);
			$this.removeClass("active").find("ul").addClass("v-hide");
		});
	}
};

Index.init();