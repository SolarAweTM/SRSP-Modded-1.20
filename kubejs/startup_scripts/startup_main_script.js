// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Main startup script loaded.')

StartupEvents.registry('item', event => {
	// Create the source ingot
	/* Uncreate the source ingot
	event.create('source_ingot').texture('srsp:item/source_ingot').tag('ingots/source').tooltip("§8yep, it's an ingot now.")
	*/
	// 
	event.create('skibidi_hawk_tuah').texture('kubejs:item/example_item')
	// Smithing templates
	event.create('neptunium_upgrade_smithing_template').texture('srsp:item/neptunium_upgrade_smithing_template')
	event.create('terrasteel_upgrade_smithing_template').texture('srsp:item/terrasteel_upgrade_smithing_template')
	// generic unobtainable item because apotheosis doesnt let you outright remove its spawner mods
	event.create('intentionally_unobtainable').texture('minecraft:item/barrier')
	//new crushed raw ores
	event.create('crushed_raw_crimson_iron').texture('srsp:item/crushed_raw_crimson_iron')
	event.create('crushed_raw_azure_silver').texture('srsp:item/crushed_raw_azure_silver')
	event.create('crushed_raw_cobalt').texture('srsp:item/crushed_raw_cobalt')
	//intermediate items for sequenced assembly
	event.create('incomplete_iron_component').texture('srsp:item/incomplete_iron_component')
	event.create('incomplete_steel_component').texture('srsp:item/incomplete_steel_component')
})

StartupEvents.registry('fluid', event => { //molten fluids for tconstruct/silent gear
	event.create('molten_crimson_iron')
	.thickTexture(0xEF446C)
	.bucketColor(0xEF446C)
	.displayName('Molten Crimson Iron')
	
	event.create('molten_crimson_steel')
	.thickTexture(0xD9143B)
	.bucketColor(0xD9143B)
	.displayName('Molten Crimson Steel')
	
	event.create('molten_azure_silver')
	.thickTexture(0x9C77E9)
	.bucketColor(0x9C77E9)
	.displayName('Molten Azure Silver')
	
	event.create('molten_azure_electrum')
	.thickTexture(0x4474E0)
	.bucketColor(0x4474E0)
	.displayName('Molten Azure Electrum')
	
	event.create('molten_blaze_gold')
	.thickTexture(0xD51D0F)
	.bucketColor(0xD51D0F)
	.displayName('Molten Blaze Gold')
	
	event.create('molten_tyrian_steel')
	.thickTexture(0xAE107E)
	.bucketColor(0xAE107E)
	.displayName('Molten Tyrian Steel')
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

MoreJSEvents.registerPotionBrewing((event) => {
	//remove flying potion
	event.removeByPotion("apotheosis:flying", null, null)
	event.removeByPotion(null, null, "apotheosis:flying")
})