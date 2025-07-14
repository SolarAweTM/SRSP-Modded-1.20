// priority: 0

console.info('-KubeJS- Aquaculture 2 server script loaded.')

LootJS.modifiers((event) => {
	//add neptunium and its smithing template to buried treasure
	event.addLootTableModifier("minecraft:chests/buried_treasure").pool((pool) => {
		pool.addLoot("kubejs:neptunium_upgrade_smithing_template");
		pool.randomChance(0.35).addLoot("aquaculture:neptunium_ingot"); //35% chance
	})
	//add neptunium nuggets to underwater ruins treasure
	event.addLootTableModifier("minecraft:chests/underwater_ruin_small").pool((pool) => {
		pool.rolls([1, 3]); //1 to 3 rolls at random
		pool.randomChance(0.35).addLoot("aquaculture:neptunium_nugget"); //35% chance
		//in total: 35% chance to get up to 3 neptunium nuggets per chest
	})
});

ServerEvents.recipes(event => {
	//add smithing recipe for netherite to neptunium
	event.smithing(
	'aquaculture:neptunium_helmet',
	'kubejs:neptunium_upgrade_smithing_template',
	'minecraft:netherite_helmet',
	'aquaculture:neptunium_ingot')
	event.smithing(
	'aquaculture:neptunium_chestplate',
	'kubejs:neptunium_upgrade_smithing_template',
	'minecraft:netherite_chestplate',
	'aquaculture:neptunium_ingot')
	event.smithing(
	'aquaculture:neptunium_leggings',
	'kubejs:neptunium_upgrade_smithing_template',
	'minecraft:netherite_leggings',
	'aquaculture:neptunium_ingot')
	event.smithing(
	'aquaculture:neptunium_boots',
	'kubejs:neptunium_upgrade_smithing_template',
	'minecraft:netherite_boots',
	'aquaculture:neptunium_ingot')
	event.smithing(
	'aquaculture:neptunium_pickaxe',
	'kubejs:neptunium_upgrade_smithing_template',
	'minecraft:netherite_pickaxe',
	'aquaculture:neptunium_ingot')
	event.smithing(
	'aquaculture:neptunium_axe',
	'kubejs:neptunium_upgrade_smithing_template',
	'minecraft:netherite_axe',
	'aquaculture:neptunium_ingot')
	event.smithing(
	'aquaculture:neptunium_shovel',
	'kubejs:neptunium_upgrade_smithing_template',
	'minecraft:netherite_shovel',
	'aquaculture:neptunium_ingot')
	event.smithing(
	'aquaculture:neptunium_hoe',
	'kubejs:neptunium_upgrade_smithing_template',
	'minecraft:netherite_hoe',
	'aquaculture:neptunium_ingot')
	event.smithing(
	'aquaculture:neptunium_sword',
	'kubejs:neptunium_upgrade_smithing_template',
	'minecraft:netherite_sword',
	'aquaculture:neptunium_ingot')
	event.smithing(
	'aquaculture:neptunium_fillet_knife',
	'kubejs:neptunium_upgrade_smithing_template',
	'farmersdelight:netherite_knife',
	'aquaculture:neptunium_ingot')
	//remove default recipes for the above
	event.remove({id:'aquaculture:neptunium_helmet'})
	event.remove({id:'aquaculture:neptunium_chestplate'})
	event.remove({id:'aquaculture:neptunium_leggings'})
	event.remove({id:'aquaculture:neptunium_boots'})
	event.remove({id:'aquaculture:neptunium_pickaxe'})
	event.remove({id:'aquaculture:neptunium_axe'})
	event.remove({id:'aquaculture:neptunium_shovel'})
	event.remove({id:'aquaculture:neptunium_hoe'})
	event.remove({id:'aquaculture:neptunium_sword'})
	event.remove({id:'aquaculture:neptunium_fillet_knife'})
	//duplication recipe for neptunium upgrade
	event.shaped(
		Item.of('kubejs:neptunium_upgrade_smithing_template', 2),
		[
			'ACA',
			'ABA',
			'AAA'
		],
		{
			A: 'aquaculture:neptunium_nugget',
			B: 'minecraft:gravel',
			C: 'kubejs:neptunium_upgrade_smithing_template'
		}
	)
})