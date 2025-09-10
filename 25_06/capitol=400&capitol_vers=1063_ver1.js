var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    CAP1_a();
});

$(function () {
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        CAP1_a();
    });
});

// helper: păstrează numărul cu exact 'decimals' zecimale; dacă e 0 -> gol ("")
function formatVal(value, decimals = 0) {
    const num = Number(value || 0);
    const fixed = num.toFixed(decimals);   // ex: 12.0 -> "12.0"
    return (parseFloat(fixed) === 0 ? "" : fixed);
}

function CAP1_a() {

    //-------------------------------Rind 6100-----------------------------------------------------
    var R6100_C1 = $("#45_400_83246_6100_1");
    var R6100_C2 = $("#45_400_83246_6100_2");

    //-------------------------------Rind 6110-----------------------------------------------------
    var R6110_C1 = $("#45_400_83247_6110_1");
    var R6110_C2 = $("#45_400_83247_6110_2");

    //-------------------------------Rind 6120-----------------------------------------------------
    var R6120_C1 = $("#45_400_83248_6120_1");
    var R6120_C2 = $("#45_400_83248_6120_2");

    //-------------------------------Rind 6130-----------------------------------------------------
    var R6130_C1 = $("#45_400_83249_6130_1");
    var R6130_C2 = $("#45_400_83249_6130_2");

    //----------readOnly input -----------------------  
    R6100_C1.prop("readonly", true);
    R6100_C2.prop("readonly", true);

    //-------------------------------Rind 6100-----------------------------------------------------
    R6100_C1.val(formatVal(
        Number(R6110_C1.val()) +
        Number(R6120_C1.val()) +
        Number(R6130_C1.val()), 0));

    R6100_C2.val(formatVal(
        Number(R6110_C2.val()) +
        Number(R6120_C2.val()) +
        Number(R6130_C2.val()), 0));
}
