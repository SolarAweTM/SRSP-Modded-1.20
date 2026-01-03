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