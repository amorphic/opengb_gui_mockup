function switchContent(content) {
  $(".content").hide();
  console.log("." + content);
  $("#" + content).show();
} 
