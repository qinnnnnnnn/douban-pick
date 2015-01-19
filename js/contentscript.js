(function(){
  var box = $('#db-isay'),
      ul = box.find('ul'),
      lastchild = ul.find('.commodity-link');
  var div = $('<div>').html('<div class="mod"><ul class="menu-list"><li class="on"><a href="?tag=0">全部</a></li></ul></div>');
  box.after(div);
})(jQuery)