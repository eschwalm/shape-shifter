export const draggable = () => {
  $('.shape').draggable({
      grid: [5, 5],
      containment:'window',
      stack: '.shape',
	    // snap: true,
	    // snapMode: 'both',
	    // snapTolerance: 13,
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

export const selector = () => {
  $('a').click((e) => {
    let puzzle = e.target;
    let width = $(puzzle).css('max-width');

    $('#display-svg')
    .attr('src', `assets/images/${puzzle.id}.png`)
    .css('filter', 'contrast(0%) brightness(50%) opacity(10%)')
    .css('max-width', width);

   });
};

export const toggleSolution = () => {
  let current = $('#display-svg').css('filter');

  $('#solution-button').click(function() {
    $('#display-svg').css('filter', 'none');
  });
};

export const reset = () => {
  $("#lg-triangle1").data({
    'originalLeft': $("#lg-triangle1").css('left'),
    'origionalTop': $("#lg-triangle1").css('top')
  });
  $("#lg-triangle2").data({
    'originalLeft': $("#lg-triangle2").css('left'),
    'origionalTop': $("#lg-triangle2").css('top')
  });


$("#reset-button").click(function() {
  $("#lg-triangle1").css({
      'left': 0,
      'top': 0
    });
  $("#lg-triangle2").css({
      'left': 5,
      'top': -305
    });
  $("#sm-triangle1").css({
    'left': 75,
    'top': -380
    });
  $("#sm-triangle2").css({
    'left': 75,
    'top': -455
    });
  $("#rhomboid").css({
    'left': 0,
    'top': -385
    });
  $("#square").css({
    'left': 175,
    'top': -640,
    'transform': 'rotate(45deg)'
    });
    $("#med-triangle").css({
      'left': 50,
      'top': -540
      });

  });
};
