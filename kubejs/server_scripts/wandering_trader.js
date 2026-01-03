// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('-KubeJS- Wandering Trader server script loaded.')

let item_blacklist = [
	'minecraft:diamond_axe',
	'minecraft:diamond_sword',
	'minecraft:diamond_shovel',
	'minecraft:diamond_pickaxe',
	'minecraft:diamond_hoe',
	'minecraft:diamond_helmet',
	'minecraft:diamond_chestplate',
	'minecraft:diamond_leggings',
	'minecraft:diamond_boots',
	'minecraft:iron_axe',
	'minecraft:iron_sword',
	'minecraft:iron_shovel',
	'minecraft:iron_pickaxe',
	'minecraft:iron_hoe',
	'minecraft:iron_helmet',
	'minecraft:iron_chestplate',
	'minecraft:iron_leggings',
	'minecraft:iron_boots'
]
MoreJSEvents.wandererTrades((event) => {
    item_blacklist.forEach(blacklistedItem => {
		event.removeTrades({
			firstItem: blacklistedItem,
			secondItem: 'minecraft:emerald',
			outputItem: blacklistedItem
		})
		event.removeTrades({
			firstItem: 'minecraft:diamond',
			secondItem: 'minecraft:phantom_membrane',
			outputItem: blacklistedItem
		})
		event.removeTrades({
			firstItem: 'minecraft:diamond',
			secondItem: 'minecraft:emerald',
			outputItem: blacklistedItem
		})
		event.removeTrades({
			firstItem: 'minecraft:iron_ingot',
			secondItem: 'minecraft:emerald',
			outputItem: blacklistedItem
		})
	})
})

MoreJSEvents.updateWandererOffers((event) => { //because apotheosis is inconsistent with how it implements trades
	event.getOffers().forEach(offer => {
		item_blacklist.forEach(blacklistedItem => {
			if(offer.getOutput() == blacklistedItem){offer.setDisabled(true)}
		})
	})
})