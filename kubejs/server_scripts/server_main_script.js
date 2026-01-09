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
})

ServerEvents.tags('block', event => {
	event.add('framedblocks:frameable', 'ars_nouveau:source_gem_block')
	event.add('forge:workbenches', '#biomeswevegone:crafting_tables')
})

ServerEvents.tags('item', event => {
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