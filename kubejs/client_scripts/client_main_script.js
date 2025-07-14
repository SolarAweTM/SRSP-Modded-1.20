// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Client main script loaded.')

ItemEvents.tooltip(event => {
	// tooltip modification noting that the enchanting apparatus has been lobotomized
	event.add('ars_nouveau:enchanting_apparatus', [
	Text.red('Getting vanilla enchantments from this'), 
	Text.red('has been disabled, please use the'), 
	Text.red('normal enchanting table instead.'), 
	'', 
	Text.red('You can still get Mana Regen, Mana Boost,'), 
	Text.red('and Reactive from here, though, and'), 
	Text.red('other functions of this item remain intact.')
	])
	
	// tooltip modification noting that you use the enchanting apparatus to upgrade your spell book now
	event.add('ars_nouveau:apprentice_spell_book', [
	Text.green('Use the Enchanting Apparatus to upgrade.')
	])
	event.add('ars_nouveau:novice_spell_book', [
	Text.green('Use the Enchanting Apparatus to upgrade.')
	])
	
	// tooltips for smithing templates
	event.add('kubejs:neptunium_upgrade_smithing_template', [
	Text.gray("Neptunium Upgrade"),
	"",
	Text.gray("Applies to:"),
	Text.blue(" Netherite Equipment"),
	Text.gray("Ingredients:"),
	Text.blue(" Neptunium Ingot"),
	Text.red("Removes applied armor trims in the process.")
	])
	
	event.add('kubejs:terrasteel_upgrade_smithing_template', [
	Text.gray("Terrasteel Upgrade"),
	"",
	Text.gray("Applies to:"),
	Text.blue(" Netherite Equipment"),
	Text.gray("Ingredients:"),
	Text.blue(" Gaia Spirit Ingot"),
	Text.red("Removes applied armor trims in the process.")
	])
	
	event.add('silentgear:gear_smithing_table', [
	"Decorative item."
	])
	event.add('botania:terra_sword', [
	Text.green("no way terraria reference!!!1!!111!!")
	])
	
	//use literally anything BUT the elytra
	event.addAdvanced('minecraft:elytra', (item, advanced, text) => {
		if(!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('Shift ').yellow(), Text.of('to view a note').gray()])
		}
		else {
			text.add(1, Text.green("The pack has many other options for flight,"))
			text.add(2, Text.green("often much better than an Elytra."))
			text.add(3, "")
			text.add(4, Text.green("Options include Flügel Tiara,"))
			text.add(5, Text.green("Create Jetpacks, the Ritual of Flight,"))
			text.add(6, Text.green("and the Thread of Gliding."))
		}
	})
	
	//lock leap
	event.addAdvanced('ars_nouveau:glyph_leap', (item, advanced, text) => {
		text.add(2, Text.red('Disabled in current phase.'))
	})
	
	//notify of focus adjustment
	event.addAdvanced('ars_nouveau:shapers_focus', (item, advanced, text) => {
		text.add(2, Text.red('Recipe altered for balance.'))
	})
	
	//tooltip for stuff disabled in this phase
	let disabled_items = [
	'botania:terrasteel_helmet',
	'botania:terrasteel_chestplate',
	'botania:terrasteel_leggings',
	'botania:terrasteel_boots'
	]
	disabled_items.forEach(item => {
		event.add(item, [
		Text.red("Disabled in current phase.")
		])
	})
	
	//tooltips noting buffs
	let buffed_items = [
	'ars_nouveau:battlemage_hood',
	'ars_nouveau:battlemage_robes',
	'ars_nouveau:battlemage_leggings',
	'ars_nouveau:battlemage_boots'
	]
	buffed_items.forEach(item => {
		event.add(item, [
		Text.green("Buffed to match the stats of Netherite.")
		])
	})
})

JEIEvents.hideItems(event => {
	let hidden_items = [
		'sophisticatedbackpacks:inception_upgrade',
		'itemfilters:always_true',
		'itemfilters:always_false',
		'itemfilters:or',
		'itemfilters:and',
		'itemfilters:not',
		'itemfilters:xor',
		'itemfilters:tag',
		'itemfilters:mod',
		'itemfilters:id_regex',
		'itemfilters:damage',
		'itemfilters:block',
		'itemfilters:max_count',
		'itemfilters:strong_nbt',
		'itemfilters:weak_nbt',
		'itemfilters:custom',
		'silentgear:helmet_blueprint',
		'silentgear:chestplate_blueprint',
		'silentgear:leggings_blueprint',
		'silentgear:boots_blueprint',
		'silentgear:elytra_blueprint',
		'silentgear:helmet_template',
		'silentgear:chestplate_template',
		'silentgear:leggings_template',
		'silentgear:boots_template',
		'silentgear:elytra_template',
		'silentgear:helmet_plates',
		'silentgear:chestplate_plates',
		'silentgear:legging_plates',
		'silentgear:boot_plates',
		'silentgear:elytra_wings',
		'silentgear:lining_blueprint',
		'silentgear:lining_template',
		'silentgear:lining',
		'silentgear:helmet',
		'silentgear:chestplate',
		'silentgear:leggings',
		'silentgear:boots',
		'silentgear:elytra',
		'silentgear:refabricator',
		'silentgear:fishing_rod',
		'silentgear:fishing_rod_blueprint',
		'silentgear:fishing_rod_template',
		'silentgear:fishing_reel_and_hook',
		'kubejs:skibidi_hawk_tuah',
		'kubejs:intentionally_unobtainable'
	]
	hidden_items.forEach(item => {
		event.hide(item) // noted: this also removes them from creative menus
	})
})