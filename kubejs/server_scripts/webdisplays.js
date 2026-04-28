// priority: 0

console.info('-KubeJS- Web Displays server script loaded.')

ServerEvents.recipes(event => {
	event.remove({mod:'webdisplays'})
	event.shaped(
		Item.of('webdisplays:screen', 4),
		[
			'GGG',
			'LRE',
			'PPP'
		],
		{
			G: 'minecraft:glass_pane',
			L: 'ae2:logic_processor',
			R: 'minecraft:redstone',
			E: 'ae2:engineering_processor',
			P: '#ae2:illuminated_panel'
		}
	)
	event.shapeless(
		Item.of('webdisplays:screencfg'),
		['#ae2:quartz_wrench', 'ae2:calculation_processor', 'webdisplays:screen']
	)
	event.shapeless(
		Item.of('webdisplays:minepad'),
		['ae2:network_tool', 'ae2:engineering_processor', 'webdisplays:screen', 'ae2:logic_processor']
	)
	event.shaped(
		Item.of('webdisplays:rctrl'),
		[
			' W ',
			'BBB',
			'BOB'
		],
		{
			W: 'ae2:wireless_receiver',
			B: '#forge:ingots/brass',
			O: 'ae2:wireless_booster'
		}
	)
	event.shaped(
		Item.of('webdisplays:redctrl'),
		[
			' W ',
			'BBB',
			'BOB'
		],
		{
			W: 'create:redstone_link',
			B: '#forge:ingots/brass',
			O: 'ae2:wireless_booster'
		}
	)
	event.shaped(
		Item.of('webdisplays:craftcomp_laserdiode', 2),
		[
			'I I',
			'IPI',
			' I '
		],
		{
			I: '#forge:ingots/iron',
			P: '#ae2:illuminated_panel'
		}
	)
	event.shaped(
		Item.of('webdisplays:laserpointer'),
		[
			'R',
			'D',
			'B'
		],
		{
			R: 'create:polished_rose_quartz',
			D: 'webdisplays:craftcomp_laserdiode',
			B: 'minecraft:stone_button'
		}
	)
	event.shapeless(
		Item.of('webdisplays:upgrade_lasermouse'),
		['silentgear:advanced_upgrade_base', 'webdisplays:craftcomp_laserdiode']
	)
	event.shapeless(
		Item.of('webdisplays:upgrade_redinput'),
		['silentgear:advanced_upgrade_base', 'minecraft:redstone']
	)
	event.shapeless(
		Item.of('webdisplays:upgrade_redoutput'),
		['silentgear:advanced_upgrade_base', 'minecraft:redstone_torch']
	)
	event.shaped(
		Item.of('webdisplays:keyboard'),
		[
			'BBB',
			'ICI',
			'III'
		],
		{
			B: 'minecraft:stone_button',
			C: 'create:contraption_controls',
			I: '#forge:ingots/iron'
		}
	)
	event.shapeless(
		Item.of('webdisplays:linker'),
		['#ae2:quartz_wrench', 'ae2:logic_processor', 'ae2:calculation_processor']
	)
})