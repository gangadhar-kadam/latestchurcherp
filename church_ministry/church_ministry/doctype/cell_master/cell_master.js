// set region and zone from church group and zone trigger

frappe.ui.form.on("Cell Master", "onload", function(frm) {
	if (in_list(user_roles, "Zonal Pastor")){
    set_field_permlevel('zone',1);
    set_field_permlevel('region',2);
  }
	else if (in_list(user_roles, "Group Church Pastor")){
    set_field_permlevel('zone',2);
    set_field_permlevel('region',2);
  }
  else if(in_list(user_roles, "Church Pastor")){
  	set_field_permlevel('church',1);
  	set_field_permlevel('church_group',2)
  	set_field_permlevel('zone',2);
    set_field_permlevel('region',2);
  }
  else if(in_list(user_roles, "PCF Leader")){
  	set_field_permlevel('pcf',1);
  	set_field_permlevel('church',2);
  	set_field_permlevel('church_group',2)
  	set_field_permlevel('zone',2);
    set_field_permlevel('region',2);
  }
  else if(in_list(user_roles, "Senior Cell Leader")){
  	set_field_permlevel('senior_cell',1);
  	set_field_permlevel('pcf',2);
  	set_field_permlevel('church',2);
  	set_field_permlevel('church_group',2)
  	set_field_permlevel('zone',2);
    set_field_permlevel('region',2);
  }
  else if(in_list(user_roles, "Cell Leader")){
  	set_field_permlevel('senior_cell',2);
  	set_field_permlevel('pcf',2);
  	set_field_permlevel('church',2);
  	set_field_permlevel('church_group',2)
  	set_field_permlevel('zone',2);
    set_field_permlevel('region',2);
  }
});

cur_frm.cscript.refresh =function(doc, dt, dn){
    get_server_fields('set_higher_values','','',doc, dt, dn, 1, function(r){
      refresh_field('region');
      refresh_field('zone');
      refresh_field('church_group');
      refresh_field('church');
      refresh_field('pcf');
      refresh_field('senior_cell');
    });
}

cur_frm.add_fetch("senior_cell", "pcf", "pcf");
cur_frm.add_fetch("senior_cell", "church", "church");
cur_frm.add_fetch("senior_cell", "church_group", "church_group");
cur_frm.add_fetch("senior_cell", "region", "region");
cur_frm.add_fetch("senior_cell", "zone", "zone");


cur_frm.add_fetch("pcf", "church", "church");
cur_frm.add_fetch("pcf", "church_group", "church_group");
cur_frm.add_fetch("pcf", "region", "region");
cur_frm.add_fetch("pcf", "zone", "zone");

cur_frm.add_fetch("church", "church_group", "church_group");
cur_frm.add_fetch("church", "region", "region");
cur_frm.add_fetch("church", "zone", "zone");

cur_frm.add_fetch("church_group", "region", "region");
cur_frm.add_fetch("church_group", "zone", "zone");

cur_frm.add_fetch("zone", "region", "region");