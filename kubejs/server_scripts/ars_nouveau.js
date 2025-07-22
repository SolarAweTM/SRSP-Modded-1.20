// priority: 0

console.info('-KubeJS- Ars Nouveau Enchanting Apparatus server script loaded.')
// requires: kubejsarsnouveau
ServerEvents.recipes(event => {
  //holy shit ars nouveau PLEASE group your recipes - these are for the enchanting apparatus
  event.remove({ id: 'ars_nouveau:power_1' })
  event.remove({ id: 'ars_nouveau:power_2' })
  event.remove({ id: 'ars_nouveau:power_3' })
  event.remove({ id: 'ars_nouveau:power_4' })
  event.remove({ id: 'ars_nouveau:power_5' })
  event.remove({ id: 'ars_nouveau:feather_falling_1' })
  event.remove({ id: 'ars_nouveau:feather_falling_2' })
  event.remove({ id: 'ars_nouveau:feather_falling_3' })
  event.remove({ id: 'ars_nouveau:feather_falling_4' })
  event.remove({ id: 'ars_nouveau:blast_protection_1' })
  event.remove({ id: 'ars_nouveau:blast_protection_2' })
  event.remove({ id: 'ars_nouveau:blast_protection_3' })
  event.remove({ id: 'ars_nouveau:blast_protection_4' })
  event.remove({ id: 'ars_nouveau:unbreaking_1' })
  event.remove({ id: 'ars_nouveau:unbreaking_2' })
  event.remove({ id: 'ars_nouveau:unbreaking_3' })
  event.remove({ id: 'ars_nouveau:multishot_1' })
  event.remove({ id: 'ars_nouveau:piercing_1' })
  event.remove({ id: 'ars_nouveau:piercing_2' })
  event.remove({ id: 'ars_nouveau:piercing_3' })
  event.remove({ id: 'ars_nouveau:piercing_4' })
  event.remove({ id: 'ars_nouveau:efficiency_1' })
  event.remove({ id: 'ars_nouveau:efficiency_2' })
  event.remove({ id: 'ars_nouveau:efficiency_3' })
  event.remove({ id: 'ars_nouveau:efficiency_4' })
  event.remove({ id: 'ars_nouveau:efficiency_5' })
  event.remove({ id: 'ars_nouveau:smite_1' })
  event.remove({ id: 'ars_nouveau:smite_2' })
  event.remove({ id: 'ars_nouveau:smite_3' })
  event.remove({ id: 'ars_nouveau:smite_4' })
  event.remove({ id: 'ars_nouveau:smite_5' })
  event.remove({ id: 'ars_nouveau:sharpness_1' })
  event.remove({ id: 'ars_nouveau:sharpness_2' })
  event.remove({ id: 'ars_nouveau:sharpness_3' })
  event.remove({ id: 'ars_nouveau:sharpness_4' })
  event.remove({ id: 'ars_nouveau:sharpness_5' })
  event.remove({ id: 'ars_nouveau:reactive_4' })
  event.remove({ id: 'ars_nouveau:bane_of_arthropods_1' })
  event.remove({ id: 'ars_nouveau:bane_of_arthropods_2' })
  event.remove({ id: 'ars_nouveau:bane_of_arthropods_3' })
  event.remove({ id: 'ars_nouveau:bane_of_arthropods_4' })
  event.remove({ id: 'ars_nouveau:bane_of_arthropods_5' })
  event.remove({ id: 'ars_nouveau:respiration_1' })
  event.remove({ id: 'ars_nouveau:respiration_2' })
  event.remove({ id: 'ars_nouveau:respiration_3' })
  event.remove({ id: 'ars_nouveau:aqua_affinity_1' })
  event.remove({ id: 'ars_nouveau:looting_1' })
  event.remove({ id: 'ars_nouveau:looting_2' })
  event.remove({ id: 'ars_nouveau:looting_3' })
  event.remove({ id: 'ars_nouveau:punch_1' })
  event.remove({ id: 'ars_nouveau:punch_2' })
  event.remove({ id: 'ars_nouveau:quick_charge_1' })
  event.remove({ id: 'ars_nouveau:quick_charge_2' })
  event.remove({ id: 'ars_nouveau:quick_charge_3' })
  event.remove({ id: 'ars_nouveau:depth_strider_1' })
  event.remove({ id: 'ars_nouveau:depth_strider_2' })
  event.remove({ id: 'ars_nouveau:depth_strider_3' })
  event.remove({ id: 'ars_nouveau:fortune_1' })
  event.remove({ id: 'ars_nouveau:fortune_2' })
  event.remove({ id: 'ars_nouveau:fortune_3' })
  event.remove({ id: 'ars_nouveau:projectile_protection_1' })
  event.remove({ id: 'ars_nouveau:projectile_protection_2' })
  event.remove({ id: 'ars_nouveau:projectile_protection_3' })
  event.remove({ id: 'ars_nouveau:projectile_protection_4' })
  event.remove({ id: 'ars_nouveau:projectile_protection_5' })
  event.remove({ id: 'ars_nouveau:fire_protection_1' })
  event.remove({ id: 'ars_nouveau:fire_protection_2' })
  event.remove({ id: 'ars_nouveau:fire_protection_3' })
  event.remove({ id: 'ars_nouveau:fire_protection_4' })
  event.remove({ id: 'ars_nouveau:fire_protection_5' })
  event.remove({ id: 'ars_nouveau:thorns_1' })
  event.remove({ id: 'ars_nouveau:thorns_2' })
  event.remove({ id: 'ars_nouveau:thorns_3' })
  event.remove({ id: 'ars_nouveau:sweeping_1' })
  event.remove({ id: 'ars_nouveau:sweeping_2' })
  event.remove({ id: 'ars_nouveau:sweeping_3' })
  event.remove({ id: 'ars_nouveau:protection_1' })
  event.remove({ id: 'ars_nouveau:protection_2' })
  event.remove({ id: 'ars_nouveau:protection_3' })
  event.remove({ id: 'ars_nouveau:protection_4' })
  event.remove({ id: 'ars_nouveau:protection_5' })
  event.remove({ id: 'ars_nouveau:knockback_1' })
  event.remove({ id: 'ars_nouveau:knockback_2' })
  event.remove({ id: 'ars_nouveau:infinity_1' })
  event.remove({ id: 'ars_nouveau:silk_touch_1' })
  event.remove({ id: 'ars_nouveau:fire_aspect_1' })
  event.remove({ id: 'ars_nouveau:fire_aspect_2' })
  event.remove({ id: 'ars_nouveau:flame_1' })
  // remove the default spell book upgrade recipe2 and throw them into the enchanting apparatus
  event.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade' })
  event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:ancient_debris', 'create:polished_rose_quartz', 'create:polished_rose_quartz', 'create:polished_rose_quartz', "botania:manasteel_ingot", "botania:manasteel_ingot", "silentgear:crimson_steel_ingot", "silentgear:crimson_steel_ingot"], // input items
        'ars_nouveau:novice_spell_book', // reagent
        'ars_nouveau:apprentice_spell_book', // output
        1500, // source cost
        true // keep nbt of reagent
    )
  event.remove({ id: 'ars_nouveau:archmage_spell_book_upgrade' })
  event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:nether_star', 'apotheosis:warden_tendril', 'botania:dragonstone', 'minecraft:chorus_fruit', "ars_nouveau:wilden_tribute", "minecraft:chorus_fruit", "botania:dragonstone", "apotheosis:warden_tendril"], // input items
        'ars_nouveau:apprentice_spell_book', // reagent
        'ars_nouveau:archmage_spell_book', // output
        5000, // source cost
        true // keep nbt of reagent
    )
  //terrasteel smithing template recipe
  event.recipes.ars_nouveau.enchanting_apparatus(
        ['botania:rune_summer', 'botania:rune_spring', 'botania:rune_autumn', 'botania:rune_winter', 'botania:livingwood_twig', 'botania:terrasteel_block', 'botania:livingwood_twig'], // input items
        'minecraft:netherite_upgrade_smithing_template', // reagent
        'kubejs:terrasteel_upgrade_smithing_template', // output
        10000, // source cost
        true // keep nbt of reagent
    )
	//imbuement chamber recipes
	// you can tell i stopped copy pasting from the kubejs wiki by the indentation
	event.recipes.ars_nouveau.imbuement(
        'minecraft:iron_ingot', // input item
        'botania:manasteel_ingot', // output
        500, // source cost
        []
    )
	event.recipes.ars_nouveau.imbuement(
        'minecraft:diamond',
        'botania:mana_diamond', 
        1600,
        []
    )
	event.recipes.ars_nouveau.imbuement(
        'minecraft:ender_pearl',
        'botania:mana_pearl', 
        1000,
        []
    )
	event.recipes.ars_nouveau.imbuement(
        ['minecraft:gunpowder', 'minecraft:redstone', 'minecraft:glowstone_dust', 'minecraft:sugar'],
        'botania:mana_powder', 
        100,
        []
    )
	event.recipes.ars_nouveau.imbuement(
        ['minecraft:white_dye', 'minecraft:light_gray_dye', 'minecraft:gray_dye', 'minecraft:black_dye',
		'minecraft:brown_dye', 'minecraft:red_dye', 'minecraft:orange_dye', 'minecraft:yellow_dye',
		'minecraft:lime_dye', 'minecraft:green_dye', 'minecraft:cyan_dye', 'minecraft:light_blue_dye',
		'minecraft:blue_dye', 'minecraft:purple_dye', 'minecraft:magenta_dye', 'minecraft:pink_dye'],
        'botania:mana_powder', 
        100,
        []
    )
	event.recipes.ars_nouveau.enchanting_apparatus(
        ['minecraft:iron_ingot'], // input items
        'ars_nouveau:source_gem', // reagent
        'kubejs:source_ingot', // output
        1000, // source cost
        true // keep nbt of reagent
    )
	// replace the battlemage armor recipe with a netherite equivalent
	event.remove({id:'ars_nouveau:battlemage_hood'})
	event.remove({id:'ars_nouveau:battlemage_robes'})
	event.remove({id:'ars_nouveau:battlemage_leggings'})
	event.remove({id:'ars_nouveau:battlemage_boots'})
	event.recipes.ars_nouveau.enchanting_apparatus(
		['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber'],
		'minecraft:netherite_helmet',
		'ars_nouveau:battlemage_hood',
		0,
		true
	)
	event.recipes.ars_nouveau.enchanting_apparatus(
		['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber'],
		'minecraft:netherite_chestplate',
		'ars_nouveau:battlemage_robes',
		0,
		true
	)
	event.recipes.ars_nouveau.enchanting_apparatus(
		['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber'],
		'minecraft:netherite_leggings',
		'ars_nouveau:battlemage_leggings',
		0,
		true
	)
	event.recipes.ars_nouveau.enchanting_apparatus(
		['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber'],
		'minecraft:netherite_boots',
		'ars_nouveau:battlemage_boots',
		0,
		true
	)
	
	event.remove({id:'ars_nouveau:glyph_leap'}) //re-enable and rebalance in a later phase
	/* TODO: FUTURE PHASE
	event.recipes.ars_nouveau.glyph(
		'ars_nouveau:glyph_leap', //glyph output (must be a glyph)
		[], //required input items
		25 //xp cost in levels
	)
	*/
	
	event.remove({id:'ars_nouveau:shapers_focus'}) //make shapers focus harder to obtain (actually in a later phase)
	/* TODO: FUTURE PHASE
	event.recipes.ars_nouveau.enchanting_apparatus(
		['minecraft:netherite_block', 'botania:manasteel_block', 'crittersandcompanions:sea_bunny_slime_block', 'minecraft:piston'], //reagents
		'ars_nouveau:manipulation_essence', //input item
		'ars_nouveau:shapers_focus', //output item
		1000, //source cost
		false //keep nbt of input item?
	)
	*/
	
	event.remove({id:'ars_nouveau:thread_life_drain'}) //remove the thread of life drain
	event.remove({id:'ars_nouveau:thread_magic_capacity'}) //remove the thread of magic capacity
	
	/* scrapped
	event.remove({id:'ars_nouveau:thread_spellpower'})
	event.recipes.ars_nouveau.enchanting_apparatus(
		['ars_nouveau:fire_essence', 
		'ars_nouveau:conjuration_essence', 
		'ars_nouveau:earth_essence', 
		'ars_nouveau:air_essence', 
		'ars_nouveau:abjuration_essence', 
		'ars_nouveau:water_essence', 
		'ars_nouveau:manipulation_essence', 
		'ars_nouveau:magebloom', 
		'ars_nouveau:glyph_harm', 
		'ars_nouveau:glyph_hex',
		'ars_nouveau:experience_gem',
		'ars_nouveau:experience_gem'], //reagents
		'ars_nouveau:blank_thread', //input item
		'ars_nouveau:thread_spellpower', //output item
		1000, //source cost
		false //keep nbt of input item?
	)
	*/
})