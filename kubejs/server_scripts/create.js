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
})

ServerEvents.tags('item', event => {
	// rose quartz compatibility
	event.add('kubejs:rose_quartz_material', 'create:rose_quartz')
	event.add('kubejs:rose_quartz_material', 'biomesoplenty:rose_quartz_chunk')
})