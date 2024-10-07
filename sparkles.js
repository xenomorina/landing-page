
<script type="text/javascript">
party.resolvableShapes["flower1"] = '<img src="https://karinaroush.com/wp-content/uploads/2024/04/redflowerr.png" style="overflow:clip !important" height="20px"/>';
party.resolvableShapes["flower2"] = '<img src="https://karinaroush.com/wp-content/uploads/2024/04/pinkflower.png" style="overflow:clip !important" height="20px"/>';
party.resolvableShapes["sparkle"] = '<img src="https://karinaroush.com/wp-content/uploads/2024/04/pinksparkle.png" style="overflow:clip !important" height="20px"/>';
party.resolvableShapes["heart"] = '<img src="https://karinaroush.com/wp-content/uploads/2024/04/blueheart.png" style="overflow:clip !important" height="20px"/>';

document.querySelector(".confettibutton").addEventListener("click", function() {
  party.sparkles(this, { 
      count: party.variation.range(10, 30),
      shapes: ["flower1", "flower2", "sparkle", "heart"],
      size: party.variation.range(0.4, 1),
  });
})
</script>