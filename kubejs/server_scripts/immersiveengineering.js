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
		'immersiveengineering:cloche'
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
			event.recipes.create.deploying('kubejs:incomplete_machine', ['kubejs:incomplete_machine', 'tconstruct:seared_fuel_gauge']),
		]
	)
	.transitionalItem('kubejs:incomplete_machine')
	.loops(1)
	//remove the silent gear iron rod recipe (redundant with IE)
	event.remove({output:'silentgear:iron_rod'})
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