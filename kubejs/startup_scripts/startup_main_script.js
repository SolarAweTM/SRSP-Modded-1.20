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
	event.create('incomplete_iron_component', 'create:sequenced_assembly').texture('srsp:item/incomplete_iron_component')
	event.create('incomplete_steel_component', 'create:sequenced_assembly').texture('srsp:item/incomplete_steel_component')
	event.create('incomplete_electronic_component', 'create:sequenced_assembly').texture('srsp:item/incomplete_electronic_component')
	event.create('incomplete_light_bulb', 'create:sequenced_assembly').texture('srsp:item/incomplete_light_bulb')
	event.create('incomplete_machine', 'create:sequenced_assembly').texture('srsp:item/incomplete_machine')
	//sapling exchange token
	event.create('trizzco_point').texture('srsp:item/trizzco_point')
	//flower shop token
	event.create('flower_token').texture('kubejs:item/example_item') //TODO: Give proper texture
	//tier 4 and 5 grader catalysts
	event.create('catalyst_4').texture('srsp:item/catalyst_4') // Fehdison
	event.create('catalyst_5').texture('srsp:item/catalyst_5')
	//rainbow furnace components
	event.create('newest_artifact').texture('srsp:item/shadow_crystal')
	event.create('yaoi_artifact').texture('srsp:item/brutal_brass') // [03]
	event.create('yuri_artifact').texture('srsp:item/yuri_manga') // Fehdison
	event.create('sugoi_artifact').texture('kubejs:item/example_item') //TODO: Give proper texture
	//more socket items
	event.create('super_socket_sigil').texture('srsp:item/super_socket_sigil')
	
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
	//edible uranium
	event.modify('immersiveengineering:raw_uranium', item => {
		item.foodProperties = food => {
			food.hunger(1)
			food.saturation(1)
			food.effect('minecraft:instant_damage', -1, 100, 1.0)
		}
	})
	//buff dragonscale armor
	const IAF_DRAGONSCALE_HELMETS = [
		'iceandfire:armor_red_helmet',
		'iceandfire:armor_bronze_helmet',
		'iceandfire:armor_green_helmet',
		'iceandfire:armor_gray_helmet',
		'iceandfire:armor_blue_helmet',
		'iceandfire:armor_white_helmet',
		'iceandfire:armor_sapphire_helmet',
		'iceandfire:armor_silver_helmet',
		'iceandfire:armor_electric_helmet',
		'iceandfire:armor_amethyst_helmet',
		'iceandfire:armor_copper_helmet',
		'iceandfire:armor_black_helmet'
	]
	IAF_DRAGONSCALE_HELMETS.forEach(armor => {
		event.modify(armor, item => {
			item.armorProtection = 6
			item.addAttribute('minecraft:generic.max_health', '567b6f6b-2d9e-4c6d-8d2c-fe2f7f973f19', '567b6f6b-2d9e-4c6d-8d2c-fe2f7f973f19', 2, 'ADDITION')
		})
	})
	const IAF_DRAGONSCALE_CHESTPLATES = [
		'iceandfire:armor_red_chestplate',
		'iceandfire:armor_bronze_chestplate',
		'iceandfire:armor_green_chestplate',
		'iceandfire:armor_gray_chestplate',
		'iceandfire:armor_blue_chestplate',
		'iceandfire:armor_white_chestplate',
		'iceandfire:armor_sapphire_chestplate',
		'iceandfire:armor_silver_chestplate',
		'iceandfire:armor_electric_chestplate',
		'iceandfire:armor_amethyst_chestplate',
		'iceandfire:armor_copper_chestplate',
		'iceandfire:armor_black_chestplate'
	]
	IAF_DRAGONSCALE_CHESTPLATES.forEach(armor => {
		event.modify(armor, item => {
			item.armorProtection = 10
			item.addAttribute('minecraft:generic.max_health', '567b6f6b-2d9e-4c6d-8d2c-fe2f7f973f1a', '567b6f6b-2d9e-4c6d-8d2c-fe2f7f973f1a', 2, 'ADDITION')
		})
	})
	const IAF_DRAGONSCALE_LEGGINGS = [
		'iceandfire:armor_red_leggings',
		'iceandfire:armor_bronze_leggings',
		'iceandfire:armor_green_leggings',
		'iceandfire:armor_gray_leggings',
		'iceandfire:armor_blue_leggings',
		'iceandfire:armor_white_leggings',
		'iceandfire:armor_sapphire_leggings',
		'iceandfire:armor_silver_leggings',
		'iceandfire:armor_electric_leggings',
		'iceandfire:armor_amethyst_leggings',
		'iceandfire:armor_copper_leggings',
		'iceandfire:armor_black_leggings'
	]
	IAF_DRAGONSCALE_LEGGINGS.forEach(armor => {
		event.modify(armor, item => {
			item.armorProtection = 8
			item.addAttribute('minecraft:generic.max_health', '567b6f6b-2d9e-4c6d-8d2c-fe2f7f973f1b', '567b6f6b-2d9e-4c6d-8d2c-fe2f7f973f1b', 2, 'ADDITION')
		})
	})
	const IAF_DRAGONSCALE_BOOTS = [
		'iceandfire:armor_red_boots',
		'iceandfire:armor_bronze_boots',
		'iceandfire:armor_green_boots',
		'iceandfire:armor_gray_boots',
		'iceandfire:armor_blue_boots',
		'iceandfire:armor_white_boots',
		'iceandfire:armor_sapphire_boots',
		'iceandfire:armor_silver_boots',
		'iceandfire:armor_electric_boots',
		'iceandfire:armor_amethyst_boots',
		'iceandfire:armor_copper_boots',
		'iceandfire:armor_black_boots'
	]
	IAF_DRAGONSCALE_BOOTS.forEach(armor => {
		event.modify(armor, item => {
			item.armorProtection = 6
			item.addAttribute('minecraft:generic.max_health', '567b6f6b-2d9e-4c6d-8d2c-fe2f7f973f1c', '567b6f6b-2d9e-4c6d-8d2c-fe2f7f973f1c', 2, 'ADDITION')
		})
	})
})

MoreJSEvents.registerPotionBrewing((event) => {
	//remove flying potion
	event.removeByPotion("apotheosis:flying", null, null)
	event.removeByPotion(null, null, "apotheosis:flying")
})