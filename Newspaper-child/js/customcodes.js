(function() {
    tinymce.create('tinymce.plugins.video_sr', {
        init : function(ed, url) {
            ed.addButton('video_sr', {
                title : 'Aggiungi video',
                image : url+"/video_sr.png",
                onclick : function() {
                     ed.selection.setContent('[video_sr url="" autoplay="true" width="100%" height="300" mute="false" repeat="false"]' + ed.selection.getContent());
 
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('video_sr', tinymce.plugins.video_sr);
})();