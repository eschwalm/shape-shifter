export const draggable = () => {
  $('.shape').draggable({
      // grid: [10, 10],
      // containment:'window',
      stack: '.shape',
	    snap: true,
	    snapMode: 'both',
	    snapTolerance: 20,
      });

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
