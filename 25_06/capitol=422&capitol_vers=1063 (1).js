var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    CAP5();
});

$(function () {
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        CAP5();
    });
});


// === Integer-only helpers (no display for zero) ===
function toInt(v) {
    const s = (v == null ? "" : String(v)).replace(/\s+/g, "");
    const n = parseInt(s, 10);
    return Number.isNaN(n) ? 0 : n;
}
function formatInt(n) {
    return n === 0 ? "" : String(n);
}
function setFormatted($el, total) {
    const out = formatInt(total);
    $el.val(out).prop("value", out);
}
function sumVals() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += toInt(arguments[i].val());
    }
    return total;
}

function CAP5() {

    //-------------------------------Rind 8300-----------------------------------------------------

    var R8300_C2 = $("#45_422_83329_8300_2");

    //-------------------------------Rind 8310-----------------------------------------------------

    var R8310_C2 = $("#45_422_83330_8310_2");

    //-------------------------------Rind 8320-----------------------------------------------------

    var R8320_C2 = $("#45_422_83331_8320_2");

    //-------------------------------Rind 8330-----------------------------------------------------

    var R8330_C2 = $("#45_422_83332_8330_2");

    //-------------------------------Rind 8340-----------------------------------------------------

    var R8340_C2 = $("#45_422_83333_8340_2");

    //-------------------------------Rind 8350-----------------------------------------------------

    var R8350_C2 = $("#45_422_83334_8350_2");

    //-------------------------------Rind 8360-----------------------------------------------------

    var R8360_C2 = $("#45_422_83335_8360_2");

    //----------readOnly input -----------------------  

    R8300_C2.prop("readonly", true);

    //-------------------------------Rind 8300-----------------------------------------------------



    //-------------------------------Recalcul integer-only (hide 0)-------------------------------
    setFormatted(R8300_C2, sumVals(R8310_C2, R8320_C2, R8330_C2, R8340_C2, R8350_C2, R8360_C2));

}