var modal = document.getElementById('myModal');
            var images = document.getElementsByClassName('myImages');
            var modalImg = document.getElementById("img01");
            var captionText = document.getElementById("caption");
            for (var i = 0; i < images.length; i++) {
            var img = images[i];
  
            img.onclick = function(evt) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        }
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
            modal.style.display = "none";
        }

        function colorbg()
		{
		   var x=document.getElementById("selectid");
		   var bgcolor=x.options[x.selectedIndex].value;
		   document.body.style.backgroundColor=bgcolor;
		}
		function selecttx()
		{
		   var x=document.getElementById("select2");
		   var txselect=x.options[x.selectedIndex].value;
		   document.body.style.font=txselect;
		}