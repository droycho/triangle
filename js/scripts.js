$(document).ready(function() {
  $("form").submit(function(event) {
    var side1= $("#side1").val();
    var side2= $("#side2").val();
    var side3= $("#side3").val();
    console.log(side1, side2, side3);
    if (side1 === side2 && side2 === side3 && side1 != 0 && side2 != 0 && side3 !=0) {
      $(".equilateral").show();
      $(".isosceles").hide();
      $(".scalene").hide();
      // $(this).remove();
    } else if (side1 === side2 && side2 != side3 || side2 === side3 && side3 != side1 || side1 === side3 && side3 != side2) {
      $(".isosceles").show();
      $(".scalene").hide();
      $(".equilateral").hide();
      // $(this).remove();
    } else if (side1 != side2 && side2 != side3 && side3 != side1) {
      $(".scalene").show();
      $(".isosceles").hide();
      $(".equilateral").hide();
      // $(this).remove();
    } else {
      alert("Enter a value for each side!")
    }
    event.preventDefault();
  });
  // $(".results1").submit(function () {
  //   $(this).remove();
  // })
});
