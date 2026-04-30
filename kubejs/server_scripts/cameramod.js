// priority: 0

console.info('-KubeJS- Camera Mod server script loaded.')

ServerEvents.recipes(event => {
	event.remove({id:'camera:camera'})
	event.shaped(
		Item.of('camera:camera'),
		[
			'IRB',
			'IGI',
			'III'
		],
		{
			I: '#forge:plates/iron',
			R: 'create:polished_rose_quartz',
			B: 'minecraft:stone_button',
			G: '#forge:glass_panes/colorless'
		}
	)
})