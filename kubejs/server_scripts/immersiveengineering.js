// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Immersive Engineering server script loaded.')

ServerEvents.recipes(event => {
	//remove the mechanical component recipes
	event.remove({id:'immersiveengineering:crafting/component_iron'})
	event.remove({id:'immersiveengineering:crafting/component_steel'})
	event.remove({id:'immersiveengineering:blueprint/component_iron'})
	event.remove({id:'immersiveengineering:blueprint/component_steel'})
	//remove blueprint crafting
	event.remove({output:'immersiveengineering:blueprint'})
	//remove various recipes
	let ie_removals = [
		'immersiveengineering:empty_shell',
		'immersiveengineering:casull',
		'immersiveengineering:armor_piercing',
		'immersiveengineering:buckshot',
		'immersiveengineering:he',
		'immersiveengineering:silver',
		'immersiveengineering:dragons_breath',
		'immersiveengineering:potion',
		'immersiveengineering:flare',
		'immersiveengineering:firework',
		'immersiveengineering:homing',
		'immersiveengineering:wolfpack',
		'immersiveengineering:revolver',
		'immersiveengineering:drill',
		'immersiveengineering:railgun',
		'immersiveengineering:chemthrower',
		'immersiveengineering:glider',
		'immersiveengineering:fluid_pipe',
		'immersiveengineering:earmuffs',
		'immersiveengineering:crate',
		'immersiveengineering:wooden_barrel',
		'immersiveengineering:conveyor_basic',
		'immersiveengineering:conveyor_redstone',
		'immersiveengineering:conveyor_dropper',
		'immersiveengineering:conveyor_vertical',
		'immersiveengineering:conveyor_splitter',
		'immersiveengineering:conveyor_extract',
		'immersiveengineering:alloybrick',
		'immersiveengineering:rs_engineering',
		'immersiveengineering:light_engineering',
		'immersiveengineering:radiator',
		'immersiveengineering:generator',
		'immersiveengineering:blastbrick_reinforced',
		'createaddition:connector',
		'createaddition:small_light_connector',
		'createaddition:large_connector',
		'createaddition:portable_energy_interface',
		'createaddition:copper_spool',
		'createaddition:spool',
		'createaddition:gold_spool',
		'createaddition:electrum_spool',
		'createaddition:festive_spool',
		'createaddition:iron_rod',
		'immersiveengineering:component_electronic',
		'immersiveengineering:component_electronic_adv',
		'immersiveengineering:speedloader',
		'immersiveengineering:maintenance_kit',
		'immersiveengineering:circuit_board',
		'immersiveengineering:fluid_sorter',
		'immersiveengineering:item_batcher',
		'immersiveengineering:sorter',
		'immersiveengineering:reinforced_crate',
		'immersiveengineering:gunpowder_barrel',
		'immersiveengineering:circuit_table',
		'immersiveengineering:workbench',
		'immersiveengineering:craftingtable',
		'immersiveengineering:sawblade',
		'immersiveengineering:rockcutter',
		'immersiveengineering:voltmeter',
		'immersiveengineering:toolbox',
		'immersiveengineering:drillhead_steel',
		'immersiveengineering:drillhead_iron',
		'immersiveengineering:survey_tools',
		'immersiveengineering:buzzsaw',
		'immersiveengineering:grindingdisk',
		'immersiveengineering:minecart_woodencrate',
		'immersiveengineering:minecart_reinforcedcrate',
		'immersiveengineering:minecart_woodenbarrel',
		'immersiveengineering:minecart_metalbarrel',
		'immersiveengineering:jerrycan',
		'immersiveengineering:furnace_heater',
		'immersiveengineering:metal_barrel',
		'immersiveengineering:logic_circuit',
		'immersiveengineering:armor_faraday_helmet',
		'immersiveengineering:armor_faraday_chestplate',
		'immersiveengineering:armor_faraday_leggings',
		'immersiveengineering:armor_faraday_boots',
		'immersiveengineering:logic_unit',
		'immersiveengineering:fluid_pump',
		'immersiveengineering:charging_station',
		'immersiveengineering:graphite_electrode',
		'immersiveengineering:powerpack',
		'immersiveengineering:turret_gun',
		'immersiveengineering:turret_chem',
		'immersiveengineering:sample_drill',
		'immersiveengineering:tesla_coil',
		'immersiveengineering:floodlight',
		'immersiveengineering:electromagnet',
		'immersiveengineering:fluid_placer',
		'immersiveengineering:shield',
		'immersiveengineering:mold_plate',
		'immersiveengineering:mold_gear',
		'immersiveengineering:mold_rod',
		'immersiveengineering:mold_bullet_casing',
		'immersiveengineering:mold_wire',
		'immersiveengineering:mold_packing_4',
		'immersiveengineering:mold_packing_9',
		'immersiveengineering:mold_unpacking',
		'immersiveengineering:current_transformer',
		'immersiveengineering:connector_probe',
		'immersiveengineering:connector_bundled',
		'immersiveengineering:heavy_engineering',
		'immersiveengineering:light_bulb',
		'immersiveengineering:toolupgrade_drill_waterproof',
		'immersiveengineering:toolupgrade_drill_lube',
		'immersiveengineering:toolupgrade_drill_damage',
		'immersiveengineering:toolupgrade_drill_fortune',
		'immersiveengineering:toolupgrade_drill_capacity',
		'immersiveengineering:toolupgrade_revolver_bayonet',
		'immersiveengineering:toolupgrade_revolver_magazine',
		'immersiveengineering:toolupgrade_revolver_electro',
		'immersiveengineering:toolupgrade_chemthrower_focus',
		'immersiveengineering:toolupgrade_chemthrower_multitank',
		'immersiveengineering:toolupgrade_railgun_scope',
		'immersiveengineering:toolupgrade_railgun_capacitors',
		'immersiveengineering:toolupgrade_shield_flash',
		'immersiveengineering:toolupgrade_shield_shock',
		'immersiveengineering:toolupgrade_shield_magnet',
		'immersiveengineering:toolupgrade_buzzsaw_spareblades',
		'immersiveengineering:toolupgrade_powerpack_antenna',
		'immersiveengineering:toolupgrade_powerpack_induction',
		'immersiveengineering:toolupgrade_powerpack_tesla',
		'immersiveengineering:toolupgrade_powerpack_magnet',
		'immersiveengineering:turntable',
		'immersiveengineering:cloche',
		'immersiveengineering:gunpart_barrel',
		'immersiveengineering:gunpart_drum',
		'immersiveengineering:gunpart_hammer',
		'silentgear:iron_rod',
		'immersiveengineering:wirecoil_steel',
		'immersiveengineering:capacitor_hv',
		'immersiveengineering:transformer_hv',
		'immersiveengineering:connector_hv',
		'immersiveengineering:connector_hv_relay',
		'createaddition:electrum_block',
		'createaddition:electrum_nugget',
		'createaddition:electrum_sheet',
		'createaddition:electrum_ingot',
		'immersiveengineering:empty_casing',
		'immersiveengineering:plate_copper',
		'tconstruct:steel_block',
		'tconstruct:steel_ingot',
		'tconstruct:steel_nugget',
		'immersiveengineering:electron_tube',
		'immersiveengineering:cokebrick',
		'immersiveengineering:blastbrick'
	]
	ie_removals.forEach(item => {
		event.remove({output:item})
	})
	//readd the mech component recipes using create
	event.recipes.create.sequenced_assembly(
		//output
		['immersiveengineering:component_iron'],
		//input
		'minecraft:copper_ingot',
		//sqeuence
		[
			event.recipes.create.deploying('kubejs:incomplete_iron_component', ['kubejs:incomplete_iron_component', 'immersiveengineering:plate_iron']),
			event.recipes.create.pressing(['kubejs:incomplete_iron_component'], 'kubejs:incomplete_iron_component'),
			event.recipes.create.deploying('kubejs:incomplete_iron_component', ['kubejs:incomplete_iron_component', 'immersiveengineering:plate_iron']),
			event.recipes.create.pressing(['kubejs:incomplete_iron_component'], 'kubejs:incomplete_iron_component')
		]
	)
	.transitionalItem('kubejs:incomplete_iron_component')
	.loops(1)
	event.recipes.create.sequenced_assembly(
		//output
		['immersiveengineering:component_steel'],
		//input
		'minecraft:copper_ingot',
		//sqeuence
		[
			event.recipes.create.deploying('kubejs:incomplete_steel_component', ['kubejs:incomplete_steel_component', 'immersiveengineering:plate_steel']),
			event.recipes.create.pressing(['kubejs:incomplete_steel_component'], 'kubejs:incomplete_steel_component'),
			event.recipes.create.deploying('kubejs:incomplete_steel_component', ['kubejs:incomplete_steel_component', 'immersiveengineering:plate_steel']),
			event.recipes.create.pressing(['kubejs:incomplete_steel_component'], 'kubejs:incomplete_steel_component')
		]
	)
	.transitionalItem('kubejs:incomplete_electronic_component')
	.loops(1)
	//electric component
	event.recipes.create.sequenced_assembly(
		//output
		['immersiveengineering:component_electronic'],
		//input
		'#forge:treated_wood_slab',
		//sqeuence
		[
			event.recipes.create.deploying('kubejs:incomplete_electronic_component', ['kubejs:incomplete_electronic_component', 'immersiveengineering:wire_electrum']),
			event.recipes.create.deploying('kubejs:incomplete_electronic_component', ['kubejs:incomplete_electronic_component', 'minecraft:redstone']),
			event.recipes.create.pressing(['kubejs:incomplete_electronic_component'], 'kubejs:incomplete_electronic_component'),
			event.recipes.create.deploying('kubejs:incomplete_electronic_component', ['kubejs:incomplete_electronic_component', 'minecraft:quartz'])
		]
	)
	.transitionalItem('kubejs:incomplete_electronic_component')
	.loops(1)
	//incandescent light bulb
	event.recipes.create.sequenced_assembly(
		//output
		['immersiveengineering:light_bulb'],
		//input
		'minecraft:copper_ingot',
		//sqeuence
		[
			event.recipes.create.deploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:paper']),
			event.recipes.create.deploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:paper']),
			event.recipes.create.deploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:paper']),
			event.recipes.create.pressing(['kubejs:incomplete_light_bulb'], 'kubejs:incomplete_light_bulb'),
			event.recipes.create.deploying('kubejs:incomplete_light_bulb', ['kubejs:incomplete_light_bulb', 'minecraft:glass'])
		]
	)
	.transitionalItem('kubejs:incomplete_light_bulb')
	.loops(1)
	//garden cloche
	event.recipes.create.sequenced_assembly(
		//output
		['immersiveengineering:cloche'],
		//input
		'#forge:treated_wood',
		//sqeuence
		[
			event.recipes.create.deploying('kubejs:incomplete_machine', ['kubejs:incomplete_machine', '#forge:treated_wood']),
			event.recipes.create.cutting(['kubejs:incomplete_machine'], 'kubejs:incomplete_machine'),
			event.recipes.create.filling('kubejs:incomplete_machine', [Fluid.of('immersiveengineering:creosote', FluidAmounts.BOTTLE), 'kubejs:incomplete_machine']),
			event.recipes.create.pressing(['kubejs:incomplete_machine'], 'kubejs:incomplete_machine'),
			event.recipes.create.deploying('kubejs:incomplete_machine', ['kubejs:incomplete_machine', 'immersiveengineering:component_iron']),
			event.recipes.create.deploying('kubejs:incomplete_machine', ['kubejs:incomplete_machine', 'immersiveengineering:light_bulb']),
			event.recipes.create.deploying('kubejs:incomplete_machine', ['kubejs:incomplete_machine', 'tconstruct:seared_fuel_gauge']),
		]
	)
	.transitionalItem('kubejs:incomplete_machine')
	.loops(1)
	//remove crafting recipes for metal rods
	event.remove({id:'immersiveengineering:crafting/stick_iron'})
	event.remove({id:'immersiveengineering:crafting/stick_steel'})
	event.remove({id:'immersiveengineering:crafting/stick_aluminium'})
	//do the same for metal press
	event.remove({id:'immersiveengineering:metalpress/rod_iron'})
	event.remove({id:'immersiveengineering:metalpress/rod_aluminium'})
	event.remove({id:'immersiveengineering:metalpress/rod_electrum'})
	event.remove({id:'immersiveengineering:metalpress/rod_brass'})
	event.remove({id:'immersiveengineering:metalpress/rod_copper'})
	event.remove({id:'immersiveengineering:metalpress/rod_steel'})
	event.remove({id:'immersiveengineering:metalpress/rod_gold'})
	event.remove({id:'immersiveengineering:metalpress/blaze_rod'}) //look i get thats the name of the item but like why not just use rod_blaze it makes so much more sense
	//do the same for plates and wires
	let plate_and_wire_recipe_ids = [
		'immersiveengineering:metalpress/plate_iron',
		'immersiveengineering:metalpress/plate_uranium',
		'immersiveengineering:metalpress/plate_copper',
		'immersiveengineering:metalpress/plate_silver',
		'immersiveengineering:metalpress/plate_constantan',
		'immersiveengineering:metalpress/plate_gold',
		'immersiveengineering:metalpress/plate_steel',
		'immersiveengineering:metalpress/plate_lead',
		'immersiveengineering:metalpress/plate_brass',
		'immersiveengineering:metalpress/plate_aluminium',
		'immersiveengineering:metalpress/plate_nickel',
		'immersiveengineering:metalpress/plate_electrum',
		'immersiveengineering:metalpress/plate_zinc',
		'immersiveengineering:metalpress/wire_steel',
		'immersiveengineering:metalpress/wire_iron',
		'immersiveengineering:metalpress/wire_lead',
		'immersiveengineering:metalpress/wire_gold',
		'immersiveengineering:metalpress/wire_aluminium',
		'immersiveengineering:metalpress/wire_copper',
		'immersiveengineering:metalpress/wire_electrum',
		'createaddition:rolling/copper_plate',
		'createaddition:rolling/electrum_plate',
		'createaddition:pressing/silver_ingot',
		'createaddition:pressing/constantan_ingot',
		'createaddition:pressing/uranium_ingot',
		'createaddition:pressing/lead_ingot',
		'createaddition:pressing/nickel_ingot',
		'createaddition:pressing/aluminum_ingot',
		'createaddition:pressing/steel_ingot'
	]
	plate_and_wire_recipe_ids.forEach(item => {
		event.remove({id:item})
	})
	//reinstate createaddition wire recipes but for IE wires instead
	event.custom({
		type: 'createaddition:rolling',
		input: {
			tag: 'forge_ingots/copper'
		},
		result: {
			item: 'immersiveengineering:wire_copper',
			count: 2
		}
	})
	event.custom({
		type: 'createaddition:rolling',
		input: {
			tag: 'forge_ingots/electrum'
		},
		result: {
			item: 'immersiveengineering:wire_electrum',
			count: 2
		}
	})
	//remove hammer to plate recipes
	let hammer_to_plate_recipe_ids = [
		'immersiveengineering:crafting/plate_iron_hammering',
		'immersiveengineering:crafting/plate_silver_hammering',
		'immersiveengineering:crafting/plate_aluminium_hammering',
		'immersiveengineering:crafting/plate_gold_hammering',
		'immersiveengineering:crafting/plate_steel_hammering',
		'immersiveengineering:crafting/plate_electrum_hammering',
		'immersiveengineering:crafting/plate_uranium_hammering',
		'immersiveengineering:crafting/plate_nickel_hammering',
		'immersiveengineering:crafting/plate_lead_hammering',
		'immersiveengineering:crafting/plate_constantan_hammering'
	]
	hammer_to_plate_recipe_ids.forEach(item => {
		event.remove({id:item})
	})
	//reimplement many banner pattern recipes - the rest can be obtained via villagers
	let banner_patterns = [
		'immersiveengineering:bannerpattern_hammer',
		'immersiveengineering:bannerpattern_bevels',
		'immersiveengineering:bannerpattern_ornate',
		'immersiveengineering:bannerpattern_treated_wood',
		'immersiveengineering:bannerpattern_windmill',
		'immersiveengineering:bannerpattern_wolf_r',
		'immersiveengineering:bannerpattern_wolf_l',
		'immersiveengineering:bannerpattern_wolf'
	]
	banner_patterns.forEach(item => {
		event.remove({output:item})
	})
	event.shapeless('immersiveengineering:bannerpattern_bevels', ['minecraft:paper', '#forge:plates'])
	event.shapeless('immersiveengineering:bannerpattern_treated_wood', ['minecraft:paper', '#forge:treated_wood'])
	event.shapeless('immersiveengineering:bannerpattern_wolf_r', ['minecraft:paper', 'minecraft:bone', 'minecraft:bone'])
	event.shapeless('immersiveengineering:bannerpattern_wolf_l', ['minecraft:paper', 'minecraft:bone'])
	event.shapeless('immersiveengineering:bannerpattern_wolf', ['minecraft:paper', 'handcrafted:wolf_trophy'])
	//rewrite coke and blast brick for create
	event.recipes.create.mixing([Item.of('immersiveengineering:cokebrick', 3)], [Item.of('minecraft:clay_ball', 4), Item.of('minecraft:brick', 4), '#forge:sandstone'])
	event.recipes.create.mixing([Item.of('immersiveengineering:blastbrick', 3)], [Item.of('minecraft:nether_brick', 4), Item.of('minecraft:brick', 4), 'minecraft:magma_block']).heated()
})

LootJS.modifiers((event) => {
	//prevent engineer's blueprints from appearing in villages
	event.addLootTableModifier("immersiveengineering:chests/engineers_house").removeLoot("immersiveengineering:blueprint");
	//remove the mechanical components from villages too while were here
	event.addLootTableModifier("immersiveengineering:chests/engineers_house").removeLoot("immersiveengineering:component_iron");
	event.addLootTableModifier("immersiveengineering:chests/engineers_house").removeLoot("immersiveengineering:component_steel");
});

MoreJSEvents.villagerTrades((event) => {
    //remove functionality from most IE villagers
	event.removeModdedTrades(['immersiveengineering:machinist'], [1,4])
	event.removeModdedTrades(['immersiveengineering:electrician'], [1,4])
	event.removeModdedTrades(['immersiveengineering:gunsmith'], [1,4])
	event.removeModdedTrades(['immersiveengineering:engineer'], [1,4])
})