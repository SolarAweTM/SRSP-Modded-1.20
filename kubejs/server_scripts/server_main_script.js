// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Main server script loaded.')

ServerEvents.recipes(event => {
	// fucking obliterate the inception upgrade
	event.remove({ output: 'sophisticatedbackpacks:inception_upgrade' })
	//remove item filters recipes (only used to make quests)
	event.remove({ mod: 'itemfilters' })
	//elytra is kil (NEVERMIND)
	// event.remove({ output: 'minecraft:elytra' })
	event.shapeless(
		'minecraft:crafting_table', //result
		[
			'#biomeswevegone:crafting_tables' //inputs
		]
	)
})

ServerEvents.tags('block', event => {
	event.add('framedblocks:frameable', 'ars_nouveau:source_gem_block')
	event.add('forge:workbenches', '#biomeswevegone:crafting_tables')
})

ServerEvents.tags('item', event => {
	let addToBackSlot = [
    "create_jetpack:jetpack",
	"create_jetpack:netherite_jetpack"
	]
	let removeFromCurioSlot = [
	"botania:cosmetic_black_bowtie",
	"botania:cosmetic_black_tie",
	"botania:cosmetic_red_glasses",
	"botania:cosmetic_puffy_scarf",
	"botania:cosmetic_engineer_goggles",
	"botania:cosmetic_eyepatch",
	"botania:cosmetic_wicked_eyepatch",
	"botania:cosmetic_red_ribbons",
	"botania:cosmetic_pink_flower_bud",
	"botania:cosmetic_polka_dotted_bows",
	"botania:cosmetic_blue_butterfly",
	"botania:cosmetic_cat_ears",
	"botania:cosmetic_witch_pin",
	"botania:cosmetic_devil_tail",
	"botania:cosmetic_kamui_eye",
	"botania:cosmetic_googly_eyes",
	"botania:cosmetic_four_leaf_clover",
	"botania:cosmetic_clock_eye",
	"botania:cosmetic_unicorn_horn",
	"botania:cosmetic_devil_horns",
	"botania:cosmetic_hyper_plus",
	"botania:cosmetic_botanist_emblem",
	"botania:cosmetic_ancient_mask",
	"botania:cosmetic_eerie_mask",
	"botania:cosmetic_alien_antenna",
	"botania:cosmetic_anaglyph_glasses",
	"botania:cosmetic_orange_shades",
	"botania:cosmetic_groucho_glasses",
	"botania:cosmetic_thick_eyebrows",
	"botania:cosmetic_lusitanic_shield",
	"botania:cosmetic_tiny_potato_mask",
	"botania:cosmetic_questgiver_mark",
	"botania:cosmetic_thinking_hand"
	]
	addToBackSlot.forEach(item => {
		event.add('curios:back', item) // add create jetpack stuff to the back slot
	})
	removeFromCurioSlot.forEach(item => {
		event.remove('curios:curio', item) // remove botania cosmetics ability to be in any curio slot (they have their own slots now and it bloated the tooltip)
	})
	event.add('forge:workbenches', '#biomeswevegone:crafting_tables')
})