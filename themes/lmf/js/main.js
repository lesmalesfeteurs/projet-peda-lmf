$(function() {
    
    /**
     * Gestion des bordures des titres
     **/
    $("#content-block-1 h2").append("<div class='borderBottom' id='content-block-1_borderBottom'></div>");
    $("#sidebar_first-block-2 h2").append("<div class='borderBottom' id='sidebar_first-block-2_borderBottom'></div>");
    $("#content-views-activites-front_next h2").append("<div class='borderBottom' id='content-views-activites-front_next_borderBottom'></div>");
    $("#content-views-activites-planning h2").append("<div class='borderBottom' id='content-views-activites-planning_borderBottom'></div>");
    $("#content-views-9c677540f80b1e8b4c4b851ef494ff35 h2").append("<div class='borderBottom' id='content-views-9c677540f80b1e8b4c4b851ef494ff35_borderBottom'></div>");
    $("#content-views-partenaires-list h2").append("<div class='borderBottom' id='content-views-partenaires-list_borderBottom'></div>");
    $("#content-views-membres_ca-block h2").append("<div class='borderBottom' id='content-views-membres_ca-block_borderBottom'></div>");
    $("#content-views-activites-block_4 h2").append("<div class='borderBottom' id='content-views-activites-block_4_borderBottom'></div>");
    $("#content-views-trombinoscope-block h2").append("<div class='borderBottom' id='content-views-trombinoscope-block_borderBottom'></div>");
    $("#content-views-gallerie_photo-block_1 h2").append("<div class='borderBottom' id='content-views-gallerie_photo-block_1_borderBottom'></div>");
    $("#content-views-gallerie_photo-block_2 h2").append("<div class='borderBottom' id='content-views-gallerie_photo-block_1_borderBottom'></div>");
    $("#content-views-messages_utilisateurs-block h2").append("<div class='borderBottom' id='content-views-messages_utilisateurs-block_borderBottom'></div>");
    
    
    /**
     * Gestion du background
     **/
     $('#page-wrapper').css({'min-height':jQuery(window).height()});

    /**
     * Gestion du popbox de connexion
     **/
    var popbox_open = false
    $('#connexion li.popbox a.open').click(function(e){
        e.preventDefault();
        if(!popbox_open){
            $.get('user/login', function(data) {
                    var form=$(data).find("#content-system-main .content");
                    var popbox = "<div class='collapse'><div class='box'><div class='arrow'></div><div class='arrow-border'></div><div id='connexTitle'>Se connecter</div><div class='close'>X</div>"
                    //console.log(form);
                    $('#connexion li.popbox').append(popbox+form.html());
                    popbox_open=true;
                    
                    $('.close').click(function(){
                        /*console.log('oki');*/
                        $('.collapse').css({'visibility':'hidden'});
                        popbox_open=false;
                });
                    
            });
        }else{
            $('.collapse').css({'visibility':'hidden'});
            popbox_open=false;
        }
        
        
        
    });
    
    /*
     * Gestion du menu
     **/
    $('#main-menu li:nth-child(1)').addClass('menu_home');
    $('#main-menu li:nth-child(2)').addClass('menu_activites');
    $('#main-menu li:nth-child(3)').addClass('menu_association');
    $('#main-menu li:nth-child(4)').addClass('menu_partenaires');
    $('#main-menu li:nth-child(5)').addClass('menu_photos');
    $('#main-menu li:nth-child(6)').addClass('menu_contact');
    $('#main-menu li:nth-child(7)').addClass('menu_membre');
    $('#main-menu li').addClass('menu_principal');
    $('#main-menu li:nth-child(7)').removeClass('menu_principal');
 
 
 
    /**
     * Gestion du menu Membre
     **/
    
    /* augmente la taille des onglets si le menu membre n'est pas affiche*/
    if ($('#main-menu .menu li').length==6){
        $('#main-menu .menu li').css({'width': '8.7em'});
    }
    
    /* gere l'affichage du sous-menu*/
    $('#main-menu .expanded *').hover(
        function(){
            $('#main-menu ul li ul').addClass('visible');
        },function(){
            $('#main-menu ul li ul').removeClass('visible');
        });
 
 
 
     /**
     * Gestion de la gmap
     **/
    if($('#activite .field-name-field-address-ref')){
        var link = $('#activite .field-name-field-address-ref a').attr('href');
        //console.log(link);
        $.get(link, function(data) {
            var map=$(data).find(".field-item div");
            $('#activite .field-name-field-address-ref').html(map);
        });
    }
    
    /**
     * Gestion du bouton participation
     **/
    /*if ($('.signup_field_event_ref a')){
        var link = $('.signup_field_event_ref a').attr('href');
        $.get(link, function(d) {
            var buttons=$(d).find('.content form');
            console.log($(d).find('.content form'));

            buttons.find('.vertical-tabs-panes').addClass('element-invisible');
            buttons.find('.form-actions').addClass('element-invisible');
            buttons.find('#edit-field-event-ref').addClass('element-invisible');
            buttons.find('.form-item label[for=edit-field-participation-und]').addClass('element-invisible');

            $('.signup_field_event_ref').html(buttons);
        });

        $('#edit-field-participation label').click(function() {
            console.log("click");
            /*$.get(link, function(d) {
                $.ajax({
                    type: 'POST',
                    url: url,
                    data: {
                        field_event_ref[und][0][nid]: '53',
                        field_event_ref[und]: $(d).find('.content form input[name=field_participation[und]]').val(),
                        changed: $(d).find('.content form input[name=changed]').val(),
                        form_build_id: $(d).find('.content form input[name=form_build_id]').val(),
                        form_token: $(d).find('.content form input[name=form_token]').val(),
                        form_id: $(d).find('.content form input[name=form_id]').val(),
                        comment: '1',
                        name: 'admin',
                        status: '1',
                        op: $(d).find('.content form input[name=op]').val(),
                    },
                    success: success,
                });
            });*//*
            
        });
    }*/
    
    
    
    
    /*
     *Suppression d'elements inutile
     **/

    /*if($('#profil')){
         //console.log('ok');
         $('h1').css({'position':'absolute','z-index':'-99'});
         $('#profil h2').css({'display':'none'});
     }
     
     if($('.field-name-field-participation')){
         $('.vertical-tabs').css({'display':'none'});
     }
     */
     /*
    if($('#activite') && $('.geolocation-googlemaps-static')){
         $('.tabs').css({'display':'none'});
     }*/
     
     
     
     if ($('.signup_field_event_ref a')){
        //console.log($('.signup_field_event_ref a'));
        $('li.signup_field_event_ref a').text('Participer')
     }
     
     
     /**
     * Gestion de la page d'inscription
     **/
     
    if($('#user-register-form').length == '1' && window.location.pathname.search('register') !== -1 ){
         
        var oldContent = $('.content').html();
        var textIntro = "<div id='inscription'><div id=\"step1\">"+
		"<span class=\"stepNumber\">1</span>"+
		"<div class=\"stepTitle\">Inscription sur le site</div>"+
		"<hr />"+
		"<div class=\"stepDesc\">"+
			"<p>L'inscription sur le site est GRATUITE. Elle vous permet de consulter et de rejoindre les activités PUBLIQUES.</p>"+
			"<p>Pendant UN MOIS, vous aurez accès au statut d'adhérent qui vous confère la possibilité de créer ou de rejoindre n'importe quelle activité.</p>"+
			"<p>Après cette période, une cotisation sera demandée.</p>"+
		"</div>"+
	"</div>"+
	
	"<div id=\"step2\">"+
		"<span class=\"stepNumber\">2</span>"+
		"<div class=\"stepTitle\">Payer la cotisation</div>"+
		"<hr />"+
		"<div class=\"stepDesc\">"+
			"<p>La cotisation annuelle est de 30€. Elle vous confère le statut d'adhérent, ce qui vous donne accès à l'ensemble des activités.</p>"+
		"</div>"+
	"</div>"+
	"<div id=\"step3\">"+
		"<span class=\"stepNumber\">3</span>"+
		"<div class=\"stepTitle\">Participer à la vie de l'association</div>"+
		"<hr />	"+
		"<div class=\"stepDesc\">"+
			"<p>Le site vous permet de créer une activité et de participer à d'autres. Vous pourrez consulter les archives des fichiers rédigés par le CA ou les commissions.</p>"+
		"</div>"+	
	"</div></div>";
    
        $('#content-system-main').html(textIntro+oldContent);
        
        $('.tabs').css({'display':'none'});
     }
     
     /* Quick fixes */
     $(".form-item.form-type-checkbox.form-item-contact label").text("Autoriser les adhérents à me contacter par l'intermédiaire de ce site");
     $("input#edit-field-event-datetime-und-add-more.field-add-more-submit.form-submit.ajax-processed").attr("value", "Je peux réaliser l'activité à une autre date");
    $('#edit-field-recevoir-le-planning-und').children('div:first-child').remove();
     $('.node-form.node-event-form').prepend('<p>Votre activité sera validée sous réserve de validation de la Commission Planning.</p>');
});
