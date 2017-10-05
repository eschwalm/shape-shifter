export const draggable = () => {
  $('.shape').draggable({
      grid: [5, 5],
      containment:'window',
      stack: '.shape',
	    // snap: true,
	    // snapMode: 'both',
	    // snapTolerance: 13,
    });
      // .bind('mousedown', function(event, ui){
      //   $(event.target.parentElement).append( event.target );
      // })
      // .bind('drag', function(event, ui){
      //   event.target.setAttribute('x', ui.position.left);
      //   event.target.setAttribute('y', ui.position.top);
      // });

    var angle = 45;

    $('.shape').click(function() {

        $(this).css ({
            '-webkit-transform': 'rotate(' + angle + 'deg)',
               '-moz-transform': 'rotate(' + angle + 'deg)',
                 '-o-transform': 'rotate(' + angle + 'deg)',
                '-ms-transform': 'rotate(' + angle + 'deg)'
        });
        angle+=45;
    });
};
