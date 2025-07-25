// priority: 0

console.info('-KubeJS- Tinkers\' Construct server script loaded.')

ServerEvents.recipes(event => {
	//remove slimelytra due to redundancy
	event.remove({id:'tconstruct:tools/armor/slimelytra'})
	//processing for crushed raw cobalt
	event.custom({
		type: 'tconstruct:melting',
		ingredient: {item:'kubejs:crushed_raw_cobalt'},
		result: {
			amount: 90,
			tag: 'forge:molten_cobalt'
		},
		temperature: 950,
		time: 64
	})
	let obliterated_items = [
		'tconstruct:repair_kit',
		'tconstruct:pick_head',
		'tconstruct:small_axe_head',
		'tconstruct:small_blade',
		'tconstruct:adze_head',
		'tconstruct:hammer_head',
		'tconstruct:broad_axe_head',
		'tconstruct:broad_blade',
		'tconstruct:large_plate',
		'tconstruct:tool_handle',
		'tconstruct:tool_binding',
		'tconstruct:tough_handle',
		'tconstruct:tough_binding',
		'tconstruct:bow_limb',
		'tconstruct:bow_grip',
		'tconstruct:bowstring',
		'tconstruct:helmet_plating',
		'tconstruct:chestplate_plating',
		'tconstruct:leggings_plating',
		'tconstruct:boots_plating',
		'tconstruct:maille',
		'tconstruct:shield_core',
		'tconstruct:helmet_plating_dummy',
		'tconstruct:chestplate_plating_dummy',
		'tconstruct:leggings_plating_dummy',
		'tconstruct:boots_plating_dummy',
		'tconstruct:battlesign',
		'tconstruct:broad_axe',
		'tconstruct:cleaver',
		'tconstruct:crossbow',
		'tconstruct:dagger',
		'tconstruct:earth_staff',
		'tconstruct:ender_staff',
		'tconstruct:excavator',
		'tconstruct:flint_and_brick',
		'tconstruct:hand_axe',
		'tconstruct:ichor_staff',
		'tconstruct:kama',
		'tconstruct:longbow',
		'tconstruct:mattock',
		'tconstruct:melting_pan',
		'tconstruct:pickadze',
		'tconstruct:pickaxe',
		'tconstruct:plate_boots',
		'tconstruct:plate_chestplate',
		'tconstruct:plate_helmet',
		'tconstruct:plate_leggings',
		'tconstruct:plate_shield',
		'tconstruct:scythe',
		'tconstruct:sky_staff',
		'tconstruct:sledge_hammer',
		'tconstruct:slime_boots',
		'tconstruct:slime_chestplate',
		'tconstruct:slime_helmet',
		'tconstruct:slime_leggings',
		'tconstruct:swasher',
		'tconstruct:sword',
		'tconstruct:travelers_boots',
		'tconstruct:travelers_chestplate',
		'tconstruct:travelers_helmet',
		'tconstruct:travelers_leggings',
		'tconstruct:travelers_shield',
		'tconstruct:vein_hammer',
		'tconstruct:war_pick',
		'tconstruct:part_builder',
		'tconstruct:tinker_station',
		'tconstruct:modifier_worktable',
		'tconstruct:tinkers_chest',
		'tconstruct:part_chest',
		'tconstruct:modifier_crystal'
	]
	obliterated_items.forEach(item => {
		event.remove({id:item})
	})
})