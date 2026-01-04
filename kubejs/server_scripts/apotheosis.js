// priority: 0

console.info('-KubeJS- Apotheosis server script loaded.')

ServerEvents.recipes(event => {
	//balance apotheosis spawner modifier recipes
	//done with kubejs for organization; the blank datapack jsons are there to remove the default recipes
	//ignore conditions and inverse
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'quark:dragon_scale'
		},
		stat_changes: [{
			id: 'ignore_conditions',
			value: true
		}]
	})
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'quark:dragon_scale'
		},
		offhand: {
			item: 'minecraft:quartz'
		},
		consumes_offhand: false,
		stat_changes: [{
			id: 'ignore_conditions',
			value: false
		}]
	})
	// max delay and inverse
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'create:cuckoo_clock'
		},
		stat_changes: [{
			id: 'max_delay',
			value: -10,
			min: 100,
			max: -1
		}]
	})
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'create:cuckoo_clock'
		},
		offhand: {
			item: 'minecraft:quartz'
		},
		consumes_offhand: false,
		stat_changes: [{
			id: 'max_delay',
			value: 10,
			min: 100,
			max: -1
		}]
	})
	//spawn count and inverse
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'minecraft:fermented_spider_eye'
		},
		stat_changes: [{
			id: 'spawn_count',
			value: 1,
			min: -1,
			max: 8
		}]
	})
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'minecraft:fermented_spider_eye'
		},
		offhand: {
			item: 'minecraft:quartz'
		},
		consumes_offhand: false,
		stat_changes: [{
			id: 'spawn_count',
			value: -1,
			min: -1,
			max: 8
		}]
	})
	//max nearby entities and inverse
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'minecraft:ghast_tear'
		},
		stat_changes: [{
			id: 'max_nearby_entities',
			value: 2,
			min: -1,
			max: 16
		}]
	})
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'minecraft:ghast_tear'
		},
		offhand: {
			item: 'minecraft:quartz'
		},
		consumes_offhand: false,
		stat_changes: [{
			id: 'max_nearby_entities',
			value: -2,
			min: -1,
			max: 16
		}]
	})
	//min delay and inverse
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'botania:pixie_dust'
		},
		stat_changes: [{
			id: 'min_delay',
			value: -10,
			min: 100,
			max: -1
		}]
	})
	event.custom({
		type: 'apotheosis:spawner_modifier',
		conditions: [{
			type: 'apotheosis:module',
			module: 'spawner'
		}],
		mainhand: {
			item: 'botania:pixie_dust'
		},
		offhand: {
			item: 'minecraft:quartz'
		},
		consumes_offhand: false,
		stat_changes: [{
			id: 'min_delay',
			value: 10,
			min: 100,
			max: -1
		}]
	})
	
	//remove gem related recipes due to gems being disabled in phase 1 (will be reinstated in future phases)
	event.remove({output:'apotheosis:gem_cutting_table'})
	event.remove({output:'apotheosis:sigil_of_rebirth'})
	event.remove({output:'apotheosis:sigil_of_withdrawal'})
	event.remove({output:'apotheosis:sigil_of_socketing'})
	event.remove({output:'apotheosis:gem_fused_slate'})
	event.remove({output:'apotheosis:sigil_of_enhancement'})
	event.remove({output:'apotheosis:sigil_of_unnaming'})
	//reinstate the sigil of unnaming because it still has a use
	event.shaped('apotheosis:sigil_of_unnaming',
		[
			'DDD',
			'FFF',
			'DDD'
		],
		{
			D: 'minecraft:deepslate',
			F: 'minecraft:flint'
		}
	)
	//remove augmenting table recipe due to not being able to get mythic materials yet (impossible recipe)
	event.remove({output:'apotheosis:augmenting_table'})
	//same applies to the normal reforging table
	event.remove({output:'apotheosis:reforging_table'})
	//replace the simple reforging table recipe with one without gem dust
	event.remove({output:'apotheosis:simple_reforging_table'})
	event.shaped('apotheosis:simple_reforging_table',
		[
			' I ',
			'GEG',
			'SSS'
		],
		{
			I: 'minecraft:iron_ingot',
			E: 'minecraft:enchanting_table',
			S: 'minecraft:smooth_stone',
			G: 'apotheosis:common_material'
		}
	)
	//do the same for the salvaging table
	event.remove({output:'apotheosis:salvaging_table'})
	event.shaped('apotheosis:salvaging_table',
		[
			'CCC',
			'PSA',
			'GLG'
		],
		{
			C: 'minecraft:copper_ingot',
			P: 'minecraft:iron_pickaxe',
			S: 'minecraft:smithing_table',
			A: 'minecraft:iron_axe',
			L: 'minecraft:lava_bucket',
			G: 'minecraft:iron_ingot'
		}
	)
	//artificially clamp enchanting to max level 45
	event.remove({output:'apotheosis:infused_hellshelf'})
	event.remove({output:'apotheosis:blazing_hellshelf'})
	event.remove({output:'apotheosis:glowing_hellshelf'})
	event.remove({output:'apotheosis:infused_seashelf'})
	event.remove({output:'apotheosis:crystal_seashelf'})
	event.remove({output:'apotheosis:heart_seashelf'})
	event.remove({output:'apotheosis:deepshelf'})
	event.remove({output:'apotheosis:echoing_deepshelf'})
	event.remove({output:'apotheosis:soul_touched_deepshelf'})
	event.remove({output:'apotheosis:echoing_sculkshelf'})
	event.remove({output:'apotheosis:soul_touched_sculkshelf'})
	event.remove({output:'apotheosis:endshelf'})
	event.remove({output:'apotheosis:pearl_endshelf'})
	event.remove({output:'apotheosis:draconic_endshelf'})
	event.remove({output:'apotheosis:rectifier'})
	event.remove({output:'apotheosis:rectifier_t2'})
	event.remove({output:'apotheosis:rectifier_t3'})
	event.remove({output:'apotheosis:sightshelf'})
	event.remove({output:'apotheosis:sightshelf_t2'})
	event.remove({output:'apotheosis:treasure_shelf'})
	event.remove({output:'apotheosis:filtering_shelf'})
	//reinstate the filtering shelf
	event.shaped('apotheosis:filtering_shelf',
		[
			'PBP',
			'SSS',
			'PBP'
		],
		{
			P: 'minecraft:prismarine_bricks',
			B: 'apotheosis:seashelf',
			S: 'minecraft:prismarine_brick_slab'
		}
	)
	//redo the enchantment library recipe
	event.remove({output:'apotheosis:library'})
	event.shaped('apotheosis:library',
		[
			'EBE',
			'BTB',
			'EBE'
		],
		{
			E: 'minecraft:ender_chest',
			B: ['apotheosis:hellshelf','apotheosis:seashelf'],
			T: 'minecraft:enchanting_table'
		}
	)
})

LootJS.modifiers((event) => {
	//remove spawn eggs from apotheosis pools
	event.addLootTableModifier("apotheosis:chests/spawner_swarm").removeLoot("minecraft:enderman_spawn_egg");
	event.addLootTableModifier("apotheosis:chests/spawner_swarm").removeLoot("minecraft:creeper_spawn_egg");
	event.addLootTableModifier("apotheosis:chests/spawner_swarm").removeLoot("minecraft:zombie_spawn_egg");
	event.addLootTableModifier("apotheosis:chests/spawner_swarm").removeLoot("minecraft:skeleton_spawn_egg");
	event.addLootTableModifier("apotheosis:chests/spawner_swarm").removeLoot("minecraft:cave_spider_spawn_egg");
	event.addLootTableModifier("apotheosis:chests/spawner_swarm").removeLoot("minecraft:spider_spawn_egg");
	event.addLootTableModifier("apotheosis:chests/spawner_swarm").removeLoot("minecraft:slime_spawn_egg");
	event.addLootTableModifier("apotheosis:chests/spawner_swarm").removeLoot("minecraft:silverfish_spawn_egg");
});