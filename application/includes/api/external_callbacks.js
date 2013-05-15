

mw.iframecallbacks = {
    insert_link:function(url, target){

      var url = url.indexOf("http://") === 0 ? url : "http://" + url;

      var target = target || '_self';
      mw.wysiwyg.restore_selection();


         var range = window.getSelection().getRangeAt(0);
         if(range.commonAncestorContainer.nodeName === 'A'){
            $(range.commonAncestorContainer).attr("href", url).attr("target", target);
            return false;
         }
         var start = range.startContainer;
         if(mw.tools.hasParentsWithTag(start, 'a')){
            $(mw.tools.firstParentWithTag(start, 'a')).attr("href", url).attr("target", target);
            return false;
         }
         var link = mw.wysiwyg.findTagAcrossSelection('a');
         if(!!link){
            $(link).attr("href", url);
            $(link).attr("target", target);
         }
         else{
          if(mw.wysiwyg.selection_length()>0){
             var a = mwd.createElement('a');
             a.href = url;
             a.target = target;
             var sel = window.getSelection();
             var range = sel.getRangeAt(0);
             try{
               range.surroundContents(a);
             }
             catch(e){     alert(1)
               mw.wysiwyg.execCommand("CreateLink", false, url);
             }
           }
         else{
             var name =  mw.tools.get_filename(url);
             var extension = url.split('.').pop();
             if(typeof extension != 'undefined'){
               var html = "<a href='" + url + "' target='"+target+"'>" + name + "." + extension + "</a>";
             }
             else{
               var html = "<a href='" + url + "' target='"+target+"'>" + url + "</a>";
             }

             mw.wysiwyg.insert_html(html);
          }
      }

    },
    insert_html:function(html){ return mw.wysiwyg.insert_html(html);},
    insert_image:function(url){ return mw.wysiwyg.insert_image(url);},
    set_bg_image:function(url){ return mw.wysiwyg.set_bg_image(url);},
    fontColor:function(color){ return mw.wysiwyg.fontColor(color);},
    fontbg:function(color){ return mw.wysiwyg.fontbg(color);},
    change_bg_color:function(color){ return mw.wysiwyg.change_bg_color(color);},
    change_border_color:function(color){ return mw.wysiwyg.change_border_color(color);},
    change_shadow_color:function(color){ return mw.wysiwyg.change_shadow_color(color);},
    editimage:function(url){
        mw.image.currentResizing.attr("src", url);
        mw.image.currentResizing.css('height', 'auto');
    },
    add_link_to_menu:function(){

    },
    editlink:function(a,b){
      mw.wysiwyg.restore_selection();
      var link = mw.wysiwyg.findTagAcrossSelection('a');
      link.href = a;
    }

}


