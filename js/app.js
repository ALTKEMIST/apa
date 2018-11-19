var clipboard = new Clipboard('.copyButton');
clipboard.on('success', function(e) {
    $("#cuerpo_modal2").html(`<small style="color:green">El texto ha sido copiado</small> <br>`);
});
clipboard.on('error', function(e) {
    $("#cuerpo_modal2").html(`<small style="color:red">El texto no ha sido copiado</small> <br>`);
});

function generate(){
    var nombre=document.getElementById('name').value;
    var titulo=document.getElementById('titleart').value;
    var anio = document.getElementById('year').value;
    var lect = document.getElementById('leiste').value;
    var asocia = document.getElementById('asociation').value;
    var urli = document.getElementById('url').value;

    $("#modal1").modal("show");
    var string = nombre + ". (" + anio + "). " + titulo + ". " + lect + ", de " + asocia + ". Sitio Web: " + urli;
    $("#cuerpo_modal").html(`${string} <br>`);
    $("#btn-borrar").html('<button class="btn btn-dark btn-lg btn-block copyButton" style="float:right" id="copyButtonId" data-id="@item.Type" data-clipboard-action="copy" data-clipboard-target="p#cuerpo_modal">Copiar</button>');
}

function generate2(){
    var nombre=document.getElementById('name2').value;
    var titulo=document.getElementById('titlebook').value;
    var anio = document.getElementById('year2').value;
    var ciudad = document.getElementById('city').value;
    var pais = document.getElementById('country').value;
    var ed = document.getElementById('editorial').value;
    var pag = document.getElementById('pages').value;
	if (pag.indexOf("-")===-1)
		pag = "p." + pag;
	else 
		pag = "pp." + pag;

    $("#modal1").modal("show");
    var string = nombre + ". (" + anio + "). " + titulo + ". " + ciudad + ", " + pais + ": " + ed + ". " + pag;
    $("#cuerpo_modal").html(`${string} <br>`);
    $("#btn-borrar").html('<button class="btn btn-dark btn-lg btn-block copyButton" style="float:right" id="copyButtonId" data-id="@item.Type" data-clipboard-action="copy" data-clipboard-target="p#cuerpo_modal">Copiar</button>');
}

function generate3(){
    var nombre=document.getElementById('name3').value;
    var titulo=document.getElementById('titleart3').value;
    var anio = document.getElementById('year3').value;
    var rev = document.getElementById('revista').value;
    var vol = document.getElementById('volumen').value;
    var pag = document.getElementById('pages3').value;
	if (pag.indexOf("-")===-1)
		pag = "p." + pag;
	else 
		pag = "pp." + pag;

    $("#modal1").modal("show");
    var string = nombre + ". (" + anio + "). " + titulo + ". " + rev + ", " + vol + ", " + pag;
    $("#cuerpo_modal").html(`${string} <br>`);
    $("#btn-borrar").html('<button class="btn btn-dark btn-lg btn-block copyButton" style="float:right" id="copyButtonId" data-id="@item.Type" data-clipboard-action="copy" data-clipboard-target="p#cuerpo_modal">Copiar</button>');
}

function generate4(){
    var nombre=document.getElementById('name4').value;
    var titulo=document.getElementById('titleart4').value;
    var anio = document.getElementById('year4').value;
    var per = document.getElementById('periodico').value;
    var pag = document.getElementById('pages4').value;
	if (pag.indexOf("-")===-1)
		pag = "p." + pag;
	else 
		pag = "pp." + pag;

    $("#modal1").modal("show");
    var string = nombre + ". (" + anio + "). " + titulo + ". " + per + ", " + pag;
    $("#cuerpo_modal").html(`${string} <br>`);
    $("#btn-borrar").html('<button class="btn btn-dark btn-lg btn-block copyButton" style="float:right" id="copyButtonId" data-id="@item.Type" data-clipboard-action="copy" data-clipboard-target="p#cuerpo_modal">Copiar</button>');
}

function generate5(){
    var nombre=document.getElementById('name5').value;
    var titulo=document.getElementById('titleart5').value;
    var anio = document.getElementById('year5').value;
    var enc = document.getElementById('enciclopedia').value;
    var vol = document.getElementById('volumen5').value;
    var ed = document.getElementById('editorial5').value;
    var pag = document.getElementById('pages5').value;
    var lug = document.getElementById('lugar').value;
	if (pag.indexOf("-")===-1)
		pag = "p." + pag;
	else 
		pag = "pp." + pag;

    $("#modal1").modal("show");
    var string = nombre + ". (" + anio + "). " + titulo + ". En " + enc + "(" + vol + ", " + pag + ") " + lug + ": "+ed+".";
    $("#cuerpo_modal").html(`${string} <br>`);
    $("#btn-borrar").html('<button class="btn btn-dark btn-lg btn-block copyButton" style="float:right" id="copyButtonId" data-id="@item.Type" data-clipboard-action="copy" data-clipboard-target="p#cuerpo_modal">Copiar</button>');
}