// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Main startup script loaded.')

StartupEvents.registry('item', event => {
	// Create the source ingot
	event.create('source_ingot').texture('srsp:item/source_ingot').tag('ingots/source').tooltip("§8yep, it's an ingot now.")
	// 
	event.create('skibidi_hawk_tuah').texture('kubejs:item/example_item')
	// Smithing templates
	event.create('neptunium_upgrade_smithing_template').texture('srsp:item/neptunium_upgrade_smithing_template')
	event.create('terrasteel_upgrade_smithing_template').texture('srsp:item/terrasteel_upgrade_smithing_template')
	// generic unobtainable item because apotheosis doesnt let you outright remove its spawner mods
	event.create('intentionally_unobtainable').texture('minecraft:item/barrier')
})

ItemEvents.modification(event => {
	//buff the stats of ars nouveau battlemage gear to match netherite
	event.modify('ars_nouveau:battlemage_hood', item => {
		item.armorToughness = 3 // originally 2
		item.armorKnockbackResistance = 0.1 // originally 0
	})
	event.modify('ars_nouveau:battlemage_robes', item => {
		item.armorToughness = 3
		item.armorKnockbackResistance = 0.1
	})
	event.modify('ars_nouveau:battlemage_leggings', item => {
		item.armorToughness = 3
		item.armorKnockbackResistance = 0.1
	})
	event.modify('ars_nouveau:battlemage_boots', item => {
		item.armorToughness = 3
		item.armorKnockbackResistance = 0.1
	})
	//make the elytra irrelevant (recommended options are create jetpack and flugel tiara)
	//make the elytra relevant once again
	/*
	event.modify('minecraft:elytra', item => {
		item.maxDamage = 0
	})
	*/
	//nerf the jetpack armor stats because we have them going in curio slots now
	event.modify('create_jetpack:jetpack', item => {
		item.armorProtection = 0 //default 4
	})
	event.modify('create_jetpack:netherite_jetpack', item => {
		item.armorProtection = 4 //default 8
		item.armorToughness = 0 //default 3
		item.armorKnockbackResistance = 0 //default 0.1
	})
})