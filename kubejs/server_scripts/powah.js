// priority: 0

console.info('-KubeJS- Powah server script loaded.')

ServerEvents.recipes(event => {
	//recipe for tier 5 grader catalyst
	event.custom({
		type: 'powah:energizing',
		ingredients:[
			{item: 'iceandfire:lightning_lily'},
			{item: 'minecraft:ancient_debris'},
			{item: 'ae2:fluix_dust'},
			{item: 'ae2:fluix_dust'},
			{item: 'botania:pixie_dust'},
			{item: 'occultism:iesnium_ingot'}
		],
		energy: 100000,
		result: {item: 'kubejs:catalyst_5', count: 64}
	})
	
	//remove ender cells and related items
	event.remove({output: 'powah:ender_core'})
	event.remove({output: 'powah:ender_cell_starter'})
	event.remove({output: 'powah:ender_cell_basic'})
	event.remove({output: 'powah:ender_cell_hardened'})
	event.remove({output: 'powah:ender_cell_blazing'})
	event.remove({output: 'powah:ender_cell_niotic'})
	event.remove({output: 'powah:ender_cell_spirited'})
	event.remove({output: 'powah:ender_cell_nitro'})
	event.remove({output: 'powah:ender_gate_starter'})
	event.remove({output: 'powah:ender_gate_basic'})
	event.remove({output: 'powah:ender_gate_hardened'})
	event.remove({output: 'powah:ender_gate_blazing'})
	event.remove({output: 'powah:ender_gate_niotic'})
	event.remove({output: 'powah:ender_gate_spirited'})
	event.remove({output: 'powah:ender_gate_nitro'})
	
	//limit recipes to blazing tier
	event.remove({input: 'powah:crystal_niotic'})
	event.remove({input: 'powah:crystal_spirited'})
	event.remove({input: 'powah:crystal_nitro'})
	event.remove({output: 'powah:crystal_niotic'})
	event.remove({output: 'powah:crystal_spirited'})
	event.remove({output: 'powah:crystal_nitro'})
})