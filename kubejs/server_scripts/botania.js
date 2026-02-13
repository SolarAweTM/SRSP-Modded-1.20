// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Botania server script loaded.')

ServerEvents.recipes(event => {
	//ars nouveau to botania recipes
	event.recipes.botania.mana_infusion("ars_nouveau:source_gem", "minecraft:amethyst_shard", 3000) // RESULT, INPUT, MANA_COST, CATALYST
	event.recipes.botania.mana_infusion("ars_nouveau:source_gem", "minecraft:lapis_lazuli", 3000)
	event.recipes.botania.elven_trade(["ars_nouveau:starbuncle_shards"], "minecraft:gold_block")
	event.recipes.botania.elven_trade([Item.of('minecraft:written_book', '{author:"The Elves of Alfheim",filtered_title:"Urgent Message",pages:[\'{"text":"What the hell is wrong with you?"}\'],title:"Urgent Message"}')], 'kubejs:skibidi_hawk_tuah')
	//estrogen dream block recipe because the dreaming effect is quite undesirable
	event.recipes.botania.elven_trade(["estrogen:dream_bottle"], "estrogen:dormant_dream_block")
	//remove conjuration catalyst
	event.remove({ output: 'botania:conjuration_catalyst' })
	//remove terrasteel armor recipes for ars nouveau
	event.remove({ id: 'botania:terrasteel_helmet' })
	event.remove({ id: 'botania:terrasteel_chestplate' })
	event.remove({ id: 'botania:terrasteel_leggings' })
	event.remove({ id: 'botania:terrasteel_boots' })
	event.remove({ id: 'botania:terra_pick' })
	event.remove({ id: 'botania:terra_axe' })
	event.remove({ id: 'botania:terra_sword' })
	//duplication recipe for terrasteel upgrade
	event.shaped(
		Item.of('kubejs:terrasteel_upgrade_smithing_template', 2),
		[
			'ACA',
			'ABA',
			'AAA'
		],
		{
			A: 'botania:terrasteel_ingot',
			B: '#botania:livingwood_logs',
			C: 'kubejs:terrasteel_upgrade_smithing_template'
		}
	)
	// the actual smithing recipes for terrasteel
	/* TO BE ENABLED IN A FUTURE PHASE
	event.smithing(
	'botania:terrasteel_helmet',
	'kubejs:terrasteel_upgrade_smithing_template',
	'minecraft:netherite_helmet',
	'botania:gaia_ingot')
	event.smithing(
	'botania:terrasteel_chestplate',
	'kubejs:terrasteel_upgrade_smithing_template',
	'minecraft:netherite_chestplate',
	'botania:gaia_ingot')
	event.smithing(
	'botania:terrasteel_leggings',
	'kubejs:terrasteel_upgrade_smithing_template',
	'minecraft:netherite_leggings',
	'botania:gaia_ingot')
	event.smithing(
	'botania:terrasteel_boots',
	'kubejs:terrasteel_upgrade_smithing_template',
	'minecraft:netherite_boots',
	'botania:gaia_ingot')
	*/
	event.smithing(
	'botania:terra_sword',
	'kubejs:terrasteel_upgrade_smithing_template',
	'minecraft:netherite_sword',
	'botania:gaia_ingot')
	event.smithing(
	'botania:terra_pick',
	'kubejs:terrasteel_upgrade_smithing_template',
	'minecraft:netherite_pickaxe',
	'botania:gaia_ingot')
	event.smithing(
	'botania:terra_axe',
	'kubejs:terrasteel_upgrade_smithing_template',
	'minecraft:netherite_axe',
	'botania:gaia_ingot')
	//alternate recipe for tiara that requires an elytra
	event.remove({id:'botania:flighttiara_0'})
	event.shaped(
		Item.of('botania:flight_tiara'),
		[
			'AAA',
			'BAB',
			'CDC'
		],
		{
			A: 'botania:life_essence',
			B: 'botania:elementium_ingot',
			C: 'minecraft:feather',
			D: 'minecraft:elytra'
		}
	)
})