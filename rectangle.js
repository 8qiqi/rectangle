/* global Rectangle: true */
$(function() {
  var $width = $('#width'),
      $height = $('#height'),
@@ -6,13 +7,12 @@ $(function() {
      $area = $('#area');

  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());
    var w = $width.val(),
        h = $height.val();

    var p = 2 * (w + h),
        a = w * h;
    var r = new Rectangle(w, h);

    $perimeter.val(p);
    $area.val(a);
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
