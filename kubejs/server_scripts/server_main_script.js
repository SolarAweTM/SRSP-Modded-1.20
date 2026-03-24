// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Main server script loaded.')

ServerEvents.recipes(event => {
	// fucking obliterate the inception upgrade
	event.remove({ output: 'sophisticatedbackpacks:inception_upgrade' })
	//remove item filters recipes (only used to make quests)
	event.remove({ mod: 'itemfilters' })
	//remove the rope from farmers delight (use the quark one instead)
	event.remove({output:'farmersdelight:rope'})
	event.remove({output:'farmersdelight:safety_net'})
	event.shaped(
		'farmersdelight:safety_net',
		[
			'RR',
			'RR'
		],
		{
			R: 'quark:rope'
		}
	)
	//elytra is kil (NEVERMIND)
	// event.remove({ output: 'minecraft:elytra' })
	//convert BWG crafting tables to vanilla crafting tables
	event.shapeless(
		'minecraft:crafting_table', //result
		[
			'#biomeswevegone:crafting_tables' //inputs
		]
	)
	//waystone stuff
	event.remove({output:'waystones:warp_stone'})
	event.remove({output:'waystones:return_scroll'})
	event.remove({output:'waystones:bound_scroll'})
	event.remove({output:'waystones:warp_scroll'})
	event.remove({output:'waystones:warp_plate'})
	event.remove({output:'waystones:warp_dust'})
})

ServerEvents.tags('block', event => {
	event.add('framedblocks:frameable', 'ars_nouveau:source_gem_block')
	event.add('framedblocks:frameable', 'immersiveengineering:steel_scaffolding_standard')
	event.add('framedblocks:frameable', 'immersiveengineering:steel_scaffolding_grate_top')
	event.add('framedblocks:frameable', 'immersiveengineering:steel_scaffolding_wooden_top')
	event.add('framedblocks:blockentity_whitelisted', 'immersiveengineering:steel_scaffolding_standard')
	event.add('framedblocks:blockentity_whitelisted', 'immersiveengineering:steel_scaffolding_grate_top')
	event.add('framedblocks:blockentity_whitelisted', 'immersiveengineering:steel_scaffolding_wooden_top')
	event.add('framedblocks:frameable', 'ars_nouveau:source_gem_block')
	event.add('forge:workbenches', '#biomeswevegone:crafting_tables')
	event.add('create:non_movable', '#lootr:containers')
	event.remove('iceandfire:dragon_cave_uncommon_ores', 'iceandfire:silver_ore')
	event.add('iceandfire:dragon_cave_uncommon_ores', 'immersiveengineering:ore_silver')
    event.add('create:chest_mounted_storage', '#forge:chests/wooden')
    event.remove('create:chest_mounted_storage', 'sophisticatedstorage:chest')
    event.remove('create:chest_mounted_storage', 'lootr:lootr_chest')
    event.add('create:simple_mounted_storage', '#chipped:barrel')
    event.add('create:single_block_inventories', '#chipped:barrel')
})

ServerEvents.tags('item', event => {
	// WHY THE FUCK DOES ICE AND FIRE TAG LITERALLY NOTHING
	event.add('iceandfire:storage_blocks/scales/sea_serpent', 'iceandfire:sea_serpent_scale_block_blue')
	event.add('iceandfire:storage_blocks/scales/sea_serpent', 'iceandfire:sea_serpent_scale_block_bronze')
	event.add('iceandfire:storage_blocks/scales/sea_serpent', 'iceandfire:sea_serpent_scale_block_deepblue')
	event.add('iceandfire:storage_blocks/scales/sea_serpent', 'iceandfire:sea_serpent_scale_block_green')
	event.add('iceandfire:storage_blocks/scales/sea_serpent', 'iceandfire:sea_serpent_scale_block_purple')
	event.add('iceandfire:storage_blocks/scales/sea_serpent', 'iceandfire:sea_serpent_scale_block_red')
	event.add('iceandfire:storage_blocks/scales/sea_serpent', 'iceandfire:sea_serpent_scale_block_teal')
	event.add('iceandfire:storage_blocks/dragon_bone', 'iceandfire:dragon_bone_block')
	const pickaxe_tags = [
		'minecraft:pickaxes',
		'minecraft:tools',
		'forge:tools/pickaxes',
		'forge:tools',
		'minecraft:breaks_decorated_pots',
		'minecraft:cluster_max_harvestables'
	]
	const iaf_pickaxes = [
		'iceandfire:silver_pickaxe',
		'iceandfire:copper_pickaxe',
		'iceandfire:dragonbone_pickaxe',
		'iceandfire:dragonsteel_fire_pickaxe',
		'iceandfire:dragonsteel_ice_pickaxe',
		'iceandfire:dragonsteel_lightning_pickaxe'
	]
	iaf_pickaxes.forEach(pick => {
		pickaxe_tags.forEach(tag => {
			event.add(tag, pick)
		})
	})
	const axe_tags = [
		'minecraft:axes',
		'minecraft:tools',
		'forge:tools/axes',
		'forge:tools',
		'minecraft:breaks_decorated_pots'
	]
	const iaf_axes = [
		'iceandfire:silver_axe',
		'iceandfire:copper_axe',
		'iceandfire:dragonbone_axe',
		'iceandfire:dragonsteel_fire_axe',
		'iceandfire:dragonsteel_ice_axe',
		'iceandfire:dragonsteel_lightning_axe'
	]
	iaf_axes.forEach(axe => {
		axe_tags.forEach(tag => {
			event.add(tag, axe)
		})
	})
	const shovel_tags = [
		'minecraft:shovels',
		'minecraft:tools',
		'forge:tools/shovels',
		'forge:tools',
		'minecraft:breaks_decorated_pots'
	]
	const iaf_shovels = [
		'iceandfire:silver_shovel',
		'iceandfire:copper_shovel',
		'iceandfire:dragonbone_shovel',
		'iceandfire:dragonsteel_fire_shovel',
		'iceandfire:dragonsteel_ice_shovel',
		'iceandfire:dragonsteel_lightning_shovel'
	]
	iaf_shovels.forEach(shovel => {
		shovel_tags.forEach(tag => {
			event.add(tag, shovel)
		})
	})
	const hoe_tags = [
		'minecraft:hoes',
		'minecraft:tools',
		'forge:tools'
	]
	const iaf_hoes = [
		'iceandfire:silver_hoe',
		'iceandfire:copper_hoe',
		'iceandfire:dragonbone_hoe',
		'iceandfire:dragonsteel_fire_hoe',
		'iceandfire:dragonsteel_ice_hoe',
		'iceandfire:dragonsteel_lightning_hoe'
	]
	iaf_hoes.forEach(hoe => {
		hoe_tags.forEach(tag => {
			event.add(tag, hoe)
		})
	})
	const sword_tags = [
		'minecraft:swords',
		'minecraft:tools',
		'forge:tools',
		'minecraft:breaks_decorated_pots'
	]
	const iaf_swords = [
		'iceandfire:silver_sword',
		'iceandfire:copper_sword',
		'iceandfire:dragonbone_sword',
		'iceandfire:dragonbone_sword_fire',
		'iceandfire:dragonbone_sword_ice',
		'iceandfire:dragonbone_sword_lightning',
		'iceandfire:hippogryph_sword',
		'iceandfire:dragonsteel_fire_sword',
		'iceandfire:dragonsteel_ice_sword',
		'iceandfire:dragonsteel_lightning_sword',
		'iceandfire:dread_sword',
		'iceandfire:dread_knight_sword',
		'iceandfire:ghost_sword'
	]
	iaf_swords.forEach(sword => {
		sword_tags.forEach(tag => {
			event.add(tag, sword)
		})
	})
	const helmet_tags = [
		'forge:armors/helmets',
		'forge:helmets',
		'forge:armor',
		'forge:armors',
		'bookshelf:helmets',
		'bookshelf:armor'
	]
	const chestplate_tags = [
		'forge:armors/chestplates',
		'forge:chestplates',
		'forge:armor',
		'forge:armors',
		'bookshelf:chestplates',
		'bookshelf:armor'
	]
	const leggings_tags = [
		'forge:armors/leggings',
		'forge:leggings',
		'forge:armor',
		'forge:armors',
		'bookshelf:leggings',
		'bookshelf:armor'
	]
	const boots_tags = [
		'forge:armors/boots',
		'forge:boots',
		'forge:armor',
		'forge:armors',
		'bookshelf:boots',
		'bookshelf:armor'
	]
	const iaf_helmets = [
		'iceandfire:armor_silver_metal_helmet',
		'iceandfire:armor_copper_metal_helmet',
		'iceandfire:sheep_helmet',
		'iceandfire:deathworm_yellow_helmet',
		'iceandfire:deathworm_white_helmet',
		'iceandfire:deathworm_red_helmet',
		'iceandfire:dragonsteel_fire_helmet',
		'iceandfire:dragonsteel_ice_helmet',
		'iceandfire:dragonsteel_lightning_helmet',
		'iceandfire:armor_red_helmet',
		'iceandfire:armor_bronze_helmet',
		'iceandfire:armor_green_helmet',
		'iceandfire:armor_gray_helmet',
		'iceandfire:armor_blue_helmet',
		'iceandfire:armor_white_helmet',
		'iceandfire:armor_sapphire_helmet',
		'iceandfire:armor_silver_helmet',
		'iceandfire:armor_electric_helmet',
		'iceandfire:armor_amethyst_helmet',
		'iceandfire:armor_copper_helmet',
		'iceandfire:armor_black_helmet',
		'iceandfire:tide_blue_helmet',
		'iceandfire:tide_bronze_helmet',
		'iceandfire:tide_deepblue_helmet',
		'iceandfire:tide_green_helmet',
		'iceandfire:tide_purple_helmet',
		'iceandfire:tide_red_helmet',
		'iceandfire:tide_teal_helmet',
		'iceandfire:forest_troll_leather_helmet',
		'iceandfire:frost_troll_leather_helmet',
		'iceandfire:mountain_troll_leather_helmet'
	]
	iaf_helmets.forEach(helmet => {
		helmet_tags.forEach(tag => {
			event.add(tag, helmet)
		})
	})
	const iaf_chestplates = [
		'iceandfire:armor_silver_metal_chestplate',
		'iceandfire:armor_copper_metal_chestplate',
		'iceandfire:sheep_chestplate',
		'iceandfire:deathworm_yellow_chestplate',
		'iceandfire:deathworm_white_chestplate',
		'iceandfire:deathworm_red_chestplate',
		'iceandfire:dragonsteel_fire_chestplate',
		'iceandfire:dragonsteel_ice_chestplate',
		'iceandfire:dragonsteel_lightning_chestplate',
		'iceandfire:armor_red_chestplate',
		'iceandfire:armor_bronze_chestplate',
		'iceandfire:armor_green_chestplate',
		'iceandfire:armor_gray_chestplate',
		'iceandfire:armor_blue_chestplate',
		'iceandfire:armor_white_chestplate',
		'iceandfire:armor_sapphire_chestplate',
		'iceandfire:armor_silver_chestplate',
		'iceandfire:armor_electric_chestplate',
		'iceandfire:armor_amethyst_chestplate',
		'iceandfire:armor_copper_chestplate',
		'iceandfire:armor_black_chestplate',
		'iceandfire:tide_blue_chestplate',
		'iceandfire:tide_bronze_chestplate',
		'iceandfire:tide_deepblue_chestplate',
		'iceandfire:tide_green_chestplate',
		'iceandfire:tide_purple_chestplate',
		'iceandfire:tide_red_chestplate',
		'iceandfire:tide_teal_chestplate',
		'iceandfire:forest_troll_leather_chestplate',
		'iceandfire:frost_troll_leather_chestplate',
		'iceandfire:mountain_troll_leather_chestplate'
	]
	iaf_chestplates.forEach(chestplate => {
		chestplate_tags.forEach(tag => {
			event.add(tag, chestplate)
		})
	})
	const iaf_leggings = [
		'iceandfire:armor_silver_metal_leggings',
		'iceandfire:armor_copper_metal_leggings',
		'iceandfire:sheep_leggings',
		'iceandfire:deathworm_yellow_leggings',
		'iceandfire:deathworm_white_leggings',
		'iceandfire:deathworm_red_leggings',
		'iceandfire:dragonsteel_fire_leggings',
		'iceandfire:dragonsteel_ice_leggings',
		'iceandfire:dragonsteel_lightning_leggings',
		'iceandfire:armor_red_leggings',
		'iceandfire:armor_bronze_leggings',
		'iceandfire:armor_green_leggings',
		'iceandfire:armor_gray_leggings',
		'iceandfire:armor_blue_leggings',
		'iceandfire:armor_white_leggings',
		'iceandfire:armor_sapphire_leggings',
		'iceandfire:armor_silver_leggings',
		'iceandfire:armor_electric_leggings',
		'iceandfire:armor_amethyst_leggings',
		'iceandfire:armor_copper_leggings',
		'iceandfire:armor_black_leggings',
		'iceandfire:tide_blue_leggings',
		'iceandfire:tide_bronze_leggings',
		'iceandfire:tide_deepblue_leggings',
		'iceandfire:tide_green_leggings',
		'iceandfire:tide_purple_leggings',
		'iceandfire:tide_red_leggings',
		'iceandfire:tide_teal_leggings',
		'iceandfire:forest_troll_leather_leggings',
		'iceandfire:frost_troll_leather_leggings',
		'iceandfire:mountain_troll_leather_leggings'
	]
	iaf_leggings.forEach(leggings => {
		leggings_tags.forEach(tag => {
			event.add(tag, leggings)
		})
	})
	const iaf_boots = [
		'iceandfire:armor_silver_metal_boots',
		'iceandfire:armor_copper_metal_boots',
		'iceandfire:sheep_boots',
		'iceandfire:deathworm_yellow_boots',
		'iceandfire:deathworm_white_boots',
		'iceandfire:deathworm_red_boots',
		'iceandfire:dragonsteel_fire_boots',
		'iceandfire:dragonsteel_ice_boots',
		'iceandfire:dragonsteel_lightning_boots',
		'iceandfire:armor_red_boots',
		'iceandfire:armor_bronze_boots',
		'iceandfire:armor_green_boots',
		'iceandfire:armor_gray_boots',
		'iceandfire:armor_blue_boots',
		'iceandfire:armor_white_boots',
		'iceandfire:armor_sapphire_boots',
		'iceandfire:armor_silver_boots',
		'iceandfire:armor_electric_boots',
		'iceandfire:armor_amethyst_boots',
		'iceandfire:armor_copper_boots',
		'iceandfire:armor_black_boots',
		'iceandfire:tide_blue_boots',
		'iceandfire:tide_bronze_boots',
		'iceandfire:tide_deepblue_boots',
		'iceandfire:tide_green_boots',
		'iceandfire:tide_purple_boots',
		'iceandfire:tide_red_boots',
		'iceandfire:tide_teal_boots',
		'iceandfire:forest_troll_leather_boots',
		'iceandfire:frost_troll_leather_boots',
		'iceandfire:mountain_troll_leather_boots'
	]
	iaf_boots.forEach(boots => {
		boots_tags.forEach(tag => {
			event.add(tag, boots)
		})
	})
	
    event.add('fintastic:sugar_glass', 'minecraft:sugar')
    event.add('fintastic:uranium', 'immersiveengineering:raw_uranium')
	let addToBackSlot = [
    "create_jetpack:jetpack",
	"create_jetpack:netherite_jetpack"
	]
	let removeFromCurioSlot = [
	"botania:cosmetic_black_bowtie",
	"botania:cosmetic_black_tie",
	"botania:cosmetic_red_glasses",
	"botania:cosmetic_puffy_scarf",
	"botania:cosmetic_engineer_goggles",
	"botania:cosmetic_eyepatch",
	"botania:cosmetic_wicked_eyepatch",
	"botania:cosmetic_red_ribbons",
	"botania:cosmetic_pink_flower_bud",
	"botania:cosmetic_polka_dotted_bows",
	"botania:cosmetic_blue_butterfly",
	"botania:cosmetic_cat_ears",
	"botania:cosmetic_witch_pin",
	"botania:cosmetic_devil_tail",
	"botania:cosmetic_kamui_eye",
	"botania:cosmetic_googly_eyes",
	"botania:cosmetic_four_leaf_clover",
	"botania:cosmetic_clock_eye",
	"botania:cosmetic_unicorn_horn",
	"botania:cosmetic_devil_horns",
	"botania:cosmetic_hyper_plus",
	"botania:cosmetic_botanist_emblem",
	"botania:cosmetic_ancient_mask",
	"botania:cosmetic_eerie_mask",
	"botania:cosmetic_alien_antenna",
	"botania:cosmetic_anaglyph_glasses",
	"botania:cosmetic_orange_shades",
	"botania:cosmetic_groucho_glasses",
	"botania:cosmetic_thick_eyebrows",
	"botania:cosmetic_lusitanic_shield",
	"botania:cosmetic_tiny_potato_mask",
	"botania:cosmetic_questgiver_mark",
	"botania:cosmetic_thinking_hand"
	]
	addToBackSlot.forEach(item => {
		event.add('curios:back', item) // add create jetpack stuff to the back slot
	})
	removeFromCurioSlot.forEach(item => {
		event.remove('curios:curio', item) // remove botania cosmetics ability to be in any curio slot (they have their own slots now and it bloated the tooltip)
	})
	event.add('forge:workbenches', '#biomeswevegone:crafting_tables')
	let ars_threads = [
	"ars_nouveau:blank_thread",
	"ars_nouveau:thread_depths",
	"ars_nouveau:thread_heights",
	"ars_nouveau:thread_whirlisprig",
	"ars_nouveau:thread_drygmy",
	"ars_nouveau:thread_high_step",
	"ars_nouveau:thread_spellpower",
	"ars_nouveau:thread_life_drain",
	"ars_nouveau:thread_starbuncle",
	"ars_nouveau:thread_chilling",
	"ars_nouveau:thread_undying",
	"ars_nouveau:thread_feather",
	"ars_nouveau:thread_warding",
	"ars_nouveau:thread_gliding",
	"ars_nouveau:thread_immolation",
	"ars_nouveau:thread_amethyst_golem",
	"ars_nouveau:thread_magic_capacity",
	"ars_nouveau:thread_kindling",
	"ars_nouveau:thread_wixie",
	"ars_nouveau:thread_repairing"
	]
	ars_threads.forEach(item => {
		event.add('kubejs:ars_threads', item)
	})
	let createaddition_wires = [
		'createaddition:copper_wire',
		'createaddition:electrum_wire'
	]
	createaddition_wires.forEach(item => {
		event.remove('forge:wires', item)
		event.remove('forge:wires/all_metal', item)
		event.remove('forge:wires/copper', item)
		event.remove('forge:wires/electrum', item)
	})
	event.remove('forge:ingots', 'createaddition:electrum_ingot')
	event.remove('forge:ingots/electrum', 'createaddition:electrum_ingot')
	event.remove('balm:ingots', 'createaddition:electrum_ingot')
	event.remove('minecraft:beacon_payment_items', 'createaddition:electrum_ingot')
	event.remove('forge:nuggets', 'createaddition:electrum_nugget')
	event.remove('forge:nuggets/electrum', 'createaddition:electrum_nugget')
	event.remove('balm:nuggets', 'createaddition:electrum_nugget')
	event.remove('silentgear:gold_digger', 'createaddition:electrum_nugget')
	event.remove('forge:plates', 'createaddition:electrum_sheet')
	event.remove('forge:plates/electrum', 'createaddition:electrum_sheet')
	event.remove('forge:storage_blocks', 'createaddition:electrum_block')
	event.remove('forge:storage_blocks/electrum', 'createaddition:electrum_block')
	event.remove('tconstruct:anvil_metal', 'createaddition:electrum_block')
	event.remove('forge:plates', 'immersiveengineering:plate_copper')
	event.remove('forge:plates/copper', 'immersiveengineering:plate_copper')
	event.remove('forge:ingots', 'tconstruct:steel_ingot')
	event.remove('forge:ingots/steel', 'tconstruct:steel_ingot')
	event.remove('balm:ingots', 'tconstruct:steel_ingot')
	event.remove('minecraft:beacon_payment_items', 'tconstruct:steel_ingot')
	event.remove('forge:nuggets', 'tconstruct:steel_nugget')
	event.remove('forge:nuggets/steel', 'tconstruct:steel_nugget')
	event.remove('balm:nuggets', 'tconstruct:steel_nugget')
	event.remove('silentgear:gold_digger', 'tconstruct:steel_nugget')
	event.remove('forge:storage_blocks', 'tconstruct:steel_block')
	event.remove('forge:storage_blocks/steel', 'tconstruct:steel_block')
	event.remove('forge:plates', 'immersiveengineering:plate_iron')
	event.remove('forge:plates/iron', 'immersiveengineering:plate_iron')
	let copper_nuggets_to_be_removed = [
		'tconstruct:copper_nugget',
		'immersiveengineering:nugget_copper'
	]
	copper_nuggets_to_be_removed.forEach(item => {
		event.remove('forge:nuggets', item)
		event.remove('forge:nuggets/copper', item)
		event.remove('balm:nuggets', item)
		event.remove('silentgear:gold_digger', item)
	})
	let removed_tconstruct_casts = [
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
		'tconstruct:coin_cast'
	]
	removed_tconstruct_casts.forEach(item => {
		event.remove('minecraft:piglin_loved', item)
		event.remove('tconstruct:patterns', item)
		event.remove('tconstruct:patterns/reusable', item)
		event.remove('tconstruct:casts', item)
		event.remove('tconstruct:casts/gold', item)
		event.remove('tconstruct:casts/sand', item)
		event.remove('tconstruct:casts/red_sand', item)
		event.remove('tconstruct:casts/single_use', item)
		event.remove('tconstruct:casts/multi_use', item)
		event.remove('tconstruct:casts/multi_use/repair_kit', item)
		event.remove('tconstruct:casts/multi_use/pick_head', item)
		event.remove('tconstruct:casts/multi_use/small_axe_head', item)
		event.remove('tconstruct:casts/multi_use/small_blade', item)
		event.remove('tconstruct:casts/multi_use/adze_head', item)
		event.remove('tconstruct:casts/multi_use/hammer_head', item)
		event.remove('tconstruct:casts/multi_use/broad_axe_head', item)
		event.remove('tconstruct:casts/multi_use/broad_blade', item)
		event.remove('tconstruct:casts/multi_use/large_plate', item)
		event.remove('tconstruct:casts/multi_use/tool_handle', item)
		event.remove('tconstruct:casts/multi_use/tool_binding', item)
		event.remove('tconstruct:casts/multi_use/tough_handle', item)
		event.remove('tconstruct:casts/multi_use/tough_binding', item)
		event.remove('tconstruct:casts/multi_use/bow_limb', item)
		event.remove('tconstruct:casts/multi_use/bow_grip', item)
		event.remove('tconstruct:casts/multi_use/bowstring', item)
		event.remove('tconstruct:casts/multi_use/helmet_plating', item)
		event.remove('tconstruct:casts/multi_use/chestplate_plating', item)
		event.remove('tconstruct:casts/multi_use/leggings_plating', item)
		event.remove('tconstruct:casts/multi_use/boots_plating', item)
		event.remove('tconstruct:casts/multi_use/maille', item)
		event.remove('tconstruct:casts/multi_use/coin', item)
		event.remove('tconstruct:casts/single_use/repair_kit', item)
		event.remove('tconstruct:casts/single_use/pick_head', item)
		event.remove('tconstruct:casts/single_use/small_axe_head', item)
		event.remove('tconstruct:casts/single_use/small_blade', item)
		event.remove('tconstruct:casts/single_use/adze_head', item)
		event.remove('tconstruct:casts/single_use/hammer_head', item)
		event.remove('tconstruct:casts/single_use/broad_axe_head', item)
		event.remove('tconstruct:casts/single_use/broad_blade', item)
		event.remove('tconstruct:casts/single_use/large_plate', item)
		event.remove('tconstruct:casts/single_use/tool_handle', item)
		event.remove('tconstruct:casts/single_use/tool_binding', item)
		event.remove('tconstruct:casts/single_use/tough_handle', item)
		event.remove('tconstruct:casts/single_use/tough_binding', item)
		event.remove('tconstruct:casts/single_use/bow_limb', item)
		event.remove('tconstruct:casts/single_use/bow_grip', item)
		event.remove('tconstruct:casts/single_use/bowstring', item)
		event.remove('tconstruct:casts/single_use/helmet_plating', item)
		event.remove('tconstruct:casts/single_use/chestplate_plating', item)
		event.remove('tconstruct:casts/single_use/leggings_plating', item)
		event.remove('tconstruct:casts/single_use/boots_plating', item)
		event.remove('tconstruct:casts/single_use/maille', item)
		event.remove('tconstruct:casts/single_use/coin', item)
	})
})

LootJS.modifiers((event) => {
	event.addLootTableModifier("minecraft:chests/shipwreck_supply").removeLoot("farmersdelight:rope");
	event.addLootTableModifier("minecraft:chests/simple_dungeon").removeLoot("farmersdelight:rope");
});

PlayerEvents.decorateChat(event => {
	//emojis
	event.setMessage(event.message.replace(':check:', '§a✔§r'))
	event.setMessage(event.message.replace(':x:', '§c❌§r'))
	event.setMessage(event.message.replace(':skull:', '§7☠§r'))
	event.setMessage(event.message.replace(':fire:', '§6🔥§r'))
	event.setMessage(event.message.replace(':heart:', '§d❤§r'))
	event.setMessage(event.message.replace(':purpleheart:', '§5❤§r'))
	event.setMessage(event.message.replace(':blueheart:', '§3❤§r'))
	//formatting (bold, italic, underline, strikethrough, obfuscated)
	event.setMessage(event.message.replace('\\bold', '§l'))
	event.setMessage(event.message.replace('\\italic', '§o'))
	event.setMessage(event.message.replace('\\underline', '§n'))
	event.setMessage(event.message.replace('\\strike', '§m'))
	event.setMessage(event.message.replace('\\obs', '§k'))
	//colors
	event.setMessage(event.message.replace('\\black', '§0'))
	event.setMessage(event.message.replace('\\darkblue', '§1'))
	event.setMessage(event.message.replace('\\darkgreen', '§2'))
	event.setMessage(event.message.replace('\\cyan', '§3'))
	event.setMessage(event.message.replace('\\darkred', '§4'))
	event.setMessage(event.message.replace('\\purple', '§5'))
	event.setMessage(event.message.replace('\\orange', '§6'))
	event.setMessage(event.message.replace('\\gray', '§7'))
	event.setMessage(event.message.replace('\\darkgray', '§8'))
	event.setMessage(event.message.replace('\\blue', '§9'))
	event.setMessage(event.message.replace('\\green', '§a'))
	event.setMessage(event.message.replace('\\teal', '§b'))
	event.setMessage(event.message.replace('\\red', '§c'))
	event.setMessage(event.message.replace('\\pink', '§d'))
	event.setMessage(event.message.replace('\\yellow', '§e'))
	event.setMessage(event.message.replace('\\white', '§f'))
	//reset
	event.setMessage(event.message.replace('\\reset', '§r'))
})
/*
ServerEvents.customCommand('head', event => {
    const VALID_HEADS = [
        'skeleton_skull',
        'wither_skeleton_skull',
        'player_head',
        'zombie_head',
        'creeper_head',
        'gaia_head',
        'blaze_head',
        'enderman_head',
        'stray_head',
        'husk_head',
        'drowned_head',
        'spider_head',
        'cave_spider_head',
        'piglin_brute_head',
        'zombified_piglin_head'
    ]
    if(event.player.getHeldItem(0).nbt && event.player.getHeldItem(0).nbt.display && event.player.getHeldItem(0).nbt.display.Name && (VALID_HEADS.indexOf(event.player.getHeldItem(0).item) != -1)){
        let playerName = JSON.parse(event.player.getHeldItem(0).nbt.display.Name).text
        const SKULL_OWNER = '{SkullOwner:"'
        event.player.setHeldItem(0, Item.of('minecraft:player_head', event.player.getHeldItem(0).count, SKULL_OWNER.concat(playerName, '"}')))
        event.player.tell(Text.green("Successfully converted held item into ").append(playerName).append("'s Head."))
    }
    else {
        event.player.tell(Text.red("Failed to convert held item into Player Head. ").append(Text.white("Are you holding a valid mob head? Is the mob head named to the player you want?")))
    }
})
*/