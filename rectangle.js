$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#caculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

$btnCal.click(function(){
  var w = Number($width),
      h = Number($height);
  var p=2*(w+h),
      a=w*h;
  $perimeter.val(p);
  $area.val(a);
  })
});
