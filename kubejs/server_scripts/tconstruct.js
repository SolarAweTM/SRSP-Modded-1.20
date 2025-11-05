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
	let obliterated_items = [ //make tconstruct tools and other related items inaccessible
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
		event.remove({output:item})
	})
	
	event.custom({ //crimson steel tconstruct alloying recipe
		type: 'tconstruct:alloy',
		inputs: [
			{
				amount: 360,
				fluid: 'kubejs:molten_crimson_iron'
			},
			{
				amount: 200,
				fluid: 'tconstruct:blazing_blood'
			},
			{
				amount: 250,
				fluid: 'tconstruct:magma'
			}
		],
		result: {
			amount: 90,
			fluid: 'kubejs:molten_crimson_steel'
		},
		temperature: 950
	})
	
	event.custom({ //crimson iron and steel casting recipes
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/multi_use/ingot'},
		cooling_time: 60,
		fluid: {
			amount: 90,
			fluid: 'kubejs:molten_crimson_iron'
		},
		result: {
			tag: 'forge:ingots/crimson_iron'
		}
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/single_use/ingot'},
		cast_consumed: true,
		cooling_time: 60,
		fluid: {
			amount: 90,
			fluid: 'kubejs:molten_crimson_iron'
		},
		result: {
			tag: 'forge:ingots/crimson_iron'
		}
	})
	event.custom({ //nuggets
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/multi_use/nugget'},
		cooling_time: 20,
		fluid: {
			amount: 10,
			fluid: 'kubejs:molten_crimson_iron'
		},
		result: {
			tag: 'forge:nuggets/crimson_iron'
		}
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/single_use/nugget'},
		cast_consumed: true,
		cooling_time: 20,
		fluid: {
			amount: 10,
			fluid: 'kubejs:molten_crimson_iron'
		},
		result: {
			tag: 'forge:nuggets/crimson_iron'
		}
	})
	event.custom({ //blocks
		type: 'tconstruct:casting_basin',
		cooling_time: 180,
		fluid: {
			amount: 810,
			fluid: 'kubejs:molten_crimson_iron'
		},
		result: {
			tag: 'forge:storage_blocks/crimson_iron'
		}
	})
	event.custom({ //crimson steel
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/multi_use/ingot'},
		cooling_time: 60,
		fluid: {
			amount: 90,
			fluid: 'kubejs:molten_crimson_steel'
		},
		result: {
			tag: 'forge:ingots/crimson_steel'
		}
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/single_use/ingot'},
		cast_consumed: true,
		cooling_time: 60,
		fluid: {
			amount: 90,
			fluid: 'kubejs:molten_crimson_steel'
		},
		result: {
			tag: 'forge:ingots/crimson_steel'
		}
	})
	event.custom({ //nuggets
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/multi_use/nugget'},
		cooling_time: 20,
		fluid: {
			amount: 10,
			fluid: 'kubejs:molten_crimson_steel'
		},
		result: {
			tag: 'forge:nuggets/crimson_steel'
		}
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/single_use/nugget'},
		cast_consumed: true,
		cooling_time: 20,
		fluid: {
			amount: 10,
			fluid: 'kubejs:molten_crimson_steel'
		},
		result: {
			tag: 'forge:nuggets/crimson_steel'
		}
	})
	event.custom({ //blocks
		type: 'tconstruct:casting_basin',
		cooling_time: 180,
		fluid: {
			amount: 810,
			fluid: 'kubejs:molten_crimson_steel'
		},
		result: {
			tag: 'forge:storage_blocks/crimson_steel'
		}
	})
	
	event.custom({ //azure electrum tconstruct alloying recipe
		type: 'tconstruct:alloy',
		inputs: [
			{
				amount: 360,
				fluid: 'kubejs:molten_azure_silver'
			},
			{
				amount: 180,
				tag: 'forge:molten_gold'
			},
			{
				amount: 250,
				tag: 'forge:ender'
			}
		],
		result: {
			amount: 90,
			fluid: 'kubejs:molten_azure_electrum'
		},
		temperature: 1000
	})
	
	event.custom({ //crimson iron and steel casting recipes
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/multi_use/ingot'},
		cooling_time: 60,
		fluid: {
			amount: 90,
			fluid: 'kubejs:molten_azure_silver'
		},
		result: {
			tag: 'forge:ingots/azure_silver'
		}
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/single_use/ingot'},
		cast_consumed: true,
		cooling_time: 60,
		fluid: {
			amount: 90,
			fluid: 'kubejs:molten_azure_silver'
		},
		result: {
			tag: 'forge:ingots/azure_silver'
		}
	})
	event.custom({ //nuggets
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/multi_use/nugget'},
		cooling_time: 20,
		fluid: {
			amount: 10,
			fluid: 'kubejs:molten_azure_silver'
		},
		result: {
			tag: 'forge:nuggets/azure_silver'
		}
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/single_use/nugget'},
		cast_consumed: true,
		cooling_time: 20,
		fluid: {
			amount: 10,
			fluid: 'kubejs:molten_azure_silver'
		},
		result: {
			tag: 'forge:nuggets/azure_silver'
		}
	})
	event.custom({ //blocks
		type: 'tconstruct:casting_basin',
		cooling_time: 180,
		fluid: {
			amount: 810,
			fluid: 'kubejs:molten_azure_silver'
		},
		result: {
			tag: 'forge:storage_blocks/azure_silver'
		}
	})
	event.custom({ //crimson steel
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/multi_use/ingot'},
		cooling_time: 60,
		fluid: {
			amount: 90,
			fluid: 'kubejs:molten_azure_electrum'
		},
		result: {
			tag: 'forge:ingots/azure_electrum'
		}
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/single_use/ingot'},
		cast_consumed: true,
		cooling_time: 60,
		fluid: {
			amount: 90,
			fluid: 'kubejs:molten_azure_electrum'
		},
		result: {
			tag: 'forge:ingots/azure_electrum'
		}
	})
	event.custom({ //nuggets
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/multi_use/nugget'},
		cooling_time: 20,
		fluid: {
			amount: 10,
			fluid: 'kubejs:molten_azure_electrum'
		},
		result: {
			tag: 'forge:nuggets/azure_electrum'
		}
	})
	event.custom({
		type: 'tconstruct:casting_table',
		cast: {tag:'tconstruct:casts/single_use/nugget'},
		cast_consumed: true,
		cooling_time: 20,
		fluid: {
			amount: 10,
			fluid: 'kubejs:molten_azure_electrum'
		},
		result: {
			tag: 'forge:nuggets/azure_electrum'
		}
	})
	event.custom({ //blocks
		type: 'tconstruct:casting_basin',
		cooling_time: 180,
		fluid: {
			amount: 810,
			fluid: 'kubejs:molten_azure_electrum'
		},
		result: {
			tag: 'forge:storage_blocks/azure_electrum'
		}
	})
	
	//melting recipes for silent gear metals
	event.custom({ //raw crimson iron
		type: 'tconstruct:ore_melting',
		byproducts: [],
		ingredient: {tag: 'forge:raw_materials/crimson_iron'},
		rate: 'metal',
		result: {
			amount: 90,
			fluid: 'kubejs:molten_crimson_iron'
		},
		temperature: 900,
		time: 90
	})
	event.custom({ //crimson iron ingot
		type: 'tconstruct:melting',
		ingredient: {tag: 'forge:ingots/crimson_iron'},
		result: {
			amount: 90,
			fluid: 'kubejs:molten_crimson_iron'
		},
		temperature: 900,
		time: 60
	})
	event.custom({ //crimson iron nugget
		type: 'tconstruct:melting',
		ingredient: {tag: 'forge:nuggets/crimson_iron'},
		result: {
			amount: 10,
			fluid: 'kubejs:molten_crimson_iron'
		},
		temperature: 900,
		time: 20
	})
	event.custom({ //crimson steel ingot
		type: 'tconstruct:melting',
		ingredient: {tag: 'forge:ingots/crimson_steel'},
		result: {
			amount: 90,
			fluid: 'kubejs:molten_crimson_steel'
		},
		temperature: 950,
		time: 60
	})
	event.custom({ //crimson steel nugget
		type: 'tconstruct:melting',
		ingredient: {tag: 'forge:nuggets/crimson_steel'},
		result: {
			amount: 10,
			fluid: 'kubejs:molten_crimson_steel'
		},
		temperature: 950,
		time: 20
	})
	event.custom({ //raw azure silver
		type: 'tconstruct:ore_melting',
		byproducts: [],
		ingredient: {tag: 'forge:raw_materials/azure_silver'},
		rate: 'metal',
		result: {
			amount: 90,
			fluid: 'kubejs:molten_azure_silver'
		},
		temperature: 950,
		time: 90
	})
	event.custom({ //azure silver ingot
		type: 'tconstruct:melting',
		ingredient: {tag: 'forge:ingots/azure_silver'},
		result: {
			amount: 90,
			fluid: 'kubejs:molten_azure_silver'
		},
		temperature: 950,
		time: 60
	})
	event.custom({ //azure silver nugget
		type: 'tconstruct:melting',
		ingredient: {tag: 'forge:nuggets/azure_silver'},
		result: {
			amount: 10,
			fluid: 'kubejs:molten_azure_silver'
		},
		temperature: 950,
		time: 20
	})
	event.custom({ //azure electrum ingot
		type: 'tconstruct:melting',
		ingredient: {tag: 'forge:ingots/azure_electrum'},
		result: {
			amount: 90,
			fluid: 'kubejs:molten_azure_electrum'
		},
		temperature: 1000,
		time: 60
	})
	event.custom({ //azure electrum nugget
		type: 'tconstruct:melting',
		ingredient: {tag: 'forge:nuggets/azure_electrum'},
		result: {
			amount: 10,
			fluid: 'kubejs:molten_azure_electrum'
		},
		temperature: 1000,
		time: 20
	})
	//TODO: blaze gold and tyrian steel
})

ServerEvents.tags('fluid', event => { //tag fluids as metal, gem, or other material for unit conversions (i.e. 90mb -> 1 ingot)
	const metalFluids = [
		'kubejs:molten_crimson_iron',
		'kubejs:molten_crimson_steel',
		'kubejs:molten_azure_silver',
		'kubejs:molten_azure_electrum'
	]
	metalFluids.forEach(item => {
		event.add('tconstruct:tooltips/metal', item)
	})
})