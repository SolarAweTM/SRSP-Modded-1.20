// priority: 0

console.info('-KubeJS- Create server script loaded.')
// requires: kubejs_create
ServerEvents.recipes(event => {
	// crushing compatibility
	event.recipes.create.crushing('silentgear:blaze_gold_dust', 'silentgear:blaze_gold_ingot')

	// renewable iron
	event.remove({ id: 'create:splashing/crushed_raw_iron' })
	event.recipes.create.splashing(['9x minecraft:iron_nugget', Item.of('minecraft:iron_nugget').withChance(0.25), Item.of('minecraft:redstone').withChance(0.1)], 'create:crushed_raw_iron')
	
	// renewable netherite with create via crushing gilded blackstone
	event.remove({ id: 'create:crushing/gilded_blackstone' })
	event.recipes.create.crushing([
		'18x minecraft:gold_nugget', 
		Item.of('create:experience_nugget').withChance(0.75), 
		Item.of('minecraft:blackstone').withChance(0.12), 
		Item.of('minecraft:netherite_scrap').withChance(0.1)
	], 'minecraft:gilded_blackstone')
	  
	// handle rose quartz compatibility between biomes o plenty and create
	event.remove({ id: 'create:sandpaper_polishing/rose_quartz' })
	event.recipes.create.sandpaper_polishing('create:polished_rose_quartz', '#kubejs:rose_quartz_material')
	event.remove({ id: 'create:rose_quartz_block_from_rose_quartz_stonecutting' })
	event.stonecutting('2x create:rose_quartz_block', '#kubejs:rose_quartz_material')
	event.remove({ id: 'biomesoplenty:rose_quartz_block' })
	event.shaped(
		'biomesoplenty:rose_quartz_block',
		[
			'AA',
			'AA'
		],
		{
			A: '#kubejs:rose_quartz_material'
		}
	)
	
	//crushed raw ores for millstone
	let rawOres = [
		'minecraft:raw_iron',
		'minecraft:raw_gold',
		'minecraft:raw_copper',
		'create:raw_zinc',
		'silentgear:raw_crimson_iron',
		'silentgear:raw_azure_silver',
		'tconstruct:raw_cobalt'
	]
	let crushedRawOres = [
		'create:crushed_raw_iron',
		'create:crushed_raw_gold',
		'create:crushed_raw_copper',
		'create:crushed_raw_zinc',
		'kubejs:crushed_raw_crimson_iron',
		'kubejs:crushed_raw_azure_silver',
		'kubejs:crushed_raw_cobalt'
	]
	for(let i = 0; i < rawOres.length; i++) {
		event.recipes.create.milling([crushedRawOres[i], Item.of(crushedRawOres[i]).withChance(0.25)], rawOres[i])
	}
	//remove old crushed raw ores for crushing wheels
	let oldCrushedRecipes = [
		'create:crushing/raw_iron',
		'create:crushing/raw_copper',
		'create:crushing/raw_gold',
		'create:crushing/raw_zinc'
	]
	oldCrushedRecipes.forEach(item => {
		event.remove({id:item})
	})
	//improved crushed raw ores for crushing wheels
	for(let i = 0; i < rawOres.length; i++) {
		event.recipes.create.crushing([crushedRawOres[i], Item.of(crushedRawOres[i]).withChance(0.50), Item.of('create:experience_nugget').withChance(0.75)], rawOres[i])
	}
	//new processing for the new crushed ores
	//bulk washing
	event.recipes.create.splashing(['9x silentgear:crimson_iron_nugget', Item.of('silentgear:crimson_iron_nugget').withChance(0.25), Item.of('minecraft:quartz').withChance(0.1)], 'kubejs:crushed_raw_crimson_iron')
	event.recipes.create.splashing(['9x silentgear:azure_silver_nugget', Item.of('silentgear:azure_silver_nugget').withChance(0.25), Item.of('minecraft:chorus_fruit').withChance(0.05)], 'kubejs:crushed_raw_azure_silver')
	event.recipes.create.splashing(['9x tconstruct:cobalt_nugget', Item.of('tconstruct:cobalt_nugget').withChance(0.25)], 'kubejs:crushed_raw_cobalt')
	//smelting
	event.smelting('silentgear:crimson_iron_ingot', 'kubejs:crushed_raw_crimson_iron').xp(0.1).cookingTime(200)
	event.smelting('silentgear:azure_silver_ingot', 'kubejs:crushed_raw_azure_silver').xp(0.1).cookingTime(200)
	//blasting
	event.blasting('silentgear:crimson_iron_ingot', 'kubejs:crushed_raw_crimson_iron').xp(0.1).cookingTime(100)
	event.blasting('silentgear:azure_silver_ingot', 'kubejs:crushed_raw_azure_silver').xp(0.1).cookingTime(100)
	//recreate the precision mechanism recipe with one that doesnt fail
	event.remove({id:'create:sequenced_assembly/precision_mechanism'})
	event.recipes.create.sequenced_assembly(
		//outputs
		[
			Item.of('create:precision_mechanism').withChance(130), //output(s)
		],
		//input
		'create:golden_sheet', 
		//sequence
		[
			event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel',]),
			event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel',]),
			event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget',]),
		]
    )
    .transitionalItem('create:incomplete_precision_mechanism') //transitional item
    .loops(5) //loop count
})

ServerEvents.tags('item', event => {
	// rose quartz compatibility
	event.add('kubejs:rose_quartz_material', 'create:rose_quartz')
	event.add('kubejs:rose_quartz_material', 'biomesoplenty:rose_quartz_chunk')
	// new raw ores
	let newRawOres = [
		'kubejs:crushed_raw_crimson_iron',
		'kubejs:crushed_raw_azure_silver',
		'kubejs:crushed_raw_cobalt'
	]
	newRawOres.forEach(item => {
		event.add('create:crushed_raw_materials', item)
	})
})