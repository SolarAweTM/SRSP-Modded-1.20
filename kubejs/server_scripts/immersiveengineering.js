// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Immersive Engineering server script loaded.')

ServerEvents.recipes(event => {
	//remove the mechanical component recipes
	event.remove({id:'immersiveengineering:crafting/component_iron'})
	event.remove({id:'immersiveengineering:crafting/component_steel'})
	event.remove({id:'immersiveengineering:blueprint/component_iron'})
	event.remove({id:'immersiveengineering:blueprint/component_steel'})
	//readd the aforementioned recipes using create
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
	.transitionalItem('kubejs:incomplete_steel_component')
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
    //remove functionality from the machinist
	event.removeModdedTrades(['immersiveengineering:machinist'], [1,4])
})