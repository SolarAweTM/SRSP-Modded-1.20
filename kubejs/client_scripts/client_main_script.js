// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Client main script loaded.')

ItemEvents.tooltip(event => {
	// tooltip modification noting that the enchanting apparatus has been lobotomized
	event.add('ars_nouveau:enchanting_apparatus', [
	Text.red('Getting vanilla enchantments from this'), 
	Text.red('has been disabled, please use the'), 
	Text.red('normal enchanting table instead.'), 
	'', 
	Text.red('You can still get Mana Regen, Mana Boost,'), 
	Text.red('and Reactive from here, though, and'), 
	Text.red('other functions of this item remain intact.')
	])
	
	// tooltip modification noting that you use the enchanting apparatus to upgrade your spell book now
	event.add('ars_nouveau:apprentice_spell_book', [
	Text.green('Use the Enchanting Apparatus to upgrade.')
	])
	event.add('ars_nouveau:novice_spell_book', [
	Text.green('Use the Enchanting Apparatus to upgrade.')
	])
	
	// tooltips for smithing templates
	event.add('kubejs:neptunium_upgrade_smithing_template', [
	Text.gray("Neptunium Upgrade"),
	"",
	Text.gray("Applies to:"),
	Text.blue(" Netherite Equipment"),
	Text.gray("Ingredients:"),
	Text.blue(" Neptunium Ingot"),
	Text.red("Removes applied armor trims in the process.")
	])
	
	event.add('kubejs:terrasteel_upgrade_smithing_template', [
	Text.gray("Terrasteel Upgrade"),
	"",
	Text.gray("Applies to:"),
	Text.blue(" Netherite Equipment"),
	Text.gray("Ingredients:"),
	Text.blue(" Gaia Spirit Ingot"),
	Text.red("Removes applied armor trims in the process.")
	])
	
	event.add('silentgear:gear_smithing_table', [
	"Decorative item."
	])
	event.add('botania:terra_sword', [
	Text.green("no way terraria reference!!!1!!111!!")
	])
	
	//use literally anything BUT the elytra
	event.addAdvanced('minecraft:elytra', (item, advanced, text) => {
		if(!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('Shift ').yellow(), Text.of('to view a note').gray()])
		}
		else {
			text.add(1, Text.green("The pack has many other options for flight,"))
			text.add(2, Text.green("often much better than an Elytra."))
			text.add(3, "")
			text.add(4, Text.green("Options include Flügel Tiara,"))
			text.add(5, Text.green("Create Jetpacks, the Ritual of Flight,"))
			text.add(6, Text.green("and the Thread of Gliding."))
		}
	})
	
	//lock leap
	event.addAdvanced('ars_nouveau:glyph_leap', (item, advanced, text) => {
		text.add(2, Text.red('Disabled in current phase.'))
	})
	
	//notify of focus adjustment
	/* TODO: FUTURE PHASE
	event.addAdvanced('ars_nouveau:shapers_focus', (item, advanced, text) => {
		text.add(2, Text.red('Recipe altered for balance.'))
	})
	*/
	
	//tooltip for stuff disabled in this phase
	let disabled_items = [
	'botania:terrasteel_helmet',
	'botania:terrasteel_chestplate',
	'botania:terrasteel_leggings',
	'botania:terrasteel_boots',
	'ars_nouveau:thread_life_drain',
	'ars_nouveau:thread_magic_capacity',
	'ars_nouveau:shapers_focus'
	]
	disabled_items.forEach(item => {
		event.add(item, [
		Text.red("Disabled in current phase.")
		])
	})
	
	//tooltips noting buffs
	let buffed_items = [
	'ars_nouveau:battlemage_hood',
	'ars_nouveau:battlemage_robes',
	'ars_nouveau:battlemage_leggings',
	'ars_nouveau:battlemage_boots'
	]
	buffed_items.forEach(item => {
		event.add(item, [
		Text.green("Buffed to match the stats of Netherite.")
		])
	})
	
	//tooltip for ender air bottle
	event.addAdvanced('botania:ender_air_bottle', (item, advanced, text) => {
		text.add(1, Text.gray('Obtained by using a glass bottle in The End.'))
		text.add(2, Text.darkGray('May cause issues when attempting to'))
		text.add(3, Text.darkGray('gather Dragon\'s Breath'))
	})
	
	//tooltip for tinker's anvils
	event.addAdvanced('tconstruct:tinkers_anvil', (item, advanced, text) => {
		text.add(1, Text.red('Mostly useless in this pack. Kept in as decoration.'))
	})
	event.addAdvanced('tconstruct:scorched_anvil', (item, advanced, text) => {
		text.add(1, Text.red('Mostly useless in this pack. Kept in as decoration.'))
	})
	
	//tooltip for things that look like storage blocks but aren't actually
	let decoration_blocks = [
		'biomesoplenty:rose_quartz_block',
		'create:rose_quartz_block'
	]
	decoration_blocks.forEach(block => {
		event.addAdvanced(block, (item, advanced, text) => {
			text.add(1, Text.red('This is not a storage block! You cannot get the items back from this!'))
		})
	})
	
	//tooltip for BWG crafting table to vanilla crafting table recipe 
	event.addAdvanced('#biomeswevegone:crafting_tables', (item, advanced, text) => {
		text.add(1, Text.gray('Can be converted to a vanilla Crafting Table in a crafting grid.'))
	})
	
	//tooltip for everycomp/quark chests to vanilla chest recipe 
	event.addAdvanced('#quark:revertable_chests', (item, advanced, text) => {
		text.add(1, Text.gray('Can be converted to a vanilla Chest in a crafting grid.'))
	})
	event.addAdvanced('#quark:revertable_trapped_chests', (item, advanced, text) => {
		text.add(1, Text.gray('Can be converted to a vanilla Trapped Chest in a crafting grid.'))
	})
	
	//tooltip for dream blocks
	event.addAdvanced('estrogen:dormant_dream_block', (item, advanced, text) => {
		text.add(1, Text.red('Elven knowledge is required to activate this block.'))
	})
	
	//tooltip for now outdated guidebooks
	let outdated_books = [
		'tconstruct:puny_smelting',
		'tconstruct:mighty_smelting',
		'tconstruct:fantastic_foundry',
		'ars_nouveau:worn_notebook',
		'immersiveengineering:manual'
	]
	outdated_books.forEach(block => {
		event.addAdvanced(block, (item, advanced, text) => {
			text.add(1, Text.red('This pack has modified certain mechanics, and'))
			text.add(2, Text.red('as such, the content in this book may not'))
			text.add(3, Text.red('accurately reflect the correct instructions.'))
			text.add(4, Text.green('Regardless, these books still serve as a decent reference.'))
		})
	})
})

JEIEvents.hideItems(event => {
	let hidden_items = [
		'sophisticatedbackpacks:inception_upgrade',
		'itemfilters:always_true',
		'itemfilters:always_false',
		'itemfilters:or',
		'itemfilters:and',
		'itemfilters:not',
		'itemfilters:xor',
		'itemfilters:tag',
		'itemfilters:mod',
		'itemfilters:id_regex',
		'itemfilters:damage',
		'itemfilters:block',
		'itemfilters:max_count',
		'itemfilters:strong_nbt',
		'itemfilters:weak_nbt',
		'itemfilters:custom',
		'silentgear:helmet_blueprint',
		'silentgear:chestplate_blueprint',
		'silentgear:leggings_blueprint',
		'silentgear:boots_blueprint',
		'silentgear:elytra_blueprint',
		'silentgear:helmet_template',
		'silentgear:chestplate_template',
		'silentgear:leggings_template',
		'silentgear:boots_template',
		'silentgear:elytra_template',
		'silentgear:helmet_plates',
		'silentgear:chestplate_plates',
		'silentgear:legging_plates',
		'silentgear:boot_plates',
		'silentgear:elytra_wings',
		'silentgear:lining_blueprint',
		'silentgear:lining_template',
		'silentgear:lining',
		'silentgear:helmet',
		'silentgear:chestplate',
		'silentgear:leggings',
		'silentgear:boots',
		'silentgear:elytra',
		'silentgear:refabricator',
		'silentgear:fishing_rod',
		'silentgear:fishing_rod_blueprint',
		'silentgear:fishing_rod_template',
		'silentgear:fishing_reel_and_hook',
		'kubejs:skibidi_hawk_tuah',
		'kubejs:intentionally_unobtainable',
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
		'tconstruct:modifier_crystal',
		'sophisticatedstorage:limited_barrel_1',
		'sophisticatedstorage:limited_barrel_2',
		'sophisticatedstorage:limited_barrel_3',
		'sophisticatedstorage:limited_barrel_4',
		'sophisticatedstorage:limited_iron_barrel_1',
		'sophisticatedstorage:limited_iron_barrel_2',
		'sophisticatedstorage:limited_iron_barrel_3',
		'sophisticatedstorage:limited_iron_barrel_4',
		'sophisticatedstorage:limited_copper_barrel_1',
		'sophisticatedstorage:limited_copper_barrel_2',
		'sophisticatedstorage:limited_copper_barrel_3',
		'sophisticatedstorage:limited_copper_barrel_4',
		'sophisticatedstorage:limited_gold_barrel_1',
		'sophisticatedstorage:limited_gold_barrel_2',
		'sophisticatedstorage:limited_gold_barrel_3',
		'sophisticatedstorage:limited_gold_barrel_4',
		'sophisticatedstorage:limited_diamond_barrel_1',
		'sophisticatedstorage:limited_diamond_barrel_2',
		'sophisticatedstorage:limited_diamond_barrel_3',
		'sophisticatedstorage:limited_diamond_barrel_4',
		'sophisticatedstorage:limited_netherite_barrel_1',
		'sophisticatedstorage:limited_netherite_barrel_2',
		'sophisticatedstorage:limited_netherite_barrel_3',
		'sophisticatedstorage:limited_netherite_barrel_4',
		'storagedrawers:conversion_upgrade',
		'storagedrawers:portability_upgrade',
		'storagedrawers:personal_key_cofh',
		'storagedrawers:personal_key_ftb',
		'storagedrawers:priority_key_p1',
		'storagedrawers:priority_key_p2',
		'storagedrawers:priority_key_n1',
		'storagedrawers:priority_key_n2',
		'storagedrawers:keyring_drawer',
		'storagedrawers:keyring_quantify',
		'storagedrawers:keyring_shroud',
		'storagedrawers:keyring_personal',
		'storagedrawers:keyring_personal_cofh',
		'storagedrawers:keyring_personal_ftb',
		'storagedrawers:keyring_personal_unlock',
		'storagedrawers:keyring_suspend',
		'storagedrawers:keyring_priority',
		'storagedrawers:keyring_priority_p1',
		'storagedrawers:keyring_priority_p2',
		'storagedrawers:keyring_priority_n1',
		'storagedrawers:keyring_priority_n2',
		'storagedrawers:keyring_puller',
		'sophisticatedstorage:inaccessible_slot',
		'railways:fuel_tank',
		'railways:portable_fuel_interface',
		'ars_nouveau:warp_scroll',
		'ars_nouveau:stable_warp_scroll',
		'ars_nouveau:potion_melder',
		'farmersdelight:rope',
		'apotheosis:gem',
		'apotheosis:gem_cutting_table',
		'apotheosis:reforging_table',
		'apotheosis:gem_fused_slate',
		'apotheosis:sigil_of_socketing',
		'apotheosis:sigil_of_withdrawal',
		'apotheosis:sigil_of_rebirth',
		'apotheosis:sigil_of_enhancement',
		'apotheosis:augmenting_table',
		'apotheosis:ancient_material',
		'apotheosis:gem_dust',
		'apotheosis:infused_hellshelf',
		'apotheosis:blazing_hellshelf',
		'apotheosis:glowing_hellshelf',
		'apotheosis:crystal_seashelf',
		'apotheosis:heart_seashelf',
		'apotheosis:deepshelf',
		'apotheosis:echoing_deepshelf',
		'apotheosis:soul_touched_deepshelf',
		'apotheosis:echoing_sculkshelf',
		'apotheosis:soul_touched_sculkshelf',
		'apotheosis:endshelf',
		'apotheosis:pearl_endshelf',
		'apotheosis:draconic_endshelf',
		'apotheosis:rectifier',
		'apotheosis:rectifier_t2',
		'apotheosis:rectifier_t3',
		'apotheosis:sightshelf',
		'apotheosis:sightshelf_t2',
		'apotheosis:treasure_shelf',
		'apotheosis:infused_seashelf',
		'apotheosis:boss_summoner',
		'botania:terrasteel_helmet',
		'botania:terrasteel_chestplate',
		'botania:terrasteel_leggings',
		'botania:terrasteel_boots',
		'ars_nouveau:shapers_focus',
		'ars_nouveau:thread_life_drain',
		'ars_nouveau:thread_magic_capacity',
		'ars_nouveau:glyph_leap',
		'quark:matrix_enchanter',
		'tconstruct:dragon_scale',
		'tconstruct:creative_slot',
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
		'immersiveengineering:coresample',
		'immersiveengineering:bottling_machine',
		'immersiveengineering:auto_workbench',
		'immersiveengineering:alloy_smelter',
		'immersiveengineering:advanced_blast_furnace',
		'immersiveengineering:lightning_rod',
		'immersiveengineering:crusher',
		'immersiveengineering:fermenter',
		'immersiveengineering:diesel_generator',
		'immersiveengineering:metal_press',
		'immersiveengineering:assembler',
		'immersiveengineering:mixer',
		'immersiveengineering:refinery',
		'immersiveengineering:squeezer',
		'immersiveengineering:excavator',
		'immersiveengineering:sawmill',
		'immersiveengineering:arc_furnace',
		'immersiveengineering:feedthrough',
		'immersiveengineering:fake_icon_birthday',
		'immersiveengineering:fake_icon_lucky',
		'immersiveengineering:fake_icon_drillbreak',
		'immersiveengineering:fake_icon_ravenholm',
		'immersiveengineering:fake_icon_fried',
		'immersiveengineering:fake_icon_bttf',
		'immersiveengineering:blueprint',
		'immersiveengineering:slab_alloybrick',
		'immersiveengineering:slab_blastbrick_reinforced',
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
		'silentgear:iron_rod',
		'immersiveengineering:gunpart_barrel',
		'immersiveengineering:gunpart_drum',
		'immersiveengineering:gunpart_hammer',
		'immersiveengineering:wirecoil_steel',
		'immersiveengineering:capacitor_hv',
		'immersiveengineering:transformer_hv',
		'immersiveengineering:connector_hv',
		'immersiveengineering:connector_hv_relay',
		'createaddition:copper_wire',
		'createaddition:electrum_wire',
		'createaddition:electrum_block',
		'createaddition:electrum_nugget',
		'createaddition:electrum_sheet',
		'createaddition:electrum_ingot',
		'immersiveengineering:electron_tube',
		'immersiveengineering:plate_copper',
		'tconstruct:steel_block',
		'tconstruct:steel_ingot',
		'tconstruct:steel_nugget',
		'botania:ancient_will_ahrim',
		'botania:ancient_will_dharok',
		'botania:ancient_will_guthan',
		'botania:ancient_will_torag',
		'botania:ancient_will_verac',
		'botania:ancient_will_karil',
		'immersiveengineering:potion_bucket',
		'immersiveengineering:plate_iron',
		'immersiveengineering:plate_duroplast',
		'immersiveengineering:duroplast',
		'immersiveengineering:blastfurnace_preheater',
		'immersiveengineering:coil_hv',
		'immersiveengineering:dust_hop_graphite',
		'immersiveengineering:ingot_hop_graphite',
		'immersiveengineering:empty_casing',
		'immersiveengineering:fluorescent_tube',
		'immersiveengineering:concrete_sprayed',
		'immersiveengineering:dust_wood',
		'tconstruct:repair_kit_red_sand_cast',
		'tconstruct:pick_head_red_sand_cast',
		'tconstruct:small_axe_head_red_sand_cast',
		'tconstruct:small_blade_red_sand_cast',
		'tconstruct:adze_head_red_sand_cast',
		'tconstruct:hammer_head_red_sand_cast',
		'tconstruct:broad_axe_head_red_sand_cast',
		'tconstruct:broad_blade_red_sand_cast',
		'tconstruct:large_plate_red_sand_cast',
		'tconstruct:tool_handle_red_sand_cast',
		'tconstruct:tool_binding_red_sand_cast',
		'tconstruct:tough_handle_red_sand_cast',
		'tconstruct:tough_binding_red_sand_cast',
		'tconstruct:bow_limb_red_sand_cast',
		'tconstruct:bow_grip_red_sand_cast',
		'tconstruct:bowstring_red_sand_cast',
		'tconstruct:helmet_plating_red_sand_cast',
		'tconstruct:chestplate_plating_red_sand_cast',
		'tconstruct:leggings_plating_red_sand_cast',
		'tconstruct:boots_plating_red_sand_cast',
		'tconstruct:maille_red_sand_cast',
		'tconstruct:coin_red_sand_cast',
		'tconstruct:repair_kit_sand_cast',
		'tconstruct:pick_head_sand_cast',
		'tconstruct:small_axe_head_sand_cast',
		'tconstruct:small_blade_sand_cast',
		'tconstruct:adze_head_sand_cast',
		'tconstruct:hammer_head_sand_cast',
		'tconstruct:broad_axe_head_sand_cast',
		'tconstruct:broad_blade_sand_cast',
		'tconstruct:large_plate_sand_cast',
		'tconstruct:tool_handle_sand_cast',
		'tconstruct:tool_binding_sand_cast',
		'tconstruct:tough_handle_sand_cast',
		'tconstruct:tough_binding_sand_cast',
		'tconstruct:bow_limb_sand_cast',
		'tconstruct:bow_grip_sand_cast',
		'tconstruct:bowstring_sand_cast',
		'tconstruct:helmet_plating_sand_cast',
		'tconstruct:chestplate_plating_sand_cast',
		'tconstruct:leggings_plating_sand_cast',
		'tconstruct:boots_plating_sand_cast',
		'tconstruct:maille_sand_cast',
		'tconstruct:coin_sand_cast',
		'tconstruct:repair_kit_cast',
		'tconstruct:pick_head_cast',
		'tconstruct:small_axe_head_cast',
		'tconstruct:small_blade_cast',
		'tconstruct:adze_head_cast',
		'tconstruct:hammer_head_cast',
		'tconstruct:broad_axe_head_cast',
		'tconstruct:broad_blade_cast',
		'tconstruct:large_plate_cast',
		'tconstruct:tool_handle_cast',
		'tconstruct:tool_binding_cast',
		'tconstruct:tough_handle_cast',
		'tconstruct:tough_binding_cast',
		'tconstruct:bow_limb_cast',
		'tconstruct:bow_grip_cast',
		'tconstruct:bowstring_cast',
		'tconstruct:helmet_plating_cast',
		'tconstruct:chestplate_plating_cast',
		'tconstruct:leggings_plating_cast',
		'tconstruct:boots_plating_cast',
		'tconstruct:maille_cast',
		'tconstruct:coin_cast',
		'tconstruct:copper_nugget',
		'immersiveengineering:nugget_copper'
	]
	hidden_items.forEach(item => {
		event.hide(item) // noted: this also removes them from creative menus
	})
})

JEIEvents.hideFluids(event => {
	let hidden_fluids = [
		'estrogen:molten_amethyst'
	]
	hidden_fluids.forEach(item => {
		event.hide(item)
	})
})

JEIEvents.removeCategories(event => {
	event.remove('tconstruct:severing')
})

ClientEvents.loggedIn(event => {
	//this took like an hour to find because the only solution i could find was on a discord server
	//can we stop using discord as a knowledge base now
	event.player.tell('§eFTB Chunks: §rPress [§b' + Text.keybind('key.ftbchunks.map').getString() + '§r]')
})