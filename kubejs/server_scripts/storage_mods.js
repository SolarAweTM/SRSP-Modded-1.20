// priority: 0

console.info('-KubeJS- Storage Mod server script loaded.')

ServerEvents.recipes(event => {
	let soph_drawers = [
		'sophisticatedstorage:limited_barrel_1',
		'sophisticatedstorage:limited_barrel_2',
		'sophisticatedstorage:limited_barrel_3',
		'sophisticatedstorage:limited_barrel_4',
		'sophisticatedstorage:limited_iron_barrel_1',
		'sophisticatedstorage:limited_iron_barrel_2',
		'sophisticatedstorage:limited_iron_barrel_3',
		'sophisticatedstorage:limited_iron_barrel_4',
		'sophisticatedstorage:limited_copper_barrel_1',
		'sophisticatedstorage:limited_copper_barrel_2',
		'sophisticatedstorage:limited_copper_barrel_3',
		'sophisticatedstorage:limited_copper_barrel_4',
		'sophisticatedstorage:limited_gold_barrel_1',
		'sophisticatedstorage:limited_gold_barrel_2',
		'sophisticatedstorage:limited_gold_barrel_3',
		'sophisticatedstorage:limited_gold_barrel_4',
		'sophisticatedstorage:limited_diamond_barrel_1',
		'sophisticatedstorage:limited_diamond_barrel_2',
		'sophisticatedstorage:limited_diamond_barrel_3',
		'sophisticatedstorage:limited_diamond_barrel_4',
		'sophisticatedstorage:limited_netherite_barrel_1',
		'sophisticatedstorage:limited_netherite_barrel_2',
		'sophisticatedstorage:limited_netherite_barrel_3',
		'sophisticatedstorage:limited_netherite_barrel_4'
	]
	//remove all sophisticated drawer (limited barrel) recipes
	soph_drawers.forEach(item => {
		event.remove({output: item})
	})
	
	let disabled_storagedrawers_items = [
		'storagedrawers:conversion_upgrade',
		'storagedrawers:portability_upgrade',
		'storagedrawers:personal_key_cofh'
	]
	disabled_storagedrawers_items.forEach(item => {
		event.remove({output: item})
	})
})