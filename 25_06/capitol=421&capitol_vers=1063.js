var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    CAP4();
});

$(function () {
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        CAP4();
    });
});

function CAP4() {

    //-------------------------------Rind 8100-----------------------------------------------------

    var R8100_C1 = $("#45_421_83320_8100_1");
    var R8100_C2 = $("#45_421_83320_8100_2");
    var R8100_C3 = $("#45_421_83320_8100_3");
    var R8100_C4 = $("#45_421_83320_8100_4");
    var R8100_C5 = $("#45_421_83320_8100_5");
    var R8100_C6 = $("#45_421_83320_8100_6");
    var R8100_C7 = $("#45_421_83320_8100_7");

    //-------------------------------Rind 8110-----------------------------------------------------

    var R8110_C1 = $("#45_421_83321_8110_1");
    var R8110_C2 = $("#45_421_83321_8110_2");
    var R8110_C3 = $("#45_421_83321_8110_3");
    var R8110_C4 = $("#45_421_83321_8110_4");
    var R8110_C5 = $("#45_421_83321_8110_5");
    var R8110_C6 = $("#45_421_83321_8110_6");
    var R8110_C7 = $("#45_421_83321_8110_7");

    //-------------------------------Rind 8120-----------------------------------------------------

    var R8120_C1 = $("#45_421_83322_8120_1");
    var R8120_C2 = $("#45_421_83322_8120_2");
    var R8120_C3 = $("#45_421_83322_8120_3");
    var R8120_C4 = $("#45_421_83322_8120_4");
    var R8120_C5 = $("#45_421_83322_8120_5");
    var R8120_C6 = $("#45_421_83322_8120_6");
    var R8120_C7 = $("#45_421_83322_8120_7");

    //-------------------------------Rind 8130-----------------------------------------------------

    var R8130_C1 = $("#45_421_83323_8130_1");
    var R8130_C2 = $("#45_421_83323_8130_2");
    var R8130_C3 = $("#45_421_83323_8130_3");
    var R8130_C4 = $("#45_421_83323_8130_4");
    var R8130_C5 = $("#45_421_83323_8130_5");
    var R8130_C6 = $("#45_421_83323_8130_6");
    var R8130_C7 = $("#45_421_83323_8130_7");

    //-------------------------------Rind 8140-----------------------------------------------------

    var R8140_C1 = $("#45_421_83324_8140_1");
    var R8140_C2 = $("#45_421_83324_8140_2");
    var R8140_C3 = $("#45_421_83324_8140_3");
    var R8140_C4 = $("#45_421_83324_8140_4");
    var R8140_C5 = $("#45_421_83324_8140_5");
    var R8140_C6 = $("#45_421_83324_8140_6");
    var R8140_C7 = $("#45_421_83324_8140_7");

    //-------------------------------Rind 8150-----------------------------------------------------

    var R8150_C1 = $("#45_421_83325_8150_1");
    var R8150_C2 = $("#45_421_83325_8150_2");
    var R8150_C3 = $("#45_421_83325_8150_3");
    var R8150_C4 = $("#45_421_83325_8150_4");
    var R8150_C5 = $("#45_421_83325_8150_5");
    var R8150_C6 = $("#45_421_83325_8150_6");
    var R8150_C7 = $("#45_421_83325_8150_7");

    //-------------------------------Rind 8160-----------------------------------------------------

    var R8160_C1 = $("#45_421_83326_8160_1");
    var R8160_C2 = $("#45_421_83326_8160_2");
    var R8160_C3 = $("#45_421_83326_8160_3");
    var R8160_C4 = $("#45_421_83326_8160_4");
    var R8160_C5 = $("#45_421_83326_8160_5");
    var R8160_C6 = $("#45_421_83326_8160_6");
    var R8160_C7 = $("#45_421_83326_8160_7");

    //-------------------------------Rind 8170-----------------------------------------------------

    var R8170_C1 = $("#45_421_83327_8170_1");
    var R8170_C2 = $("#45_421_83327_8170_2");
    var R8170_C3 = $("#45_421_83327_8170_3");
    var R8170_C4 = $("#45_421_83327_8170_4");
    var R8170_C5 = $("#45_421_83327_8170_5");
    var R8170_C6 = $("#45_421_83327_8170_6");
    var R8170_C7 = $("#45_421_83327_8170_7");

    //-------------------------------Rind 8200-----------------------------------------------------

    var R8200_C1 = $("#45_421_83328_8200_1");
    var R8200_C2 = $("#45_421_83328_8200_2");
    var R8200_C3 = $("#45_421_83328_8200_3");
    var R8200_C4 = $("#45_421_83328_8200_4");
    var R8200_C5 = $("#45_421_83328_8200_5");
    var R8200_C6 = $("#45_421_83328_8200_6");
    var R8200_C7 = $("#45_421_83328_8200_7");

    //----------readOnly input -----------------------  

    R8100_C1.prop("readonly", true);
    R8100_C2.prop("readonly", true);
    R8100_C3.prop("readonly", true);
    R8100_C4.prop("readonly", true);
    R8100_C5.prop("readonly", true);
    R8100_C6.prop("readonly", true);
    R8100_C7.prop("readonly", true);

    R8110_C1.prop("readonly", true);

    R8120_C1.prop("readonly", true);

    R8130_C1.prop("readonly", true);

    R8140_C1.prop("readonly", true);

    R8150_C1.prop("readonly", true);

    R8160_C1.prop("readonly", true);

    R8170_C1.prop("readonly", true);

    R8200_C1.prop("readonly", true);

    //-------------------------------Rind 8100 pe rand-----------------------------------------------------

    R8100_C1.val(Number(parseFloat(Number(R8100_C2.val())) +
        parseFloat(Number(R8100_C3.val())) +
        parseFloat(Number(R8100_C4.val()))).toFixed(0));

    //-------------------------------Rind 8110 pe rand-----------------------------------------------------

    R8110_C1.val(Number(parseFloat(Number(R8110_C2.val())) +
        parseFloat(Number(R8110_C3.val())) +
        parseFloat(Number(R8110_C4.val()))).toFixed(0));

    //-------------------------------Rind 8120 pe rand-----------------------------------------------------

    R8120_C1.val(Number(parseFloat(Number(R8120_C2.val())) +
        parseFloat(Number(R8120_C3.val())) +
        parseFloat(Number(R8120_C4.val()))).toFixed(0));

    //-------------------------------Rind 8130 pe rand-----------------------------------------------------

    R8130_C1.val(Number(parseFloat(Number(R8130_C2.val())) +
        parseFloat(Number(R8130_C3.val())) +
        parseFloat(Number(R8130_C4.val()))).toFixed(0));

    //-------------------------------Rind 8140 pe rand-----------------------------------------------------

    R8140_C1.val(Number(parseFloat(Number(R8140_C2.val())) +
        parseFloat(Number(R8140_C3.val())) +
        parseFloat(Number(R8140_C4.val()))).toFixed(0));

    //-------------------------------Rind 8150 pe rand-----------------------------------------------------

    R8150_C1.val(Number(parseFloat(Number(R8150_C2.val())) +
        parseFloat(Number(R8150_C3.val())) +
        parseFloat(Number(R8150_C4.val()))).toFixed(0));

    //-------------------------------Rind 8160 pe rand-----------------------------------------------------

    R8160_C1.val(Number(parseFloat(Number(R8160_C2.val())) +
        parseFloat(Number(R8160_C3.val())) +
        parseFloat(Number(R8160_C4.val()))).toFixed(0));

    //-------------------------------Rind 8170 pe rand-----------------------------------------------------

    R8170_C1.val(Number(parseFloat(Number(R8170_C2.val())) +
        parseFloat(Number(R8170_C3.val())) +
        parseFloat(Number(R8170_C4.val()))).toFixed(0));

    //-------------------------------Rind 8200 pe rand-----------------------------------------------------

    R8200_C1.val(Number(parseFloat(Number(R8200_C2.val())) +
        parseFloat(Number(R8200_C3.val())) +
        parseFloat(Number(R8200_C4.val()))).toFixed(0));

    //-------------------------------Rind 8100 pe coloana-----------------------------------------------------

    R8100_C1.val(Number(parseFloat(Number(R8110_C1.val())) +
        parseFloat(Number(R8120_C1.val())) +
        parseFloat(Number(R8130_C1.val())) +
        parseFloat(Number(R8140_C1.val())) +
        parseFloat(Number(R8150_C1.val())) +
        parseFloat(Number(R8160_C1.val())) +
        parseFloat(Number(R8170_C1.val()))).toFixed(0));

    R8100_C2.val(Number(parseFloat(Number(R8110_C2.val())) +
        parseFloat(Number(R8120_C2.val())) +
        parseFloat(Number(R8130_C2.val())) +
        parseFloat(Number(R8140_C2.val())) +
        parseFloat(Number(R8150_C2.val())) +
        parseFloat(Number(R8160_C2.val())) +
        parseFloat(Number(R8170_C2.val()))).toFixed(0));

    R8100_C3.val(Number(parseFloat(Number(R8110_C3.val())) +
        parseFloat(Number(R8120_C3.val())) +
        parseFloat(Number(R8130_C3.val())) +
        parseFloat(Number(R8140_C3.val())) +
        parseFloat(Number(R8150_C3.val())) +
        parseFloat(Number(R8160_C3.val())) +
        parseFloat(Number(R8170_C3.val()))).toFixed(0));

    R8100_C4.val(Number(parseFloat(Number(R8110_C4.val())) +
        parseFloat(Number(R8120_C4.val())) +
        parseFloat(Number(R8130_C4.val())) +
        parseFloat(Number(R8140_C4.val())) +
        parseFloat(Number(R8150_C4.val())) +
        parseFloat(Number(R8160_C4.val())) +
        parseFloat(Number(R8170_C4.val()))).toFixed(0));

    R8100_C5.val(Number(parseFloat(Number(R8110_C5.val())) +
        parseFloat(Number(R8120_C5.val())) +
        parseFloat(Number(R8130_C5.val())) +
        parseFloat(Number(R8140_C5.val())) +
        parseFloat(Number(R8150_C5.val())) +
        parseFloat(Number(R8160_C5.val())) +
        parseFloat(Number(R8170_C5.val()))).toFixed(0));

    R8100_C6.val(Number(parseFloat(Number(R8110_C6.val())) +
        parseFloat(Number(R8120_C6.val())) +
        parseFloat(Number(R8130_C6.val())) +
        parseFloat(Number(R8140_C6.val())) +
        parseFloat(Number(R8150_C6.val())) +
        parseFloat(Number(R8160_C6.val())) +
        parseFloat(Number(R8170_C6.val()))).toFixed(0));

    R8100_C7.val(Number(parseFloat(Number(R8110_C7.val())) +
        parseFloat(Number(R8120_C7.val())) +
        parseFloat(Number(R8130_C7.val())) +
        parseFloat(Number(R8140_C7.val())) +
        parseFloat(Number(R8150_C7.val())) +
        parseFloat(Number(R8160_C7.val())) +
        parseFloat(Number(R8170_C7.val()))).toFixed(0));
}