
  var Board = ""; // Automatisch befuellt
  var Key 	= "";
  var Token = "";

    var loadBoards = function() {
      Trello.get(
        '/members/me/boards/',
        loadedBoards
      );
    };
	
    var loadedBoards = function(boards) {
      $.each(boards, function(index, value) {
		  if (value.name == "TODO") {
			  boardId = value.id;
			  LoadLabels();
			  return;
		  }
      });
    };
	
	var LoadLabels = function() {
      Trello.get(
        '/boards/' + boardId + '/cards',
        loadedLabels,
        function() { console.log("Failed to load labels"); }
      );
    };

    var loadedLabels = function(labels) {
	  $('#tasks').html ('');
	  $('.TBlack').each(
	  	function(index){
			var el = this.classList;
			if (el.length == 2){
				$(this).remove();
			}
	  		});
	  $('.TImage').each(
	  	function(index){
			var el = this.classList;
			if (el.length == 2){
				$(this).remove();
			}
	  			});
      $.each(labels, function(index, label) {
		if (label.name.indexOf("<img") == -1){
			var label = $("<div class='todo'>" + label.name + "<i class='fa fa-dot-circle-o'></i></div>");
			$('#tasks').append(label)
		} else {
			var label = $('<div class="item TImage">' + label.name + '"</div>' 
						+ '<div class="item TBlack"><img src="img/black.jpg"></img></div>');
			$('#carousel').append(label)
		}
      });
    };

    Trello.authorize({
      scope: {
        read: true,
        write: false },
      expiration: "never",
      success: loadBoards,
      error: function() { console.log("Failed authentication"); }
    });
	