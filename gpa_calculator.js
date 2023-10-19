form.getElement('sys:school:field:gs_school_gpa_scale').bind('change', function() { 
    recalcGpa();
}).bind('keyup', function() { $(this).triggerHandler('change'); });

form.getElement('sys:school:gpa').bind('change', function() {
    recalcGpa();
}).bind('keyup', function() { $(this).triggerHandler('change'); });

form.getElement('sys:school:key').bind('change', function() {
    recalcGpa();
}).bind('keyup', function() { $(this).triggerHandler('change'); });

function recalcGpa()
{
	const china_fives = ["000013068", "000014454", "000014886", "000014444", "000014645", "000014437", "000014989", "000061389", "000015314", "000012927"];
	var inst_id = form.getElement('sys:school:key').val();
	var gs_gpa = form.getElement('sys:school:gpa').val();
	var gs_scale = form.getElement('sys:school:field:gs_school_gpa_scale').val();
    var gs_gpa_converted = 0;
    // check if val is between 0 and 100
    // if they change the scale from the one we picked, we should not do the calculation anymore
    if (china_fives.includes(inst_id)) {
        if (gs_gpa < 60) {
            gs_gpa_converted = ((gs_gpa-0)/60*1)+0;
        }
        else if (gs_gpa < 70) {
            gs_gpa_converted = ((gs_gpa-60)/10*1)+1;
        }
        else if (gs_gpa < 80) {
            gs_gpa_converted = ((gs_gpa-70)/10*1)+2;
        }
        else if (gs_gpa < 89) {
            gs_gpa_converted = ((gs_gpa-80)/9*0.5)+3;
        }
        else if (gs_gpa < 90) {
            gs_gpa_converted = ((gs_gpa-89)/1*0.1)+3.5;
        }
        else {
            gs_gpa_converted = ((gs_gpa-90)/10*0.4)+3.6;
        }
    } else {
        console.log("it did not work");
    }
	form.getElement('sys:school:field:gs_gpa_converted').val(gs_gpa_converted.toFixed(2));
/* 	if (gs_gpa > 0)
		{
			var recalc = (gs_gpa / 100) * 4.0;
			form.getElement('sys:school:field:gs_gpa_converted').val(inst_id);
			//form.getElement('sys:school:field:gs_gpa_converted').val(recalc.toFixed(2));
		} */
}
