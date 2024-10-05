
document.addEventListener('DOMContentLoaded', function () {
    
   
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var btnUpload = $("#upload_file"),
    btnOuter = $(".button_outer"),
    btnText = $(".btn_upload");

    btnUpload.on("change", function(e){
        var ext = btnUpload.val().split('.').pop().toLowerCase();
    
        if(ext !== 'pdf') {
            $(".error_msg").text("Archivo no válido, solo se permiten archivos PDF.");
    
            // Limpiar cualquier mensaje anterior de éxito si subes un archivo no válido
            $("#uploaded_view").html(''); // Limpia el contenedor del mensaje previo
        } else {
            $(".error_msg").text(""); // Limpia el mensaje de error si es un archivo válido
    
            // Limpiar cualquier mensaje anterior de éxito antes de subir un nuevo archivo válido
            $("#uploaded_view").html(''); // Limpia el contenedor antes de mostrar el nuevo mensaje
    
            // Simular la subida del archivo
            setTimeout(function(){
                var uploadedFile = URL.createObjectURL(e.target.files[0]);
                $("#uploaded_view").html('<p>PDF subido correctamente.</p>').addClass("show");
            }, 2000);
        }
    });
    
// Función para eliminar el archivo
$(".file_remove").on("click", function(e){
    $("#uploaded_view").removeClass("show");
    $("#uploaded_view").find("img").remove();
    
    // Resetear el estado de las clases
    btnOuter.removeClass("file_uploading file_uploaded");

    // Resetear el campo de entrada para permitir subir otro archivo
    btnUpload.val('');  // Esto limpia el valor del input file

    // Restaurar el texto original del botón
    btnText.text("Subir Archivo");
});


});




window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/www.make-it-neat.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.5.5"
    }
};
/*! This file is auto-generated */
! function (i, n) {
    var o, s, e;

    function c(e) {
        try {
            var t = {
                supportTests: e,
                timestamp: (new Date).valueOf()
            };
            sessionStorage.setItem(o, JSON.stringify(t))
        } catch (e) {}
    }

    function p(e, t, n) {
        e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
        var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data),
            r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e
                .getImageData(0, 0, e.canvas.width, e.canvas.height).data));
        return t.every(function (e, t) {
            return e === r[t]
        })
    }

    function u(e, t, n) {
        switch (t) {
            case "flag":
                return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !
                    1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e,
                        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                        "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
                        );
            case "emoji":
                return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b")
        }
        return !1
    }

    function f(e, t, n) {
        var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ?
            new OffscreenCanvas(300, 150) : i.createElement("canvas"),
            a = r.getContext("2d", {
                willReadFrequently: !0
            }),
            o = (a.textBaseline = "top", a.font = "600 32px Arial", {});
        return e.forEach(function (e) {
            o[e] = t(a, e, n)
        }), o
    }

    function t(e) {
        var t = i.createElement("script");
        t.src = e, t.defer = !0, i.head.appendChild(t)
    }
    "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = {
        everything: !0,
        everythingExceptFlag: !0
    }, e = new Promise(function (e) {
        i.addEventListener("DOMContentLoaded", e, {
            once: !0
        })
    }), new Promise(function (t) {
        var n = function () {
            try {
                var e = JSON.parse(sessionStorage.getItem(o));
                if ("object" == typeof e && "number" == typeof e.timestamp && (new Date)
                    .valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests)
                    return e.supportTests
            } catch (e) {}
            return null
        }();
        if (!n) {
            if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas &&
                "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob)
            try {
                var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(),
                        p.toString()
                    ].join(",") + "));",
                    r = new Blob([e], {
                        type: "text/javascript"
                    }),
                    a = new Worker(URL.createObjectURL(r), {
                        name: "wpTestEmojiSupports"
                    });
                return void(a.onmessage = function (e) {
                    c(n = e.data), a.terminate(), t(n)
                })
            } catch (e) {}
            c(n = f(s, u, p))
        }
        t(n)
    }).then(function (e) {
        for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n
            .supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports
                .everythingExceptFlag && n.supports[t]);
        n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n
            .DOMReady = !1, n.readyCallback = function () {
                n.DOMReady = !0
            }
    }).then(function () {
        return e
    }).then(function () {
        var e;
        n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e
            .concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)))
    }))
}((window, document), window._wpemojiSettings);