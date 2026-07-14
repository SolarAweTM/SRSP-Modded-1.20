// priority: 0

console.info('-KubeJS- Ice and Fire server script loaded.')

ServerEvents.recipes(event => {
	event.remove({output:'iceandfire_curios:ferocious_knuckles'})
	event.remove({output:'iceandfire_curios:bleeding_heart_of_stone'})
	event.remove({output:'iceandfire_curios:dragon_heart'})
	event.shaped('iceandfire_curios:dragon_heart',
		[
			'IGH',
			'OCD',
			'FKL'
		],
		{
			I: 'iceandfire:ice_dragon_heart',
			G: 'iceandfire:gorgon_head',
			H: 'iceandfire:hydra_heart',
			O: 'iceandfire:dragonsteel_ice_block',
			C: 'artifacts:crystal_heart',
			D: 'iceandfire:dragonsteel_lightning_block',
			F: 'iceandfire:fire_dragon_heart',
			K: 'iceandfire:dragonsteel_fire_block',
			L: 'iceandfire:lightning_dragon_heart'
		}
	)
	
	event.remove({output:'iceandfire_curios:tide_necklace'})
	event.shaped('iceandfire_curios:tide_necklace',
		[
			' BS',
			'TKB',
			'TT '
		],
		{
			B: '#iceandfire:storage_blocks/scales/sea_serpent',
			S: '#forge:string',
			T: 'iceandfire:sea_serpent_fang',
			K: 'iceandfire:seaserpent_skull'
		}
	)
	
	event.remove({output:'iceandfire_curios:torn_dreadbanner'})
	event.shaped('iceandfire_curios:torn_dreadbanner',
		[
			'STR',
			'WBW',
			' B '
		],
		{
			S: 'botania:blaze_block',
			T: '#chipped:crying_obsidian',
			R: 'quark:sugar_cane_block',
			W: '#minecraft:wool',
			B: '#c:bones/wither'
		}
	)
	
	event.remove({output:'iceandfire_curios:ring_of_festering'})
	event.shaped('iceandfire_curios:ring_of_festering',
		[
			'EBC',
			'BSC',
			'CCC'
		],
		{
			E: 'immersiveengineering:raw_block_uranium',
			B: 'minecraft:copper_block',
			C: '#forge:ingots/copper',
			S: 'artifacts:eternal_steak'
		}
	)
	
	event.remove({output:'iceandfire_curios:ring_of_bartering'})
	event.shaped('iceandfire_curios:ring_of_bartering',
		[
			'EBC',
			'BSC',
			'CCC'
		],
		{
			E: 'minecraft:emerald_block',
			B: '#forge:storage_blocks/silver',
			C: '#forge:ingots/silver',
			S: 'artifacts:villager_hat'
		}
	)
	
	event.remove({output:'iceandfire_curios:ring_of_emaciation'})
	event.shaped('iceandfire_curios:ring_of_emaciation',
		[
			'EBC',
			'BSC',
			'CCC'
		],
		{
			E: 'createaddition:electrum_rod',
			B: 'minecraft:copper_block',
			C: '#forge:ingots/copper',
			S: 'storagedrawers:drawer_key'
		}
	)
	
	event.replaceInput(
	{output:'iceandfire_curios:dreaded_candle'},
	'iceandfire:dread_stone_bricks',
	'minecraft:obsidian')
	
	event.shaped('iceandfire:fire_lily',
		[
			'BBB',
			'BLB',
			'BBB'
		],
		{
			B: 'minecraft:blaze_powder',
			L: 'botania:thermalily'
		}
	)
	event.shaped('iceandfire:frost_lily',
		[
			'BBB',
			'BLB',
			'BBB'
		],
		{
			B: 'minecraft:packed_ice',
			L: 'biomesoplenty:waterlily'
		}
	)
	event.shaped('iceandfire:lightning_lily',
		[
			'BBB',
			'BLB',
			'BBB'
		],
		{
			B: 'immersiveengineering:wire_copper',
			L: 'biomeswevegone:incan_lily'
		}
	)
})