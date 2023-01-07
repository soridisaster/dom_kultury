
  $(function () {
    $(".place1").click(function () {
      $(this).toggleClass("active1");
    });
    $(".unbooked1").attr("title","Unbooked1");
    $(".taken").attr("title","Taken");
  });
  
  $("#submit1").click(function () {
    $(".place1").each(function () {
      if ($(this).hasClass("active1")) {
        $(this).addClass("taken");
        $(this).removeClass("unbooked");
        $(this).attr("title","Taken");
        $(this).addClass("occupied1");
      }
    });
  });

  const container1 = document.querySelector('.container1')
  const seats1 = document.querySelectorAll('.row1 .seat1:not(.occupied1)')
  const count1 = document.getElementById('count1')
  
  container1.addEventListener('click', function (e) {
    console.log(e.target)
    if (
      e.target.classList.contains('seat1') &&
      !e.target.classList.contains('occupied1')
    ) {
      console.log(e.target)
      e.target.classList.toggle('selected1')
      updateSelectedCount1()
    }
  })
  
  function updateSelectedCount1() {
    const selectedSeats1 = document.querySelectorAll('.row1 .seat1.selected1')
    const selectedSeatsCount1 = selectedSeats1.length
    count1.innerText = selectedSeatsCount1
  }