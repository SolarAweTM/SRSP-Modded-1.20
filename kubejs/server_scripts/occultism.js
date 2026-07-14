// priority: 0

console.info('-KubeJS- Occultism server script loaded.')

ServerEvents.recipes(event => {
	//remove soul gems
	event.remove({output: 'occultism:soul_gem'})
	event.replaceInput({id: 'occultism:ritual/craft_familiar_ring'},
		'occultism:soul_gem',
		'ars_nouveau:ritual_containment')
	//fire dragon ritual
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_marid'},
		pentacle_id: 'occultism:summon_wild_greater_spirit',
		duration: 20,
		entity_to_summon: 'iceandfire:fire_dragon',
		entity_nbt: {
			AgeTicks: 2400000,
			Health: 1616.0,
			Gender: 0
		},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'quark:dragon_scale'},
			{item: 'ars_nouveau:wilden_wing'},
			{item: 'ars_nouveau:wilden_wing'},
			{item: 'iceandfire:fire_lily'},
			{item: 'iceandfire:fire_lily'},
			{item: 'iceandfire:fire_lily'},
			{item: 'minecraft:nether_star'},
			{item: 'minecraft:nether_star'},
			{item: 'minecraft:nether_star'},
			{item: 'minecraft:nether_star'},
			{item: 'ars_elemental:anima_essence'},
			{item: 'ars_nouveau:ritual_awakening'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//ice dragon ritual
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_marid'},
		pentacle_id: 'occultism:summon_wild_greater_spirit',
		duration: 20,
		entity_to_summon: 'iceandfire:ice_dragon',
		entity_nbt: {
			AgeTicks: 2400000,
			Health: 1616.0,
			Gender: 0
		},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'quark:dragon_scale'},
			{item: 'ars_nouveau:wilden_wing'},
			{item: 'ars_nouveau:wilden_wing'},
			{item: 'iceandfire:frost_lily'},
			{item: 'iceandfire:frost_lily'},
			{item: 'iceandfire:frost_lily'},
			{item: 'minecraft:nether_star'},
			{item: 'minecraft:nether_star'},
			{item: 'minecraft:nether_star'},
			{item: 'minecraft:nether_star'},
			{item: 'ars_elemental:anima_essence'},
			{item: 'ars_nouveau:ritual_awakening'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//lightning dragon ritual
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_marid'},
		pentacle_id: 'occultism:summon_wild_greater_spirit',
		duration: 20,
		entity_to_summon: 'iceandfire:lightning_dragon',
		entity_nbt: {
			AgeTicks: 2400000,
			Health: 1616.0,
			Gender: 0
		},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'quark:dragon_scale'},
			{item: 'ars_nouveau:wilden_wing'},
			{item: 'ars_nouveau:wilden_wing'},
			{item: 'iceandfire:lightning_lily'},
			{item: 'iceandfire:lightning_lily'},
			{item: 'iceandfire:lightning_lily'},
			{item: 'minecraft:nether_star'},
			{item: 'minecraft:nether_star'},
			{item: 'minecraft:nether_star'},
			{item: 'minecraft:nether_star'},
			{item: 'ars_elemental:anima_essence'},
			{item: 'ars_nouveau:ritual_awakening'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	
	//amphithere
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_foliot'},
		pentacle_id: 'occultism:summon_foliot',
		duration: 5,
		entity_to_summon: 'iceandfire:amphithere',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'ars_nouveau:air_essence'},
			{item: 'minecraft:feather'},
			{item: 'minecraft:arrow'},
			{item: 'minecraft:vine'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//ghost
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_foliot'},
		pentacle_id: 'occultism:summon_foliot',
		duration: 5,
		entity_to_summon: 'iceandfire:ghost',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'iceandfire:silver_ingot'},
			{item: 'ars_nouveau:ghostweave'},
			{item: 'ars_nouveau:ghostweave'},
			{item: 'minecraft:mossy_cobblestone'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//hippocampus
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_foliot'},
		pentacle_id: 'occultism:summon_foliot',
		duration: 5,
		entity_to_summon: 'iceandfire:hippocampus',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'ars_nouveau:water_essence'},
			{item: 'minecraft:tropical_fish'},
			{item: 'minecraft:prismarine_crystals'},
			{item: 'minecraft:saddle'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//pixie
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:craft',
		activation_item: {item: 'occultism:book_of_binding_bound_djinni'},
		pentacle_id: 'occultism:summon_djinni',
		duration: 5,
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'botania:pixie_dust'},
			{item: 'botania:pixie_dust'},
			{item: 'ars_nouveau:whirlisprig_shards'},
			{item: 'iceandfire:pixie_jar_empty'}
		],
		result: {item: 'iceandfire:spawn_egg_pixie'}
	})
	//troll
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_djinni'},
		pentacle_id: 'occultism:summon_djinni',
		duration: 5,
		entity_to_summon: 'iceandfire:troll',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: '#minecraft:walls'},
			{item: '#minecraft:walls'},
			{item: '#forge:leather'},
			{item: 'minecraft:shield'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//stymphalian bird
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_djinni'},
		pentacle_id: 'occultism:summon_djinni',
		duration: 5,
		entity_to_summon: 'iceandfire:stymphalian_bird',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'ars_nouveau:air_essence'},
			{item: 'minecraft:feather'},
			{item: 'aquaculture:iron_fillet_knife'},
			{item: 'minecraft:acacia_sapling'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//cockatrice
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_afrit'},
		pentacle_id: 'occultism:summon_wild_afrit',
		duration: 5,
		entity_to_summon: 'iceandfire:cockatrice',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'minecraft:ender_eye'},
			{item: 'minecraft:wither_skeleton_skull'},
			{item: 'ars_nouveau:air_essence'},
			{item: 'ars_nouveau:air_essence'},
			{item: 'minecraft:feather'},
			{item: 'minecraft:feather'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//hippogryph
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_afrit'},
		pentacle_id: 'occultism:summon_wild_afrit',
		duration: 5,
		entity_to_summon: 'iceandfire:hippogryph',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'minecraft:rabbit_foot'},
			{item: 'minecraft:rabbit_foot'},
			{item: 'minecraft:emerald'},
			{item: 'ars_nouveau:air_essence'},
			{item: 'ars_nouveau:sky_block'},
			{item: 'minecraft:feather'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//siren
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_afrit'},
		pentacle_id: 'occultism:summon_wild_afrit',
		duration: 5,
		entity_to_summon: 'iceandfire:siren',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'minecraft:prismarine_shard'},
			{item: 'minecraft:prismarine_shard'},
			{item: 'ars_elemental:siren_shards'},
			{item: 'ars_nouveau:water_essence'},
			{item: 'iceandfire:earplugs'},
			{item: 'minecraft:cod'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//death worm
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_afrit'},
		pentacle_id: 'occultism:summon_wild_afrit',
		duration: 5,
		entity_to_summon: 'iceandfire:deathworm',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'minecraft:sand'},
			{item: 'minecraft:sand'},
			{item: 'ars_elemental:fire_essence'},
			{item: 'aquaculture:worm'},
			{item: 'minecraft:rotten_flesh'},
			{item: 'minecraft:rotten_flesh'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//gorgon
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_afrit'},
		pentacle_id: 'occultism:summon_afrit',
		duration: 5,
		entity_to_summon: 'iceandfire:gorgon',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'minecraft:stone'},
			{item: 'iceandfire:blindfold'},
			{item: 'ars_nouveau:earth_essence'},
			{item: 'ars_elemental:anima_essence'},
			{item: 'ars_nouveau:mirrorweave'},
			{item: 'ars_nouveau:mirrorweave'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//cyclops
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_afrit'},
		pentacle_id: 'occultism:summon_afrit',
		duration: 5,
		entity_to_summon: 'iceandfire:cyclops',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'minecraft:arrow'},
			{item: 'minecraft:white_wool'},
			{item: 'ars_nouveau:earth_essence'},
			{item: 'ars_nouveau:abjuration_essence'},
			{item: 'minecraft:ender_eye'},
			{item: 'minecraft:mutton'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//sea serpent
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_marid'},
		pentacle_id: 'occultism:summon_marid',
		duration: 5,
		entity_to_summon: 'iceandfire:sea_serpent',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'minecraft:prismarine_bricks'},
			{item: 'minecraft:prismarine_bricks'},
			{item: 'ars_nouveau:water_essence'},
			{item: 'ars_nouveau:abjuration_essence'},
			{item: 'minecraft:pufferfish'},
			{item: 'ars_nouveau:water_essence'},
			{item: 'ars_nouveau:abjuration_essence'},
			{item: 'minecraft:trident'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
	//hydra
	event.custom({
		type: 'occultism:ritual',
		ritual_type: 'occultism:summon',
		activation_item: {item: 'occultism:book_of_binding_bound_marid'},
		pentacle_id: 'occultism:summon_marid',
		duration: 5,
		entity_to_summon: 'iceandfire:hydra',
		entity_nbt: {},
		ritual_dummy: {item: 'occultism:ritual_dummy/custom_ritual'},
		ingredients: [
			{item: 'minecraft:wither_skeleton_skull'},
			{item: 'minecraft:wither_skeleton_skull'},
			{item: 'minecraft:wither_skeleton_skull'},
			{item: 'ars_nouveau:earth_essence'},
			{item: 'ars_nouveau:abjuration_essence'},
			{item: 'ars_nouveau:abjuration_essence'},
			{item: 'ars_nouveau:earth_essence'},
			{item: 'minecraft:poisonous_potato'}
		],
		result: {item: 'occultism:jei_dummy/none'}
	})
})